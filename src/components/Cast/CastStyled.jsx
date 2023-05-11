import styled from 'styled-components';

export const ImageCard = styled.div`
  width: 100%;
  height: 300px;
  background-color: azure;
`

export const CastList = styled.ul`
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  li {
    width: 200px;

    background-color: silver;
    p {
      padding: 10px;
    }
    h3 {
      padding: 10px;
    }
  }
`;
