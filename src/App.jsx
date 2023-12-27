import { Provider } from "react-redux";
import { Home } from "./components/Home/Home"
import { Navigation } from "./components/Navigation";
import { store } from "./components/store/store";


function App() {
  return (
    <Provider store={store}>
      <main>
        <Navigation />
        <Home />
      </main>
    </Provider>
  )
}

export default App
