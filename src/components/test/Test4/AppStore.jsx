import { BrowserRouter } from 'react-router-dom';
import { GoMerchStore } from './GoMerchStore';

export const AppStore = () => {
  return (
    <BrowserRouter basename="/react-homework-template">
      <GoMerchStore />
    </BrowserRouter>
  );
};
