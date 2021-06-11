import React from 'react'
//react hook libreria que me permite recolectar los datos de un formulario
import { useForm } from 'react-hook-form'
import './css/formulario.css'

const FormInput = () => {
    //Traigo el register y el handle submit para porder registrar el valor de los inputs en un objeto
    const {register, handleSubmit} = useForm();
    //funcion para cuando se realiza el submit la data se cargue en la consola
    const onSubmit = (data) => {
        console.log(data)
        //PopUp de exito al registrarse se selecciona el elemto en el DOM 
        let modal = document.querySelector(".contenedorPopUp");
        //Se le agrega una clase para que pueda visualizarse
        modal.classList.add("abierto");
        //set timeeout que le retira la clase al PopUp para que  desaparezca despues de cinco segundos
        setTimeout(() => {
            modal.classList.remove("abierto");
        }, 5000);
    };
    //formulario
    return (
        <div className='container'>
            <h1 className='Bienvenida'>Bienvenido Elige tu aerolinea</h1>
             <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="inputs-form">
                        <input type="text" name="nombre" placeholder="Nombre completo" required="required" {...register('nombre')}/>
                        <input type="email" name="email"  placeholder="Email" required="required" {...register('emai')}/>
                        <input type="text" name="celular"  placeholder="celular" required="required" {...register('celular')}/>
                        <input type="text" name="rangoEdad"  placeholder="Rango de edad" required="required" {...register('rangoEdad')}/>
                    </div>
                    <button className="btn btn-primary send-form-ct" >Enviar</button>
                </form>
        </div>
    )
}

export default FormInput
