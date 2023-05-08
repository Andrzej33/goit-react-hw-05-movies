import { Container } from "components/Container/Container";
import { StyledNavLink } from "components/StyledLink/StyledLink";
import { Outlet } from "react-router-dom";

export const SharedLayout = () => {
    return (
      <Container>
 <header>
    <nav>
        <StyledNavLink to="/" end>
          Home
        </StyledNavLink>
        <StyledNavLink to="/movies">Movies</StyledNavLink>
        {/* <StyledLink to="/products">Products</StyledLink> */}
      </nav>
    </header>
<Outlet />
      </Container>
      
        
    
    );
  };