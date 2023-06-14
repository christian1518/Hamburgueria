import { useState } from 'react'
import logo from '../../assets/logo.svg'
import Modal from '../Modal'
import { TitleModal, CartList, SectionTotalValue, ButtonAllRemoved, DivTotalBox, TextTotal, SpanTotalValue } from '../Modal/styles.js'
import { StyledHeader, LogoHeader, DivForm, ButtonCart, InputForm, StyledForm, ButtonSearch } from './styles.js'
import { FaShoppingCart } from 'react-icons/fa'
import { AiOutlineSearch } from 'react-icons/ai'
import ProductsCardModal from '../ProductsCardModal'

function Header({callback, cardListModal, setCardListModal}) {
  const [inputSearch, setInputSearch] = useState('')
  const [isOpen, setIsOpen] = useState(false)


  function handleSubmit(event) {
    event.preventDefault()
    callback(inputSearch)
  }

  function calculateTotalValue() {
    const totalValue = cardListModal.reduce((accValue, card) => {
      return accValue + parseFloat(card.price)
    }, 0)
    return totalValue
  } 

  const resultTotalValue = calculateTotalValue().toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})


  function removeCardFromCartList(cardId) {
    setCardListModal((cardListModal) =>  cardListModal.filter(card => card.id !== cardId))
  }


  function removeAllCardsFromCartList() {
    setCardListModal((cardListModal) => cardListModal.filter(card => card.id === 1000))
  }
 

  return (
    <StyledHeader>
      <LogoHeader src={logo} alt='Logo da empresa Burguer Kenzie' />
      <DivForm>
        
        <ButtonCart onClick={() => setIsOpen(true)}><FaShoppingCart/></ButtonCart>
        {isOpen ? <Modal cardListModal={cardListModal} setIsOpen={setIsOpen}>
          
          <TitleModal>Carrinho de compras</TitleModal>
          
          <CartList>
          {
            cardListModal.map((productSelected) => <ProductsCardModal productSelected={productSelected} key={productSelected.id}{... productSelected} removeCardFromCartList={removeCardFromCartList}/>)
          } 
          </CartList>


          <SectionTotalValue>
            <DivTotalBox>
              <TextTotal>Total</TextTotal>
              <SpanTotalValue>{resultTotalValue}</SpanTotalValue>
            </DivTotalBox>
            <ButtonAllRemoved onClick={() => removeAllCardsFromCartList()}>Remover Todos</ButtonAllRemoved>
          </SectionTotalValue>

        </Modal> : null}
        
        <StyledForm onSubmit={handleSubmit}>
          <InputForm type='text' placeholder='Digitar Pesquisa' onChange={(event) => setInputSearch(event.target.value)} />
          <ButtonSearch><AiOutlineSearch/></ButtonSearch>
        </StyledForm>
      </DivForm>
    </StyledHeader>
  )
}

export default Header