import { Home } from "./components/Home";
import { Provider } from "react-redux";
import { store } from "./store/store";
import { Producuts } from "./components/Products";

function App() {

  return (
    <Provider store={store}>
      <section>
        <Home />
        <Producuts />
      </section>
    </Provider>
  )
}

export default App
