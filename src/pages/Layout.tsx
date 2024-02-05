import { Outlet } from 'react-router-dom';
import Footer from '../components/Footer/Footer';
import Topbar from '../components/Topbar/Topbar';

const Layout = () => {
  return (
    <>
      <Topbar />
      <Outlet />
      <Footer />
    </>
  );
};

export default Layout;
