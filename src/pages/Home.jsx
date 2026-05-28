import { useContext } from 'react'
import Navbar from '../components/Navbar'
import { GlobalContext } from '../contexts/GlobalContext'
import { useNavigate } from 'react-router-dom'


function Home() {
    const{ usuario, anoDaCopa, jogadorDoDia } = useContext(GlobalContext)
    const navigate = useNavigate()

    function mudarJogador(){
        let novoJogador= prompt("Quem vai ser?")   
        setJogadorDoDia(novoJogador)}     
  return (
    <div className='container-home'>
        <Navbar />
        <h1>Copa do mundo</h1>
       <p>Usuário: {usuario}</p>
       <p>COPA DO MUNDO {anoDaCopa}</p>
       
      
    
      <div>
       <p>Jogador do dia {jogadorDoDia}</p>
       <button onClick={mudarJogador}>Mudar jogador do dia </button>
       <img src="]" alt=""/>
      </div>

    </div>   
  )
}

export default Home