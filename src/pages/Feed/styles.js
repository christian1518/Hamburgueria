import styled from "styled-components";

export const ProductsList = styled.ul`
  list-style: none;
  display: flex;
  align-items: center;
  gap: 5.6rem;
  margin-left: 14.8rem;
  margin-right: 8.4rem;
  width: 100%;
  height: 100%;
  

  @media (max-width: 600px) {
    overflow-x: scroll;
    height: 40rem;
  }

  @media (min-width: 601px) {
    flex-wrap: wrap;
  }
`

  