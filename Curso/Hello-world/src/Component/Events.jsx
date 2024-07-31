const Events = () =>{
    const handleMyEvent = (e) =>{
        console.log(e)
        console.log("Ativado envento");
    };
    return(
        <div>
            <div>
                <button onClick={handleMyEvent}>Clique aqui</button>
                <div>
                <button onClick={ () => console.log("clicou no envento")}>Clique Aqui tambem</button>
                </div>
            </div>
        </div>
    );
};
export default Events