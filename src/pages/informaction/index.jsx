import { useNavigate } from 'react-router-dom'
import pokeboll from '../../assets/images/image 1.png'
import pokeboll2 from '../../assets/images/image-removebg-preview (1).png'
import pokeboll3 from '../../assets/images/image-removebg-preview (2).png'
import './index.scss'
import { useEffect } from 'react'


export default function Profile({ pokemonData  }) {
   

    console.log(pokemonData)
    const Navigate = useNavigate()

    useEffect (() => {
        if(!pokemonData) {
            Navigate('/')
        }
    })

    if(!pokemonData) {
        return null
    }
    

    const home = () => {
        Navigate('/')
    }
    return (
        <div>
            <header>
                <nav>
                    <div className="header2">
                        <div className='element1-profile'>
                            <img onClick={home} src={pokeboll} alt="pokeboll" />
                            <h1>POKÉDEX</h1>
                        </div>


                    </div>
                </nav>
            </header>
            <div className='element2-profile'>
                <h1> {pokemonData.name} </h1>
                <div className='fundo-profile'>
                    <div className='element3'>
                        <div className='image'>
                        <img className='pokemon' src={pokemonData.sprites.front_default} alt="imagem do pokemon" />
                        <div className='pokebools'>
                        <img src={pokeboll} alt="" />
                        <img src= {pokeboll2} alt="" />
                        <img src= {pokeboll3} alt="" />
                        </div>
                        </div>
                        <div className='text-pokemons'>
                            <span> Tipo: {pokemonData.types.map((type) => type.type.name).join(' / ')}</span>
                            <span> Peso : {pokemonData.weight} G</span>
                            <span> Altura :  {pokemonData.height} cm</span>
                        </div>


                    </div>
                </div>
                <div className='variations'>
                    <p>Variações</p>
                   <img src= {pokemonData.sprites.front_shiny} alt="variação pokemon" />
                    <hr />
          
                </div>

                <div className='attack'>
                    <h1>Ataques</h1>
                    <div className='attack-pok'>
                    {pokemonData.moves.map((item) => 
                        <span key={item.move.name}> {item.move.name} </span>
                    )}
                    </div>
                </div>
                
            </div>
           
        </div>
    )
}