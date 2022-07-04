import { Imereti } from "./elements/Imereti";
import { Kakheti } from "./elements/Kakheti";
import {Fshavi} from './elements/Fshavi'
import {Racha} from './elements/Racha'
import {Samegrelo} from './elements/Samegrelo'
import { Main } from "../Main";
import { Guria } from "./elements/Guria";


// databases 
import { guria } from "./wordbase/Guriabase";
import { racha } from "./wordbase/RachaBase";
import { imereti } from "./wordbase/Imeretibase";

export const states = [
    {
        id:Math.floor(Math.random() * 9999999),
        name:"იმერეთი",
        route:"imereti",
        element:<Imereti/>,
        wordCount:guria.length,
        image:"https://upload.wikimedia.org/wikipedia/commons/thumb/8/81/Historical_Imereti_in_modern_international_borders_of_Georgia.svg/300px-Historical_Imereti_in_modern_international_borders_of_Georgia.svg.png"
    },
    {
        id:Math.floor(Math.random() * 9999999),
        name:"სამეგრელო",
        route:"samegrelo",
        element:<Samegrelo/>,
        wordCount:0,
        image:"https://upload.wikimedia.org/wikipedia/commons/thumb/0/03/SamegreloHistorical.svg/1200px-SamegreloHistorical.svg.png"
    },
    {
        id:Math.floor(Math.random() * 9999999),
        name:"კახეთი",
        route:"Kakheti",
        element:<Kakheti/>,
        wordCount:0,
        image:"https://upload.wikimedia.org/wikipedia/commons/thumb/3/31/KakhetiHistorical.svg/300px-KakhetiHistorical.svg.png"
    },
    {
        id:Math.floor(Math.random() * 9999999),
        name:"რაჭა",
        route:"Racha",
        element:<Racha/>,
        wordCount:racha.length,
        image:"https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Historical_Racha_in_modern_international_borders_of_Georgia.svg/300px-Historical_Racha_in_modern_international_borders_of_Georgia.svg.png"
    },
    {
        id:Math.floor(Math.random() * 9999999),
        name:"ფშავი",
        route:"fshavi",
        element:<Fshavi/>,
        wordCount:0,
        image:"https://upload.wikimedia.org/wikipedia/commons/thumb/1/1c/Historical_Pshavi_in_modern_international_borders_of_Georgia.svg/1200px-Historical_Pshavi_in_modern_international_borders_of_Georgia.svg.png"
    },
    {
        id:Math.floor(Math.random() * 9999999),
        name:"გურია",
        route:"guria",
        element:<Guria/>,
        wordCount:guria.length,
        image:"https://upload.wikimedia.org/wikipedia/commons/thumb/c/c7/Historical_Guria_in_modern_international_borders_of_Georgia.svg/300px-Historical_Guria_in_modern_international_borders_of_Georgia.svg.png"
    },
    
]