import { useState, useEffect } from 'react'
import { Routes, Route, useNavigate } from 'react-router-dom';
import { ProductDetail } from './pages/ProductDetail/ProductDetail';
import './App.css'

function App() {
  const [products, setProductApi] = useState(null)
  const [objActive, setObjActive] = useState({})
  const navigate = useNavigate()

  useEffect(() => {
    const getPoduct = async () => {
      try {
        const res = await fetch('https://dummyjson.com/products?limit=20')
        const data = await res.json()
        setProductApi(data.products)
      } catch (error) {
        console.error('Error while getting api', error)
      }
    }
    getPoduct()
  }, [])

  const handleProductClick = (productId) => {
    navigate(`/product/${productId}`);
  }

  return (
    <div>
      <h1>Lesson 44 (React-Router-Dom 6.20)</h1>
      <Routes>
        <Route
          path='/'
          element={
            products ? (
              <div className='container-block-cards'>
                {products.map((product) => (
                  <div
                    className='block-cards'
                    key={product.id}
                    onClick={() => {
                      handleProductClick(product.id)
                      setObjActive(product)
                    }
                    }
                  >
                    <h5>{product.title}</h5>
                    <img src={product.thumbnail} />
                    <p>{product.price}$</p>
                  </div>
                ))}
              </div>
            ) : (
              ''
            )}
        />
        <Route
          path='product/:id'
          element={<ProductDetail product={objActive} />}
        />
      </Routes>
    </div>
  )
}

export default App
