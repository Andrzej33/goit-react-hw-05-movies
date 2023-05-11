import styled from 'styled-components';

export const CastList = styled.ul`
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  li {
    max-width: 200px;

    background-color: silver;
    p {
      padding: 10px;
    }
    h3 {
      padding: 10px;
    }
  }
`;
