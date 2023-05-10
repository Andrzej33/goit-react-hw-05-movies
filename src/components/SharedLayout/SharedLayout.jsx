import { Container, StyledHeader } from "components/Container/Container";
import { Loader } from "components/Loader/Loader";
import { StyledNavLink } from "components/StyledLink/StyledLink";

import { Suspense } from "react";
import { Outlet } from "react-router-dom";

export const SharedLayout = () => {
    return (
      <Container>
 <StyledHeader>
    <nav>
        <StyledNavLink to="/" end>
          Home
        </StyledNavLink>
        <StyledNavLink to="/movies">Movies</StyledNavLink>
        
      </nav>
      </StyledHeader>

    <Suspense fallback={<Loader/>}>
        <Outlet />
      </Suspense>
      </Container>
      
        
    
    );
  };