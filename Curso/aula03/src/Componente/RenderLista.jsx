import { useState } from "react"

const RenderLista = () => {
    const [lista] = useState(["Nilson","Thiago","Thallya", "Bruno"]);

    const [alunos] = useState([
        {Id: 1, Nome: "Fabiano", Idade: 37 },
        {Id: 2, Nome: "Lucas", Idade: 22 },
        {Id: 3, Nome: "Joana", Idade: 19 },
    ]);
    return(
        <div>
            <p>Lista de nomes</p>
            <ul>
                {lista.map((item, i)=>(
                    <li key={i}>{item}</li>
                ))}
            </ul>
            <p>Lista de Alunos</p>
            <ul>
                {alunos.map((alunos)=>(
                    <li key={alunos.Id}>{alunos.Nome}- {alunos.Idade}</li>
                ))}
            </ul>
        </div>
    );
};
export default RenderLista