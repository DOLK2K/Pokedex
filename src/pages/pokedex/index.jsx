import { useEffect, useState } from 'react'
import pokeboll from '../../assets/images/image 1.png'
import './index.scss'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import Skeletonn from '../components/skeleton'


export default function Pokemons({ setPokemonData }) {
    const [pokemons, setPokemons] = useState([])

    const navigate = useNavigate();

    useEffect(() => {
        pokemoncall();
    }, [])

    const pokemoncall = async () => {
        let endpoint = []
        for (let i = 1; i < 66; i++) {
            endpoint.push(`https://pokeapi.co/api/v2/pokemon/${i}/`)
        }

        let x = await axios.all(endpoint.map((item2) => axios.get(item2))).then((resp) => setPokemons(resp))
        return x
    }


    const seach = (name) => {
        let filterpokemon = []
        if (name === '') {
            pokemoncall()
        }
        for (let t in pokemons) {
            if (pokemons[t].data.name.includes(name)) {
                filterpokemon.push(pokemons[t])
            }
        }

        setPokemons(filterpokemon)

    }

    const pokemonRouter = (pokemonData) => {
        setPokemonData(pokemonData);
        navigate("/profile");
    };


    return (
        <div className='pokedex'>
            <header>
                <nav>
                    <div className="header">
                        <div className='element1'>
                            <img src={pokeboll} alt="pokeboll" />
                            <h1>POKÉDEX</h1>
                        </div>

                        <div className='Seach'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 28 28" fill="none">
                                <path opacity="0.35" d="M11.9211 0.658575C5.44117 0.658575 0.169922 5.92982 0.169922 12.4098C0.169922 18.8897 5.44117 24.161 11.9211 24.161C13.902 24.161 15.8494 23.6909 17.4945 22.7844C17.6263 22.943 17.7724 23.0891 17.931 23.2209L21.2885 26.5783C21.5985 26.9272 21.9766 27.209 22.3994 27.4064C22.8223 27.6039 23.2811 27.7128 23.7476 27.7265C24.214 27.7403 24.6784 27.6585 25.1122 27.4863C25.5459 27.3141 25.9399 27.055 26.2699 26.725C26.5999 26.395 26.859 26.001 27.0312 25.5673C27.2034 25.1335 27.2852 24.6691 27.2715 24.2026C27.2577 23.7361 27.1488 23.2774 26.9514 22.8545C26.7539 22.4316 26.4721 22.0536 26.1233 21.7436L22.7658 18.3861C22.6022 18.2225 22.4222 18.0762 22.2286 17.9496C23.1351 16.3044 23.7059 14.3907 23.7059 12.3762C23.7059 5.89625 18.4346 0.625 11.9547 0.625L11.9211 0.658575ZM11.9211 4.01606C16.588 4.01606 20.3148 7.74286 20.3148 12.4098C20.3148 14.6257 19.509 16.6738 18.0989 18.1846C18.0653 18.2182 18.0317 18.2518 17.9982 18.2854C17.8396 18.4171 17.6935 18.5632 17.5617 18.7218C16.0844 20.0648 14.0699 20.837 11.8875 20.837C7.22063 20.837 3.49383 17.1102 3.49383 12.4433C3.49383 7.77644 7.22063 4.04963 11.8875 4.04963L11.9211 4.01606Z" fill="black" />
                            </svg>
                            <input onChange={e => seach(e.target.value)} placeholder='Pesquisar Pokemon...' type="text" />
                        </div>
                    </div>
                </nav>
            </header>
            <div className='container-pokemon'>
                {pokemons.length === 0 ? ( <Skeletonn />
                    ): pokemons.map((item, index) => (
                        <div onClick={() => pokemonRouter(item.data)} className='map-pokemon' key={index}>
                            <img src={item.data.sprites.front_default} alt={item.data.name} />
                            <div className='text-pokemon'>{item.data.name}</div>
                            <div className='type-pokemon'>
                                {item.data.types.map((type, typeIndex) => (
                                    <span key={typeIndex}>
                                        {typeIndex > 0 && '/'}
                                        {type.type.name}</span>
                                ))

                                }


                            </div>
                        </div>
                    ))}
            </div>
        </div>

    )
}