import products from '../helper';
import style from '../styleAppStore.module.scss';
import { Link, useLocation } from 'react-router-dom';
import { useSearchParams } from 'react-router-dom';

const Products = () => {
        const location = useLocation();
        console.log("location",location)
  const [searchParams, setSearchParams] = useSearchParams();
  const param = searchParams.get('name') || '';
  const handleInput = input => {
    if (input === '') {
      setSearchParams({});
    } else {
      setSearchParams({ name: input });
    }
  };

  const productList = products.filter(prod =>
    prod.name.toLowerCase().includes(param)
  );

  return (
    <div className={style.productsWrapper}>
      <div className={style.searchProductWrapper}>
        <h3>Search by name...</h3>
        <br />
        <input
          type="text"
          name="searchProduct"
          style={{
            height: '40px',
            width: '400px',
            paddingLeft: '15px',
            fontSize: '18px',
          }}
          value={param}
          onChange={e => handleInput(e.target.value.toLowerCase())}
        />
      </div>
      <br />
      <br />

      <ul>
        {productList.map(product => {
          return (
            <li key={product.id}>
              <Link to={product.id}>{product.name}</Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
export default Products;
