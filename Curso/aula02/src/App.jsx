
import LogoBg from './assets/LogoBg.jpg'
import Lista from './Componentes/ListaAluno'

import './App.css'
const alunos = ['Mariana','Bethe','Luan']
function App() {
  return (
    <>
      <div>        
        <img src="./cps.jpg" alt="Imagem cps" />
      </div>
      <div>
        <img src={LogoBg} alt="Logo" />
      </div>
      <Lista alunos= {alunos}/>
    </>
   
  )
}

export default App
