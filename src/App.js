import Form from "./Components/Form";
import Select from "./Components/Select";
// import ModalInfo from "./Components/ModalInfo";
import React,{useState} from "react";
function App() {
  const [SelectInput, setSelectInput] = useState([]);
  const [DataSave, setDataSave] = useState([]);
//  const [ShowModal, setShowModal] = useState(false);
  const [dataJson, setdataJson] = useState(
  {
        name:"",
        lastName:"",
        Sexo:"",
        Direccion:"",
        Estado:"",
        Descripcion:""
    
    }
)

console.log('PRUEBA DATA:',DataSave)
console.log('PRUEBA Registro:',dataJson)


  const FuncionSelect = (dato)=>{
    setSelectInput([...SelectInput,dato])
  }

  const delectInput = (dato)=>{
    setSelectInput([...SelectInput.filter(registro=>registro !== dato)])
  }

  const funcRegistrar = (nombre,data)=>{
    dataJson[nombre] = data
    setdataJson(dataJson)
  }

  const Guaradar = (e)=>{
    
    setDataSave([...DataSave,dataJson])

    setdataJson(
      {
        name:"",
        lastName:"",
        Sexo:"",
        Direccion:"",
        Estado:"",
        Descripcion:""
    
    }
    )
    // setShowModal(true)
    document.getElementById('IdForm').reset();
    e.preventDefault()
    
    
  }

  return (
    <div className="ContenedorGlobal">
      <div className="ContainerFormSelect">
        <div className="HeaderContainer">FORMULARIO PRUEBA KOSMOS</div>
        <Form 
        SelectInput={SelectInput} 
        delectInput={delectInput} 
        Guaradar={Guaradar} 
        funcRegistrar={funcRegistrar}/>
        <Select FuncionSelect={FuncionSelect}/>

      </div>
      {/* <ModalInfo 
        ShowModal={ShowModal}
        setShowModal={setShowModal}
        /> */}
    </div>
  );
}

export default App;
