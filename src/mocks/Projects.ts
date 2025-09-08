import efood from '../assets/img/efood-home.png'
import eplay from '../assets/img/eplay.png'
import tasksRedux from '../assets/img/minhas-tarefas.png'
import pousada from '../assets/img/pousada-secreta.png'
import recanto from '../assets/img/recanto-dos-livros.png'
import clone from '../assets/img/clone-disney-plus.png'
import nuJuros from '../assets/img/nu-juros.png'
import imc from '../assets/img/imc.png'
import searchProfile from '../assets/img/search-profile.png'
import sorteador from '../assets/img/sorteador.png'
import titan from '../assets/img/titan-gourmet.png'
import games from '../assets/img/games-the-shop.png'
import jNews from '../assets/img/jnews.png'
import news from '../assets/img/ebac-news.png'
import motors from '../assets/img/ebac-motors.png'
import todo from '../assets/img/todo-vue.png'

export type Project = {
    id: number
    title: string
    img: string
    target: string
    isDevelopment?: boolean
}

const projects: Project[] = [
    {
        id: 1,
        title: "eFood - E-commerce de restaurantes",
        img: efood,
        target: "https://efood-six-pearl.vercel.app/"
    },
    {
        id: 2,
        title: "EPLAY - Loja de Games",
        img: eplay,
        target: "https://eplaygames.vercel.app/"
    },
    {
        id: 3,
        title: "Minhas Tarefas — App de Gestão com React + Redux",
        img: tasksRedux,
        target: "https://minhastarefas-lac.vercel.app/"
    },
    {
        id: 4,
        title: "Pousada Secreta",
        img: pousada,
        target: "https://webpousada.vercel.app/"
    },
    {
        id: 5,
        title: "Recanto dos Livros — Uma livraria espetacular",
        img: recanto,
        target: "https://recanto-dos-livros.vercel.app/"
    },
    {
        id: 6,
        title: "Clone - Disney+",
        img: clone,
        target: "https://devjoseclone-disneyplus-two.vercel.app/"
    },
    {
        id: 7,
        title: "NuJuros - Simulador de juros",
        img: nuJuros,
        target: "https://nu-juros.vercel.app/"
    },
    {
        id: 8,
        title: "Calculadora IMC - A base para a saúde",
        img: imc,
        target: "https://app-imc-saude.vercel.app/"
    },
    {
        id: 9,
        title: "GitHub Search Profile - Buscador de perfis",
        img: searchProfile,
        target: "https://githubprofile-josedev.vercel.app/"
    },
    {
        id: 10,
        title: "Sorteador de números",
        img: sorteador,
        target: "https://sorteadordevjose.vercel.app/"
    },
    {
        id: 11,
        title: "Titan Gourmet Restaurant",
        img: titan,
        target: "https://titan-gourmet.vercel.app/"
    },
    {
        id: 12,
        title: "Games The Shop",
        img: games,
        target: "https://games-the-shop.vercel.app/"
    },
    {
        id: 13,
        title: "J.News",
        img: jNews,
        target: "https://jnews-one.vercel.app/",
        isDevelopment: true
    },
    {
        id: 14,
        title: "EBAC News",
        img: news,
        target: "https://ebac-news-dev-jose.vercel.app/"
    },
    {
        id: 15,
        title: "EBAC Motors",
        img: motors,
        target: "https://ebac-motors-ten-omega.vercel.app/"
    },
    {
        id: 16,
        title: "Todo-List",
        img: todo,
        target: "https://todolist-devjose.vercel.app/"
    }

]

export default projects