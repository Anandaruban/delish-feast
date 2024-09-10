import Header from "./components/Header";
import { Outlet } from "react-router-dom";
import { Provider } from "react-redux";
import cartStore from "./redux/cartStore";
import Footer from "./components/Footer";

const App = () => {

  return (
    <Provider store={cartStore}>
      <div className="">
        <Header />
        <Outlet />
        <Footer />
      </div>
    </Provider>
  )
}

export default App;