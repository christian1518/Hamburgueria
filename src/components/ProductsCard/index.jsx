import { Container, Image, TitleCard, TextCard, SpanCard, ButtonCard } from './styles.js'

function ProductsCard({img, name, category, price, id, setCardListModal}) {

  const addCardToCart = () => {
    const newCard = {img, name, price, id}
    setCardListModal((cardListModal) => [...cardListModal, newCard])
  }
 
  return (
    <Container >
      <Image src={img} alt="foto do produto" />
      <TitleCard>{name}</TitleCard>
      <TextCard>{category}</TextCard>
      <SpanCard>R$ {price}</SpanCard>
      <ButtonCard onClick={addCardToCart}>Adicionar</ButtonCard>
    </Container>
  )
}

export default ProductsCard