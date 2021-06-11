//funcion que recolecta y reescribe el mensaje de bienvenida en el formulario
const EscribirMensaje = (value)=>{
    console.log(value);
    //se cmabia con JS el mensaje de bienvenida 
    document.querySelector('.Bienvenida').innerHTML= 'Bienvenido a los servicios de ' + value;
} 
export default EscribirMensaje;