import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link
} from "react-router-dom";
import { Main } from "../Main";
import { states } from "./routevar";
import { Navigation } from "./Navigation";
export const Routing = () => {
    return (
        <>
            <Router>
                <Routes>
                    {states.map((single)=>{
                        const {id,name,route,element}= single
                        return (
                            <>  <Route path="/" element={<Main/>}/>
                                <Route path={`/${route}`} element={element}/>
                            </>
                        )
                    })}
                </Routes>
            </Router>
        </>
    )
}