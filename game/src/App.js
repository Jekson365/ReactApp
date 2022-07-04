import { useState } from "react";
import "./App.css";
import { Routing } from "./components/Routing";
import { Main } from "./Main";
import { createContext } from "react";
import { racha } from "./components/wordbase/RachaBase";
import { guria } from "./components/wordbase/Guriabase";
import { imereti } from "./components/wordbase/Imeretibase";
import { Navigation } from "./components/Navigation";
export const dataContext = createContext()

function App() {
  const [data,setData] = useState(racha)
  const [dataGuria,setdataGuria] = useState(guria)
  const [immereti,setImereti] = useState(imereti)

  const methodAndData = {data,setData,dataGuria,setdataGuria,immereti,setImereti}

  return (
    <>
      <div>
        <dataContext.Provider value={methodAndData}>
          <Routing/>
        </dataContext.Provider>
      </div>
    </>
  );
}

export default App;
