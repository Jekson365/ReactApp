import "./App.css";
import { Item } from "./components/Item";
import { FaShoppingCart } from "react-icons/fa";
import { Basket } from "./components/Basket";
import { createContext } from "react";

export const userContenxt = createContext();
function App() {
  return (
    <>
      <div className="container">
        <userContenxt.Provider>
          <Item />
        </userContenxt.Provider>
      </div>
    </>
  );
}

export default App;
