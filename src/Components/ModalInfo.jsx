import React from 'react'

export default function ModalInfo(props) {

  if (!props.ShowModal) return null
 
  return (
    <div className='ModalTrue'>
        <div className='ModalContainer'>
            <div className='HeaderModal'>
            <div className='TittleHeaderModal'>Mostrar Registro</div>
            <div className='btnCloseModal' onClick={()=>props.setShowModal(false)}>X</div>
            </div>
            <div className='BodyModal'>


            </div>
            <div className='footerModal'>

            </div>

        </div>

      
    </div>
  )
}
