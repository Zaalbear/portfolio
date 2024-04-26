import hub_img from "../assets/prints/kenzie_hub.png"
import hamb_img from "../assets/prints/projeto_hamburgueria.png"
import port_img from "../assets/prints/projeto_portfolio.png"
import bank_img from "../assets/prints/projeto_bank.png"


export const projectsList = [
    {
        name: 'Kenzie hub',
        repoURL: 'https://github.com/Zaalbear/react-entrega-kenzie-hub_zaalbear',
        imgURL: hub_img,
        field: 'front',
        isNew: true,
    },
    {
        name: 'Portfolio',
        repoURL: 'https://github.com/Zaalbear/m3-s1-entrega-portfolio_zaalbear',
        imgURL: port_img,
        field: 'front',
        isNew: false,
    },
    {
        name: 'NuKenzie',
        repoURL: 'https://github.com/Zaalbear/react-entrega-s1-nu-kenzie_zaalbear',
        imgURL: bank_img,
        field: 'front',
        isNew: false,
    },
    {
        name: 'Hamburgueria',
        repoURL: 'https://github.com/Zaalbear/react-entrega-s3-hamgurgueria_zaalbear',
        imgURL: hamb_img,
        field: 'front',
        isNew: false,
    },
]