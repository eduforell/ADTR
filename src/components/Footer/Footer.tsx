import { FooterCSS } from './styled';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return <FooterCSS>Eduardo Forell - {currentYear}</FooterCSS>;
};

export default Footer;
