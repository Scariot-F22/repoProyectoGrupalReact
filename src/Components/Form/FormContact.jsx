import React, {useRef, useState } from 'react'
import { Formik, useField, resetForm } from 'formik';
import Message from './Message';
import emailjs from '@emailjs/browser';





const FormContact = () => {

    const form = useRef();;
    
    const [toggle, setToggle] = useState(false);
    const [handleChange, setHandleChange] = useState("")

    const sendEmail = (e) => { //Aca el resetForm no funciono ni tampoco el boton de resettt
        
        e.preventDefault();
        alert("Enviando el formulario");
        setToggle(true);
        setTimeout(() => setToggle(false), 2000);
    
        emailjs.sendForm('service_001r66s', 'template_job12e6', form.current, 'XgDHlV5ZCNA6TC-QF')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
        
        

      };

    

  return (
    
    <>
        
        {(toggle) && <Message/>}  

    <Formik 
 
        handleChange={ (e) =>{
            setHandleChange(e.target.value)
        }}
        
        initialValues = {{
            nombre: "",
            apellido: "" ,
            email: "",
            obraSocial: "",
            telefono :"",
            pais:"",
            comentario: ""
        }}

        validate ={(valores) => {
            let errores ={};

            if (!valores.nombre) {
                errores.nombre = "Ingresa un nombre"
            }
            if (!valores.apellido) {
                errores.apellido = "Ingresa un apellido"
            }
            if (!valores.email) {
                errores.email = "Ingresa un email"
            }
            if (!valores.obraSocial) {
                errores.obraSocial = "Ingresa una obra social"
            }
            if (!valores.telefono) {
                errores.telefono = "Ingresa un telefono"
            }
            if (!valores.comentario) {
                errores.comentario = "Ingresa un comentario"
            }
            return errores
        }}
        
    >
        { ({values, handleSubmit, handleChange, handleBlur, errors, touched }) => (

        <form ref={form} className='pt-40 mx-8' onSubmit={sendEmail}>
            <div className='block text-base font-medium text-gray-900 mb-5 text-center'>
                <h1 className='mb-5 font-serif font-bold text-3xl'>Formulario de Contacto</h1> 
                <h3 className="text-teal-900">Responderemos todas sus dudas lo antes posible</h3>
            </div>
            <div class="grid gap-6 mb-6 md:grid-cols-2">
            
            <div>
                <label htmlFor={values.nombre} className={label}>Nombre</label>
                <input name="nombre" value={values.nombre} onChange={handleChange} onBlur={handleBlur} type="text" id="nombre" className={input} placeholder="Nombre" required>{}</input>
                {touched.nombre && errors.nombre && <div className="text-red-700">{errors.nombre}</div>}
            </div>
            <div>
                <label htmlFor={values.apellido} className={label}>Apellido</label>
                <input name="apellido" value={values.apellido} onChange={handleChange} onBlur={handleBlur} type="text" id="apellido" className={input} placeholder="Apellido" required>{}</input>
                {touched.apellido && errors.apellido && <div className="text-red-700">{errors.apellido}</div>}
            </div>
            <div>
                <label htmlFor={values.obraSocial} className={label}>Obra Social</label>
                <input name="obraSocial" value={values.obraSocial} onChange={handleChange} onBlur={handleBlur} type="text" id="obraSocial" className={input} placeholder="Obra Social" required>{}</input>
                {touched.obraSocial && errors.obraSocial && <div className='text-red-700'>{errors.obraSocial}</div>}
            </div>  
            <div>
                <label htmlFor={values.telefono} className={label}>Numero de telefono</label>
                <input name="telefono" value={values.telefono} onChange={handleChange} onBlur={handleBlur} type="tel" id="telefono" className={input} placeholder="54-342-128569" pattern="[0-9]{10}" required>{}</input>
                {touched.telefono && errors.telefono && <div className="text-red-700">{errors.telefono}</div>}
            </div>
            <div>
                <label htmlFor={values.pais} className={label}>Elija su Provincia</label>
                <select  name="provincia" value={values.pais} onChange={handleChange} onBlur={handleBlur} id="Pais" className={input}>
                <option value="Selecciona">--Selecciona--</option>
                <option  value="Buenos Aires" >Buenos Aires</option>
                <option  value="Catamarca">Catamarca</option>
                <option  value="Córdoba">Córdoba</option>
                <option  value="Corrientes">Corrientes</option>
                <option  value="Entre Ríos">Entre Ríos</option>
                <option  value="La Pampa">La Pampa</option>
                <option  value="Mendoza">Mendoza</option>
                <option  value="Neuquén">Neuquén</option>
                <option  value="Río Negro">Río Negro</option>
                <option  value="San Juan">San Juan</option>
                <option  value="San Luis">San Luis</option>
                <option  value="Santa Fe">Santa Fe</option>
                </select>
            </div>

            <div>
                <label htmlFor={values.email} className={label}>Email</label>
                <input name="email" value={values.email} onChange={handleChange} onBlur={handleBlur} type="email" id="email" className={input} placeholder="name@name.com" required>{}</input>
                {touched.email &&  errors.email && <div className='text-red-700'>{errors.email}</div>}
            </div>
            </div>

            <label htmlFor={values.comentario} className={label}>Escriba su mensaje</label>
            <textarea name="comentario" value={values.comentario} onChange={handleChange} onBlur={handleBlur} id="comentario" rows="4" className={textarea} placeholder="Escriba su mensaje..." required>{}</textarea>
            {touched.comentario && errors.comentario && <div className='text-red-700'>{errors.comentario}</div>}
            
            <div className="grid gap-2 mb-6 md:grid-cols-1 mt-8 max-w-sm">
            <label className={label} for="file_input">Carnet de Asociado</label>
            <input className="block w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 cursor-pointer " id="file_input" type="file"></input>
            </div>

            <div className="grid mb-6 md:grid-cols-2 mt-8 ">
            <button  type="submit" className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 w-24">Enviar</button>
            <button  type="reset" className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 w-28">Restablecer</button>
            </div>

        </form>
    )}
    
    </Formik>

    </> 
//onClick={()=> setToggle(!toggle)}
  )

}

const formStyles = {
    label: "block mb-2 text-sm font-medium text-gray-900 ",
    input: "bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5",
    textarea: "block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500"
};

const {label, input, textarea} = formStyles;
export default FormContact