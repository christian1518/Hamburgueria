import styled from "styled-components";

export const Container = styled.li`
  background-color: #FFFFFF;
  min-width: 27rem;
  height: 34.6rem;
  border-radius: var(--radius-1);
  border: 0.2rem solid var(--Color-Grey-100);
  display: flex;
  flex-direction: column;
  gap: 1.6rem;

  :hover {
    border-color: var(--Color-Primary);
    transition: 1s;
  }
`

export const Image = styled.img`
  background-color: var(--Color-Grey-0);
  width: 100%;
  height: 15rem;
  object-fit: contain;
`

export const TitleCard = styled.h3`
  font-weight: 700;
  font-size: 1.8rem;
  color: var(--Color-Grey-600);
  margin-left: 2rem;
`

export const TextCard = styled.p`
  margin-left: 2rem;
  font-size: 1.2rem;
  font-weight: 400;
  color: var(--Color-Grey-300);
`

export const SpanCard = styled.span`
  font-weight: 600;
  font-size: 1.4rem;
  color: var(--Color-Primary);
  margin-left: 2rem;
`

export const ButtonCard = styled.button`
  width: 10.6rem;
  height: 4rem;
  background-color: #BDBDBD;
  margin-left: 2rem;
  border-radius: var(--radius-2);
  color: #FFFFFF;

  :hover {
    background-color: var(--Color-Primary);
    color: #FFFFFF;
    transition: 1s;
  }
`