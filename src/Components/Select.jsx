import React from 'react'

function Select({FuncionSelect}) {
  return (
    <div className="ContainerSelect">
        <div className='titleSelect'>
            <p className='parrafoSelect'>
                Seleccionar Campo
            </p>
            <hr></hr>
        </div>
        
        <div onClick={()=>FuncionSelect('Sexo')} className='btnContainer'><button className='buttonSelect'>Sexo</button></div>
        <div onClick={()=>FuncionSelect('Direccion')} className='btnContainer'><button className='buttonSelect'>Dirección</button></div>
        <div onClick={()=>FuncionSelect('Estado')} className='btnContainer'><button className='buttonSelect'>Estado</button></div>
        <div onClick={()=>FuncionSelect('Descripcion')} className='btnContainer'><button className='buttonSelect'>Descripción</button></div>
    
    </div>
  )
}

export default Select
