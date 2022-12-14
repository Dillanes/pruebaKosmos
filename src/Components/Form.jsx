import React from 'react'

function Form({SelectInput,delectInput,funcRegistrar,Guaradar}) {
    

  return (
    <form onSubmit={(e)=>Guaradar(e)} id='IdForm' className="Form">
        <div className='bodyForm'>
        <div className='ItemInput'>
                <label className='labelForm'>Nombre:</label>
                <input required onChange={(e)=>funcRegistrar('name',e.target.value)} type='text' className='inputForm' placeholder='Nombre..'></input>
            </div>
            <div className='ItemInput'>
                <label className='labelForm'>Apellido:</label>
                <input required onChange={(e)=>funcRegistrar('lastName',e.target.value)} type='text' className='inputForm' placeholder='Apellido..'></input>
            </div>

            {SelectInput.includes('Sexo')?<div className='ItemInput'><div onClick={()=>delectInput('Sexo')} style={{fontSize:'10px',color:'red',cursor:'pointer'}}>X</div>
                <label className='labelForm'>Sexo:
                </label>
                <div>
                <label style={{color:'#fff'}}>Hombre</label><input type='radio' onChange={(e)=>funcRegistrar('Sexo',e.target.value)} value= 'Hombre'className='radio' name='sexo' placeholder='Apellido..'></input>
                <label style={{color:'#fff', marginLeft:'10px'}}>Mujer</label><input type='radio' onChange={(e)=>funcRegistrar('Sexo',e.target.value)} value= 'Mujer' name='sexo' className='radio' placeholder='Apellido..'></input>
                </div> 
            </div>:null}
            
            {SelectInput.includes('Direccion')?<div className='ItemInput'><div onClick={()=>delectInput('Direccion')} style={{fontSize:'10px',color:'red',cursor:'pointer'}}>X</div>
                <label className='labelForm'>Dirección:</label>
                <input  type='text' className='inputForm' onChange={(e)=>funcRegistrar('Direccion',e.target.value)} placeholder='Direccion..'></input>
            </div>:null}
            {SelectInput.includes('Estado')?<div className='ItemInput'><div onClick={()=>delectInput('Estado')} style={{fontSize:'10px',color:'red',cursor:'pointer'}}>X</div>
                <label className='labelForm'>Estado:</label>
                <select className='inputForm' onChange={(e)=>funcRegistrar('Estado',e.target.value)}>
                    <option value='Jalisco'>Jalisco</option>
                    <option value='Guerrero'>Guerrero</option>
                    <option value='Veracruz'>Veracruz</option>
                    <option value='Sinaloa'>Sinaloa</option>
                    <option value='Mexico'>Mexico</option>
                </select>
            </div>:null}
            {SelectInput.includes('Descripcion')?<div className='ItemInput'><div onClick={()=>delectInput('Descripcion')} style={{fontSize:'10px',color:'red',cursor:'pointer'}}>X</div>
                <label className='labelForm'>Descripción:</label>
                <input  onChange={(e)=>funcRegistrar('Descripcion',e.target.value)} type='text' className='inputForm' placeholder='Descripción..'></input>
            </div>:null}


        </div>

            <div className='footerForm'>
                <input className='brnEnviar' type='submit' value='Enviar'/>
                <input className='btnReset' type='reset' value='Limpiar'/>
            </div>   
    </form>
  )
}

export default Form
