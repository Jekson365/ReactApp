import { Imereti } from "./elements/Imereti";
import { Kakheti } from "./elements/Kakheti";
import {Fshavi} from './elements/Fshavi'
import {Racha} from './elements/Racha'
import {Samegrelo} from './elements/Samegrelo'
import { Main } from "../Main";
import { Guria } from "./elements/Guria";
import { ImeretiSen } from "./elements/sentence/ImeretiSen";


// databases 
import { guria } from "./wordbase/Guriabase";
import { racha } from "./wordbase/RachaBase";
import { imereti } from "./wordbase/Imeretibase";
import { imeretiSenBase } from "./elements/sentence/sentencebase/ImeretiSenBase";

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
        name:"რაჭა",
        route:"Racha",
        element:<Racha/>,
        wordCount:racha.length,
        image:"https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Historical_Racha_in_modern_international_borders_of_Georgia.svg/300px-Historical_Racha_in_modern_international_borders_of_Georgia.svg.png"
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
export const sentence = [
    {
        id:Math.floor(Math.random() * 9999999),
        name:"იმერული ესკიზები",
        wordCount:imeretiSenBase.length,
        route:"imeretisen",
        element:<ImeretiSen/>,   
    }
]