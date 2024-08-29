import React from "react" // Importando blibioteca do React para o arquivo
import LogoBg from './img/LogoBg.jpg'
import ListaAluno from "./componentes/ListaAlunos"

const aluno = 'Bruno Eduardo Alcides'
const curso = 'Desenvolvimento de sistemas'

export default function App() { // Função com o nome do arquivo

  return (
    <>
    <img src="./cps.jpg" alt="Imagem cps" />
      <h1> ETEC Professor Basilides de Godoy</h1>
      <div>
        <img src={LogoBg} alt="Logo" />
      </div>
      
      <hr/>
      <h2>Aluno: {aluno} </h2>
      {/*<h2>Curso Desenvolvimento de Sistema </h2>*/}
      <h2>Curso: {curso} </h2>      
      <h3>Estamos aprendendo React + Vite</h3>
      <p>Lista alunos</p>
      <ListaAluno/>
    </>// Mensagem que será exiibido na tela
   
  )
}


