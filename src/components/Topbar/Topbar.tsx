import * as s from './styled-topbar';

const Topbar = () => {
  return (
    <s.NavbarContainer>
      <s.StyledLink to="/">
        <s.Logo>EcoMovies</s.Logo>
      </s.StyledLink>
    </s.NavbarContainer>
  );
};

export default Topbar;
