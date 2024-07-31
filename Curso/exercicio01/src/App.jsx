
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Cabecalho from './Componentes/Cabecalho'
import Carros from './Componentes/Carros'
import Parceiros from './Componentes/Parceiros'

function App() {
 

  return (
    <>
      <div>
        <Cabecalho/>
      </div>
      <div>
        <p>Lista de carros</p>
        <Carros/>
      </div>
     <p>Paceiros</p>
     <Parceiros/>
    </>
  )
}

export default App
