import style from './imgGallery.module.scss';
import axios from 'axios';
import React from 'react';
import ContentLoader from 'react-content-loader';
import PropTypes from 'prop-types';

//<Searchbar>, <ImgGallery>, <ImageGalleryItem>, <Loader>, <Button> и <Modal>

const fetchImgs = async (perPage,page, query) => {
  const apiB = axios.create({
    baseURL: `https://pixabay.com/api/?key=42799638-b50871d8c9a958480a9d6ba7c&image_type=photo&orientation=horizontal`,
  });
  const imagesInfo = await apiB.get(`&per_page=${perPage}&page=${page}&q=${query}`);
  return imagesInfo.data.hits;
};

class ImgGallery extends React.Component {
  state = {
    imagesArr: [],
    error2: null,
    isLoading2: false,
    query: '',
    imageModal: '',
    imageDescription: '',
    isOpenModal: false,
    page: 1,
    perPage:9
  };
  handleQueryChange = input => {
    this.setState({ query: input, page:1, perPage:9,imagesArr: [] });
  };
  handleImg = (input1, input2) =>
    this.setState({
      imageModal: input1,
      imageDescription: input2,
      isOpenModal: true,

    });
  handleCloseModal = () => this.setState({
      isOpenModal: false,
      imageModal: '',
      imageDescription: '',
  });
  
  handleNextPage = () => this.setState({page: this.state.page +1})

  async componentDidUpdate(prevProps, prevState) {if (this.state.query !== ""){
    if (prevState.query !== this.state.query || prevState.page !== this.state.page ) {
      this.setState({ isLoading2: true });

      try {
        const data = await fetchImgs(this.state.perPage, this.state.page, this.state.query);
        this.setState(prevState=>({ imagesArr: [...prevState.imagesArr, ...data] }));
      } catch (error) {
        this.setState({ error2: error });
      } finally {
        this.setState({ isLoading2: false });
      }
    }}
  }

  render() {
    console.log('imagesArr', this.state);
    return (
      <section className={style.imgGalleryAll}>
        <div className={style.imgGallery}>
          <Search handleQueryChange={this.handleQueryChange} />
          <ImageGalleryItem
            data={this.state.imagesArr}
            handleImg={this.handleImg}
          />
          {this.state.isLoading2 && <MyLoader />}
          {this.state.imagesArr.length>0 && <NextPage handleNextPage={this.handleNextPage} />}
        </div>

        {this.state.isOpenModal && (
          <Modal
            imageModal={this.state.imageModal}
            imageDescription={this.state.imageDescription}
            handleCloseModal={this.handleCloseModal}
          />
        )}
      </section>
    );
  }
}
export default ImgGallery;

class ImageGalleryItem extends React.Component {
  render() {
    const { data, handleImg } = this.props;

    return (
      <ul className={style.imgGalleryList}>
        {data.map(({ id, tags, webformatURL }) => {
          return (
            <li key={id} onClick={() => handleImg(webformatURL, tags)}>
              <img src={webformatURL} alt={tags} />
            </li>
          );
        })}
      </ul>
    );
  }
}

class Search extends React.Component {
  handleInputChange = e => {
    e.preventDefault();
    let input = e.target.elements.inputSch.value.trim();
    this.props.handleQueryChange(input);
  };
  render() {
    return (
      <form className={style.searchImg} onSubmit={this.handleInputChange}>
        <button>🍳</button>
        <input type="text" name="inputSch" placeholder="Search a noun....." />
      </form>
    );
  }
}

const MyLoader = () => (
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

class Modal extends React.Component {
  handleClose = e => {
    if (e.target === e.currentTarget) {
      return this.props.handleCloseModal()
    }
  };
  handleEscKey = (e) => {
    if (e.key === 'Escape') {
      this.props.handleCloseModal();
    }
  };

  componentDidMount() {
    window.addEventListener('keydown', this.handleEscKey);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleEscKey);
  }

 


  render() {
    return (
      <div className={style.overlay} onClick={this.handleClose} name="overlay">
        <img
          name="picture"
          src={this.props.imageModal}
          alt={this.props.imageDescription}
        />
      </div>
    );
  }
}

class NextPage extends React.Component{

  render() {
    return <button type="button" className={style.nextPage} onClick={this.props.handleNextPage}>More pictures</button>
  }
}

Search.propTypes = {
  handleQueryChange: PropTypes.func
}
ImageGalleryItem.propTypes = {
  data: PropTypes.array,
  handleImg: PropTypes.func
}
NextPage.propTypes = { handleNextPage: PropTypes.func }
Modal.propTypes={  imageModal: PropTypes.string,
  imageDescription: PropTypes.string,
  handleCloseModal: PropTypes.func}
