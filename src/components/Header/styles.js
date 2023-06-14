import styled from "styled-components";

export const StyledHeader = styled.header`
  width: 100%;
  height: 8rem;
  background: var(--Color-Grey-0);
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  padding-left: 10.9rem;
  padding-right: 11.7rem;
  align-items: center;
  margin-bottom: 3.2rem;
`

export const LogoHeader = styled.img`
  width: 15.8rem;
  height: 3.7rem;
`

export const DivForm = styled.div`
  display: flex;
  align-items: center;
`

export const ButtonCart = styled.button`
  margin-right: 2.8rem;
  background: var(--Color-Grey-0);
  color: #BDBDBD;
  font-weight: 700;
  width: 2.5rem;
  height: 2.5rem;
  font-size: 2.2rem;
` 

export const StyledForm = styled.form`
  background: #FFFFFF;
  width: 36.5rem;
  height: 6rem;
  padding-left: 1.5rem;
  padding-right: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-radius: var(--radius-3);
  border: 2px solid var(--Color-Grey-100);

  :hover {
    border: 2px solid #000000;
  }
`

export const InputForm = styled.input`
  border: none;

  ::placeholder {
    font-weight: 400;
    font-size: 1.6rem;
    color: var(--Color-Grey-100);
  }
`

export const ButtonSearch = styled.button`
  width: 5.3rem;
  height: 4rem;
  background: var(--Color-Primary);
  color: #FFFFFF;
  font: 700;
  font-size: 2rem;
  border-radius: var(--radius-3);
`