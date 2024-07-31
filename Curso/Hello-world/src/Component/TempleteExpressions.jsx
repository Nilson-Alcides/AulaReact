const  TemplateExpressions = () =>{
    const nome = "Nilson"
    const idade = "46"
    const profissao = "Professor"
return (
<div>
    <h1>Olá, {nome} tudo bem?</h1>
    <h2>Tenho { idade} anos de idade</h2>
    <h2>Trabalho como {profissao} na ETEC BG</h2>
    
</div>
);
};
export default TemplateExpressions;