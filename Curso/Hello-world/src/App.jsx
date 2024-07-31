
// Importando Componentes
import FirstComponent from './Component/FirstComponent'
import TemplateExpressions from './Component/TempleteExpressions'
import Events from './Component/Events'


// Importando CSS
import './App.css'



function App() {
  

  return (
    <>
      <div>
       <h1>Ola mumdo, este é meu primeiro app</h1> 
      </div>    
      {/* Chamada de componente */}
      <FirstComponent/>
      <TemplateExpressions/>
      <Events/>
    </>
  )
}   
export default App
