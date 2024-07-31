// Importando css
import './App.css'
// Importando Componente
import PrimeiroComponente from './Componente/PrimeiroComponente'
import RenderLista from './Componente/RenderLista'

function App() {
  return (
    <>
      <h1>Pagina inicial </h1>
      {/*Comentario dentro da função*/}
      
      {/*Add componente*/}
      <PrimeiroComponente/>

      {/*Add Lista*/}
      <RenderLista/>
    </>
  )
}

export default App
