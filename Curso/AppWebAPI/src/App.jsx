import './App.css'
//Importando bibliotecas 
import 'bootstrap/dist/css/bootstrap.min.css'
import axios from "axios"
import {Modal, ModalBody, ModalFooter, ModalHeader} from 'reactstrap'

// Importando hooks
import { useState, useEffect } from 'react'

function App() {

  //URL lista de usuarios
  const baseUrl = "https://localhost:44302/Usuario"
  
  // Criando constants para receber os dados
  const [data, setData] = useState([]);
  const [updateData, setUpdateData]= useState(true);
  
  //Criar os modal
  const [modalIncluir, setModalIncluir] = useState(false);
  const [modalEditar, setModalEditar] = useState(false);
  const [modalExcluir, setModalExcluir] = useState(false);

   // abrir modal
const abrirFecharModalIncluir = () =>{
  setModalIncluir(!modalIncluir);
}
const abrirFecharModalEditar = () =>{
  setModalEditar(!modalEditar);
}
const abrirFecharModalExcluir = () =>{
  setModalExcluir(!modalExcluir);
}
//Propriedade de alunos no formularioa vazio.
const [usuariosSelecionados, setUsuariosSelecionados] = useState({
  idUsu: '',
  nomeUsu: '',
  cargo: '', 
  dataNasc: ''
})
   // função pra enviar os dados pelo submit
const handleChange = e => {
  const { name, value } = e.target;
  setUsuariosSelecionados({
    ...usuariosSelecionados, [name]: value
  });
  console.log(usuariosSelecionados);
}
//Selecionar usuario pelo
const selecionarUsuario = (usuario, opcao) =>{
  setUsuariosSelecionados(usuario);
  (opcao === "Editar") ?
  abrirFecharModalEditar() : abrirFecharModalExcluir();
}
  //Obter lista de usuarios
   const usuariosGet = async()=>{    
    await axios.get(baseUrl)
    .then(response =>{
      setData(response.data);
    }).catch(error=>{
      console.log(error);      
    });
  };
// Enviar Post do usuario
const usuariosPost = async()=>{
  delete usuariosSelecionados.idUsu; 
  console.log(usuariosSelecionados)  
  await axios.post(baseUrl, usuariosSelecionados)   
  .then(response =>{
    setData(data.concat(response.data));
    setUpdateData(true);
    abrirFecharModalIncluir();
  }).catch(error=>{
    console.log(error); 
  });
}
//Atualizar os dados no banco
const usuarioPut = async () => {
  await axios.put(baseUrl + "/" + usuariosSelecionados.idUsu, usuariosSelecionados)
  .then(response=>{
    var resposta = response.data;
    var dadosAuxliar = data;
    dadosAuxliar.map(usuario=>{
      if(usuario.idUsu === usuariosSelecionados.idUsu){
        usuario.nomeUsu = resposta.nomeUsu;
        usuario.cargo = resposta.cargo;
        usuario.dataNasc = resposta.dataNasc;
      }           
    }    
  );  
  setUpdateData(true);
  abrirFecharModalEditar();
  }).catch(error=>{
    console.log(error)
  });
}
 //Deletar usuario
 const usuarioDeletar = async () =>{
  await axios.delete(baseUrl + "/" + usuariosSelecionados.idUsu, usuariosSelecionados)
  .then(response => {
    setData(data.filter(usuario => usuario.idUsu !== response.data));
    setUpdateData(true);
    abrirFecharModalExcluir(); 
  });
};
  //UseEffect
  useEffect(()=>{
    if(updateData){
      usuariosGet();
      setUpdateData(false)
    }    
  },[updateData]);

  return (
    <>
     <div className='usuario-container'>
                  <br/>
                  <h3>Cadastro de Usiários</h3>
                  <header>
                    <button className='btn btn-primary' onClick={ () => 
                      abrirFecharModalIncluir() }>Cadastrar</button>
                  </header>
              <div className="table-responsive">
              <table className="table table-bordered">
                  <thead>   
                    <tr >
                      <th scope="col">Códogo</th>
                      <th scope="col">Nome</th>
                      <th scope="col">Cargo</th>
                      <th scope="col">Nascimento</th>
                      <th scope="col">Ação</th>
                    </tr>
                  </thead>
                  <tbody>
                    {data.map(usuario => (
                        <tr key={usuario.idUsu}>
                        <th scope="row">{usuario.idUsu}</th>
                        <td>{usuario.nomeUsu}</td>
                        <td>{usuario.cargo}</td>
                        <td>{new Date(usuario.dataNasc).toLocaleDateString('pt-BR')}</td>                      
                        <td>
                        <button type="button" className="btn btn-warning" onClick={ () =>
                         selecionarUsuario(usuario, "Editar") }> Editar </button>{"  "}                       
                       
                        <button type="button" className="btn btn-danger"onClick={ () => 
                        selecionarUsuario(usuario, "Excluir") }>Excluir</button>
                        </td>
                      </tr> 
                      ))}              
                  </tbody>
                </table>
              </div>
              {/*MODAL PARA CADASTRAR USUÁRIO*/}
              <Modal isOpen= {modalIncluir}>
                <ModalHeader> Incluir Usuário </ModalHeader>         
               <ModalBody>
               <div className="form-group">
                    <label>Nome:</label>
                      <input type="text" className="form-control" name="nomeUsu" onChange={handleChange}/>

                    
                    <label>Cargo:</label>
                    <input type="text" className="form-control" name="cargo" onChange={handleChange}/>
                    
                    <label>Nascimento:</label>
                    <input type="date" className="form-control" name="dataNasc" onChange={handleChange}/>
                                       
                  </div>
               </ModalBody>
               <ModalFooter>
                  <button  className='btn btn-primary' onClick={ () => usuariosPost() }>Incluir</button>{"   "}
                  <button className='btn btn-danger'onClick={ () => abrirFecharModalIncluir() }>Cancelar</button>
                </ModalFooter>
              </Modal>

               {/*MODAL PARA ALTERAR USUÁRIO*/}
               <Modal isOpen= {modalEditar}>
                <ModalHeader> Editar Usuário </ModalHeader>         
               <ModalBody>
               <div className="form-group">
                  <label>Código:</label>
                  <br/>
                  <input type="text" readOnly className="form-control"  name="idUsu" onChange={handleChange}
                    value={usuariosSelecionados && usuariosSelecionados.idUsu}/>

                    <label>Nome:</label>
                      <input type="text" className="form-control" name="nomeUsu" onChange={handleChange}
                      value={usuariosSelecionados && usuariosSelecionados.nomeUsu} />
                    
                    <label>Cargo:</label>
                    <input type="text" className="form-control" name="cargo" onChange={handleChange}
                    value={usuariosSelecionados && usuariosSelecionados.cargo} />
                    
                    <label>Nascimento:</label>
                    <input type="date" className="form-control" name="dataNasc" onChange={handleChange}
                    value={usuariosSelecionados && usuariosSelecionados.dataNasc} />
                                       
                  </div>
               </ModalBody>
                <ModalFooter>
                  <button  className='btn btn-primary' onClick={ () => usuarioPut() }>Editar</button>
                  <button className='btn btn-danger'onClick={ () => abrirFecharModalEditar() }>Cancelar</button>
                </ModalFooter>
              </Modal>

              {/*MODAL PARA EXCLUIR USUÁRIO*/}
              <Modal isOpen= {modalExcluir}>
                  <ModalBody>
                    Confirma a exclusão do usuário(a) : {usuariosSelecionados && usuariosSelecionados.nomeUsu} ?
                  </ModalBody>
                  <ModalFooter>
                  <button className='btn btn-danger' onClick={ () => usuarioDeletar() }>Sim</button>
                  <button  className='btn btn-secondary' onClick={ () => abrirFecharModalExcluir() }>Não</button>
                  
                  </ModalFooter>
                </Modal>
      </div>       
    </>
  )
}

export default App
