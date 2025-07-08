import { Routes, Route } from 'react-router-dom';
import { lazy } from 'react';



const SharedLayout = lazy(() => import('./Pages/SharedLayout'));
const Home = lazy(() => import('./Pages/Home'));
const About = lazy(() => import('./Pages/About'));
const Team = lazy(() => import('./Pages/Team'));
const Mission = lazy(() => import('./Pages/Mission'));
const Products = lazy(() => import('./Pages/Products'));
const ProductDetails = lazy(() => import('./Pages/ProductDetails'));
const NotFound = lazy(() => import('./Pages/NotFound'));

export const GoMerchStore = () => {
  return (

      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route path="/about" element={<About />}>
            <Route path="team" element={<Team />} />
            <Route path="mission" element={<Mission />} />
          </Route>
          <Route path="/products" element={<Products />} />
          <Route path="/products/:id" element={<ProductDetails />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>

  );
};

/*Routes <Home/><About/><Products/>
<SharedLayout>
<Home/> index
<About>
        <Team/>
        <Mission/>
<About/>
<Products>
<ProductDetails>
<SharedLayout/>
*/
