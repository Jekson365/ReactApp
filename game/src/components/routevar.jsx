import { Imereti } from "./elements/Imereti";
import { Kakheti } from "./elements/Kakheti";
import {Fshavi} from './elements/Fshavi'
import {Racha} from './elements/Racha'
import {Samegrelo} from './elements/Samegrelo'
import { Main } from "../Main";
import { Guria } from "./elements/Guria";
 
export const states = [
    {
        id:Math.floor(Math.random() * 9999999),
        name:"იმერეთი",
        route:"imereti",
        element:<Imereti/>,
        wordCount:Math.floor(Math.random() * 100)
    },
    {
        id:Math.floor(Math.random() * 9999999),
        name:"სამეგრელო",
        route:"samegrelo",
        element:<Samegrelo/>,
        wordCount:Math.floor(Math.random() * 100)
    },
    {
        id:Math.floor(Math.random() * 9999999),
        name:"კახეთი",
        route:"Kakheti",
        element:<Kakheti/>,
        wordCount:Math.floor(Math.random() * 100)
    },
    {
        id:Math.floor(Math.random() * 9999999),
        name:"რაჭა",
        route:"Racha",
        element:<Racha/>,
        wordCount:Math.floor(Math.random() * 100)
    },
    {
        id:Math.floor(Math.random() * 9999999),
        name:"ფშავი",
        route:"fshavi",
        element:<Fshavi/>,
        wordCount:Math.floor(Math.random() * 100)
    },
    {
        id:Math.floor(Math.random() * 9999999),
        name:"გურია",
        route:"guria",
        element:<Guria/>,
        wordCount:Math.floor(Math.random() * 100)
    },
    
]