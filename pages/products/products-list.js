
import CleanserRoundLab from "./products-img/CleanserRoundLab.webp";
import CreamCOSRX from "./products-img/CreamCOSRX.jpeg";
import GelCleanserCOSRX from "./products-img/GelCleanserCOSRX.jpeg";
import GinsegEssenceBoJ from "./products-img/GinsegEssenceBoJ.jpeg";
import GinsengCleansingOilBoJ from "./products-img/GinsengCleansingOilBoJ.jpeg";
import SnailEssenceCOSRX from "./products-img/SnailEssenceCOSRX.jpeg";
import sunscreenBeautyOfJoseon from "./products-img/sunscreenBeautyOfJoseon.webp";
import SunstickAbib from "./products-img/SunstickAbib.webp";
import SunstickIsntree from "./products-img/SunstickIsntree.jpeg";

export const PRODUCTS = [ 
    {
        id:"limpiador-roundLab",
        productName:"ROUND LAB 1025 Dokdo Cleanser 150mL",
        productImage: CleanserRoundLab,
        category: {
            id:"limpiadores",
            name:"Limpiadores"
        },
        price: 6500
    },
    {
        id:"limpiador-cosrx",
        productName:"COSRX Low Ph Good Mornig Gel Cleanser 150mL",
        productImage: GelCleanserCOSRX,
        category: { 
            id:"limpiadores",
            name:"Limpiadores"
        },
        price: 5000
    },
    {
        id:"limpiador-beautyOfjoseon",
        productName:"BEAUTY OF JOSEON Ginseng Cleansing Oil 210mL",
        productImage: GinsengCleansingOilBoJ,
        category: {
            id:"limpiadores",
            name:"Limpiadores"
        },
        price: 7000
    },
    {
        id:"esencia-beautyOfjoseon",
        productName:"BEAUTY OF JOSEON Ginseng Essence Water 150mL",
        productImage: GinsegEssenceBoJ,
        category: {
            id:"esencias",
            name:"Esencias"
        },
        price: 7500
    },
    {
        id:"esencia-cosrx",
        productName:"COSRX Advanced Snail 96 Mucin Power Essence 100mL",
        productImage: SnailEssenceCOSRX,
        category: {
            id:"esencias",
            name:"Esencias"
        },
        price: 7200
    },
    {
        id:"hidratante-cosrx",
        productName:"COSRX Advanced Snail 92 All In One Cream 100g",
        productImage: CreamCOSRX,
        category: {
            id:"hidratantes",
            name:"Hidratantes"
        },
        price: 8000
    },
    {
        id:"protectorSolar-beautyOfjoseon",
        productName:"BEAUTY OF JOSEON Relief Sun: Rice + Probiotics 50mL",
        productImage: sunscreenBeautyOfJoseon,
        category: {
            id:"protectoresSolares",
            name:"Protectores Solares"
        },
        price: 6500
    },
    {
        id:"protectorSolar-abib",
        productName:"ABIB Quick Sunstick Protection Bar 22g",
        productImage: SunstickAbib,
        category: {
            id:"protectoresSolares",
            name:"Protectores Solares"
        },
        price: 7500
    },
    {
        id:"protectorSolar-isntree",
        productName:"ISNTREE Hyaluronic Acid Watery Sun Gel 50mL",
        productImage: SunstickIsntree,
        category: {
            id:"protectoresSolares",
            name:"Protectores Solares"
        },
        price: 8200
    }
]