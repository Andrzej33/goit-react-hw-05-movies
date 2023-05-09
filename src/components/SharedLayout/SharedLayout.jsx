import { Container } from "components/Container/Container";
import { Loader } from "components/Loader/Loader";
import { StyledNavLink } from "components/StyledLink/StyledLink";

import { Suspense } from "react";
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
        
      </nav>
    </header>

    <Suspense fallback={<Loader/>}>
        <Outlet />
      </Suspense>
      </Container>
      
        
    
    );
  };