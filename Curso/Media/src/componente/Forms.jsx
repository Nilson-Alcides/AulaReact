import {useState} from 'react'
import "./Forms.css";
const Forms = () => {
    const [nota1, setNota1] = useState()
    const [nota2, setNota2] = useState()
    const [nota3, setNota3] = useState()
    const [media, setMedia] = useState()
    const [soma, setSoma] = useState()
    const [msg, setMsg] = useState("")

    const handleSubmit = (e) => {
      e.preventDefault();     

     const soma = (nota1 + nota2 + nota3);
      setSoma(soma);
     const  media = soma / 3; 
      setMedia(media);      

      console.log(soma);
      //console.log(media);
      if(media >= 2 && media <= 4.99){
        const msg ="Você ficou de recuperação, sua nota é ";
        setMsg(msg);
        <p>{msg}: {media}</p> 

        console.log(media);      
      }
      else if(media >= 5 && media <= 7.99)
      {
        const msg ="Sua nota é B ";
        setMsg(msg);
        <p>{msg}: {media}</p> 
        console.log(media);        
      }
      else if(media >= 8 && media <= 10)
        {
          const msg ="Sua nota é MB ";
          setMsg(msg);
          <p>{msg} {media}</p> 
          
          console.log(media);
          
        }
        else if(media >= 0 && media <= 2)
          {
            const msg ="Você foi reprovado nota";
            setMsg(msg);
            <p>{msg} {media}</p> 
            
            console.log(media);
            
          }
      else
      {
        const msg ="digite um valor entre 1 e 10 para cada nota  ";
        setMsg(msg);
        <p>{msg}: {media}</p>       
      
      }      
      setNota1("");
      setNota2("");
      setNota3("");
    };

  return (
    <>
        <div>
          <p>Calcular média</p>
            <form onSubmit={handleSubmit}>
              <div>
                <label>1° Nota</label>
                  <input
                  value={nota1} 
                  onChange={(e) => setNota1(+e.target.value)}/>
                
                <label>2° Nota</label>
                  <input  
                  value={nota2} 
                  onChange={(e) => setNota2(+e.target.value)}/>
                  
                <label>3° Nota</label>
                  <input  
                  value={nota3} 
                  onChange={(e) => setNota3(+e.target.value)}/>
                  <br/>
                  <input className='btn' type='submit' value="Calcular"/>             

              </div>
                <p>{msg}, {media}</p>
            </form>              
        </div>
    </>
   
  )
}
export default Forms