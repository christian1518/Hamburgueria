import styled from "styled-components";

export const ModalOverlay = styled.div`
  position: fixed;

  display: flex;
  align-items: center;
  justify-content: center;

  inset: 0;
  width: 100%;
  height: 100vh;
  background: rgba(0, 0, 0, 0.3);
`

export const ModalBox = styled.div`
  position: relative;
  width: 100%;
  max-width: 50rem;
  background: var(--Color-Grey-0);
`

export const CloseButton = styled.button`
  position: absolute;
  top: 2rem;
  right: 2rem;
  background-color: var(--Color-Primary);
  color: #FFFFFF70;
`


export const TitleModal = styled.h3`
width: 100%;
height: 5.4rem;
background: var(--Color-Primary);
color: #FFFFFF;
font-size: 1.8rem;
font-weight: 700;
display: flex;
align-items: center;
padding-left: 2rem;
`

export const CartList = styled.ul`
  list-style: none;
  width: 100%;
  padding-left: 2rem;
  padding-right: 2rem;
  margin-top: 3rem;
  height: 20rem;
  overflow-y: scroll;
`

export const SectionTotalValue = styled.section`
  padding-top: 2rem;
  margin: 2rem;
  border-top: 2px solid var( --Color-Grey-100);
`

export const DivTotalBox = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`

export const TextTotal = styled.p`
  font-size: 1.4rem;
  font-weight: 600;
  color: var(--Color-Grey-600);
`

export const SpanTotalValue = styled.span`
  font-size: 1.4rem;
  font-weight: 600;
  color: var(--Color-Grey-300);
`

export const ButtonAllRemoved = styled.button`
  background-color: var(--Color-Grey-100);
  color: var(--Color-Grey-300);
  width: 100%;
  height: 6rem;
  margin-top: 2rem;
  border-radius: var(--radius-3);
  font-weight: 600;
  font-size: 1.6rem;

  :hover {
    background: var(--Color-Grey-300);
    color: var(--Color-Grey-100);
    transition: 1s;
  }
`

export const ButtonRemoveCard = styled.button`
  background: var(--Color-Grey-0);
  color: var(--Color-Grey-300);
  height: 1.4rem;
`
export const CardModal = styled.li`
  display: flex;
  margin-bottom: 2rem;
`

export const DescriptionCard = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding-left: 2rem;
`

export const ImageProductSelected = styled.img`
  width: 8.2rem;
  height: 8rem;
  border-radius: var(--radius-1);
  object-fit: contain;
  background: var(--Color-Grey-100);
`

export const TitleProductSelected = styled.h3`
  color: var(--Color-Grey-600);
  font-weight: 700;
  font-size: 1.8rem;
  height: 3rem;
`