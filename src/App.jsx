import { Home } from "./pages/Home/Home"
import { UserActive } from "./pages/UserActive/UserActive"
import { Provider } from "react-redux"
import { store } from "./store/store"
import { Routes, Route, Link } from "react-router-dom"

function App() {
  return (
    <Provider store={store}>
      <div>
        <h1>Lesson 47</h1>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/details" element={<UserActive />} />
        </Routes>
      </div>
    </Provider>
  )
}

export default App
