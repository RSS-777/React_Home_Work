import { Routes, Route } from 'react-router-dom'
import { About } from './pages/About'
import { Contact } from './pages/Contact'
import { Home } from './pages/Home'
import { NotFoundPage } from './pages/NotFoundPage'
import { Navigation } from './components/Navigation/Navigation'
import { Provider } from 'react-redux'
import { store } from './store/store'

function App() {

  return (
    < Provider store={store}>
      <div>
        <Navigation />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='*' element={<NotFoundPage />} />
        </Routes>
      </div>
    </Provider>
  )
}

export default App
