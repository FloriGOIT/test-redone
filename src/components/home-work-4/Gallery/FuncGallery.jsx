//section total:1.search, 2. galeria., 3. More. Aditional Loader; fetch
//states: inPending, error, arr gallery

import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import style from './funcGallery.module.scss';
import ContentLoader from 'react-content-loader';

const apiC = axios.create({
  baseURL:
    'https://pixabay.com/api/?key=42799638-b50871d8c9a958480a9d6ba7c&image_type=photo&orientation=horizontal',
});
const fetchGalleryItems = async (query, nrPage) => {
  const isFetching = await apiC.get(`&per_page=3&q=${query}&page=${nrPage}`);
  return isFetching.data.hits;
};

export const FuncGallery = () => {
  const [arrImgs, setArrImgs] = useState([]);
  const [isPending, setIsPending] = useState(false);
  const [ifError, setIfError] = useState(null);
  const [isQuery, setIsQuery] = useState('');
  const [nrPage, setNrPage] = useState(1);
  const [modalInfo, setModalInfo] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const getImgs = async () => {
      setIsPending(true);
      try {
        const data = await fetchGalleryItems(isQuery, nrPage);
        setArrImgs(prevState => [...prevState, ...data]);
      } catch (error) {
        setIfError(error.message);
      } finally {
        setIsPending(false);
      }
    };
    if (isQuery) getImgs();
  }, [isQuery, nrPage]);

  const handleQuery = input => {
    if (isQuery !== input) {
      setArrImgs([]);
      setNrPage(1);
      setIsQuery(input);
    } else {
      return;
    }
  };
  const handleMoreImgs = () => {
    setNrPage(prevState => prevState + 1);
  };

  const handleModalInfo = info => setModalInfo(info);
  const handleToggleModal = () => setIsModalOpen(prevState => !prevState);

  return (
    <section className={style.galleryFAll}>
      <SearchingImg handleQuery={handleQuery} />
      <br />
      <br />
      {isPending && <MyLoaderF />}
      {ifError && <p className={style.error}>Something went wrong: {ifError}</p>}
      <DisplayImgs
        arrImgs={arrImgs}
        handleModalInfo={handleModalInfo}
        handleToggleModal={handleToggleModal}
      />{' '}
      <br />
      <br />
      <MoreImgs handleMoreImgs={handleMoreImgs} />
      {isModalOpen && (
        <Modal
          modalInfo={modalInfo}
          isModalOpen={isModalOpen}
          handleToggleModal={handleToggleModal}
        />
      )}
    </section>
  );
};

const SearchingImg = props => {
  const { handleQuery } = props;
  const handleQueryComponent = e => {
    e.preventDefault();
    const valueInput = e.target.elements.inputSearch.value;
    handleQuery(valueInput);
  };

  return (
    <form onSubmit={handleQueryComponent} className={style.searchingImg}>
      <button type="submit" style={{ fontSize: '28px' }}>
        👌
      </button>
      <input type="text" name="inputSearch" style={{ height: '32px' }} />
    </form>
  );
};

const DisplayImgs = ({ arrImgs, handleModalInfo, handleToggleModal }) => {
  return (
    <>
      <ul className={style.displayImgs}>
        {arrImgs.map(({ id, tags, webformatURL }) => {
          const handleImgInfo = () => {
            const imageInfo = { id, webformatURL, tags };
            handleModalInfo(imageInfo);
            handleToggleModal();
          };
          return (
            <li key={id} id={id} onClick={handleImgInfo}>
              <img
                srcSet={webformatURL}
                alt={tags}
                style={{ width: '400px', height: '400px', objectFit: 'cover' }}
              />
            </li>
          );
        })}
      </ul>
    </>
  );
};

const MoreImgs = ({ handleMoreImgs }) => {
  return (
    <div className={style.moreImgs}>
      <button type="button" onClick={handleMoreImgs}>
        More images
      </button>
    </div>
  );
};

const Modal = ({ modalInfo, handleToggleModal }) => {
  return (<div className={style.modalOverlay} onClick={()=> handleToggleModal()}>
    <img src={modalInfo.webformatURL} alt={ modalInfo.tags} onClick={e=>e.stopPropagation()}/>
</div>)
};

const MyLoaderF = () => {
  return (
    <ContentLoader
      height={140}
      speed={2}
      backgroundColor={'rgba(0, 0, 0, 0.26)'}
      foregroundColor={'rgb(21, 119, 51, 0.80)'}
      viewBox="0 0 380 70"
    >
      <rect x="0" y="0" rx="5" ry="5" width="10" height="10" />
      <rect x="20" y="0" rx="5" ry="5" width="10" height="10" />
      <rect x="40" y="0" rx="5" ry="5" width="10" height="10" />
      <rect x="60" y="0" rx="5" ry="5" width="10" height="10" />
      <rect x="80" y="0" rx="5" ry="5" width="10" height="10" />
      <rect x="100" y="0" rx="5" ry="5" width="10" height="10" />
      <rect x="120" y="0" rx="5" ry="5" width="10" height="10" />
      <rect x="140" y="0" rx="5" ry="5" width="10" height="10" />
      <rect x="160" y="0" rx="5" ry="5" width="10" height="10" />
    </ContentLoader>
  );
};

SearchingImg.propTypes = { handleQuery: PropTypes.func };
DisplayImgs.propTypes = {
  arrImgs: PropTypes.array,
  handleModalInfo: PropTypes.func,
  handleToggleModal: PropTypes.func,
};
MoreImgs.propTypes = { handleMoreImgs: PropTypes.func };
Modal.propTypes = {
  modalInfo: PropTypes.object,
  isModalOpen: PropTypes.bool,
  handleToggleModal: PropTypes.func,
};


/*
Sugesti:

const apiC = axios.create({
  baseURL: 'https://pixabay.com/api/',
});

const fetchGalleryItems = async (query, nrPage) => {
  const response = await apiC.get('', {
    params: {
      key: '42799638-b50871d8c9a958480a9d6ba7c',
      image_type: 'photo',
      orientation: 'horizontal',
      per_page: 3,
      q: query,
      page: nrPage,
    },
  });
  return response.data.hits;
};
*/