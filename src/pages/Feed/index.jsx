import { useState, useEffect } from 'react'
import { api } from '../../services/api.js'
import Header from '../../components/Header/index.jsx'
import { ProductsList } from './styles.js'
import ProductsCard from '../../components/ProductsCard/index.jsx'

function Feed() {
  const [products, setProducts] = useState([])
  const [cardListModal, setCardListModal] = useState([])
  const [loading, setLoading] = useState(true)
  const [search, setSearch] = useState('')

  // console.log(cardListModal)
  
  // const addCardToCart = () => {
  //   setCardListModal((cardListModal) => [...cardListModal, {products} ])
  // }

  useEffect(() => {
    async function getProducts() {
      try {
        const response = await api.get('/products', {
          params: {
            name_like: search
          }
        })
  
        setProducts(response.data)
        
      } catch (error) {
        console.error(error)
      }finally {
        setLoading(false)
      }
    }

    getProducts()
  }, [search])


  function handleForm(inputSearch) {
    setSearch(inputSearch)
  }

  if(loading) {
    return <div>Loading...</div>
  }

  return (
    <>
      <Header cardListModal={cardListModal} setCardListModal={setCardListModal} callback={handleForm}/>
      <ProductsList>
      {
        products.map((product) => <ProductsCard cardListModal={cardListModal} setCardListModal={setCardListModal} key={product.id}{... product}/>)
      }
      </ProductsList>
    </>
  )
}

export default Feed