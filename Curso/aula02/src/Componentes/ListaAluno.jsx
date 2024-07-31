import React from "react";


function ListaAluno  (props) {
    return(
    <div>
        <ul>
        <li>props.alunos[0]</li>
        <li>props.alunos[1]</li>
        <li>props.alunos[2]</li>
        </ul>       
    </div>
    );
};
export default ListaAluno;