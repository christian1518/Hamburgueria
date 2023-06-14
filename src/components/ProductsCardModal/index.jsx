import { ImBin2 } from 'react-icons/im'
import { ButtonRemoveCard, CardModal, DescriptionCard, ImageProductSelected, TitleProductSelected } from '../Modal/styles.js'

function ProductsCardModal({img, name, price, id, removeCardFromCartList, productSelected}) {
  return (
    <CardModal>
      <ImageProductSelected src={img} alt='Foto do produto selecionado' />
      <DescriptionCard>
        <TitleProductSelected>{name}</TitleProductSelected>
        <ButtonRemoveCard onClick={() => removeCardFromCartList(productSelected.id)}><ImBin2/></ButtonRemoveCard>
      </DescriptionCard>
    </CardModal>
  )
}

export default ProductsCardModal