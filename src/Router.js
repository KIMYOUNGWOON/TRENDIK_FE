import { BrowserRouter, Routes, Route } from 'react-router-dom';
import BandBanner from './components/BandBanner';
import Footer from './components/Footer';
import Header from './components/Header';
import MoveTop from './components/MoveTop';
import Main from './pages/Main/Main';
import NotFound from './pages/NotFound';
// import store from './store';
// import { Provider } from 'react-redux';

function Router() {
  return (
    // <Provider store={store}>
    <BrowserRouter>
      <BandBanner />
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <MoveTop />
      <Footer />
    </BrowserRouter>
    // </Provider>
  );
}

export default Router;
