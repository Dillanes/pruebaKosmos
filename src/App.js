import Form from "./Components/Form";
import Select from "./Components/Select";
import Data from '../src/helpers/Data.json'
import React,{useState} from "react";
function App() {
  console.log(Data)
  const [SelectInput, setSelectInput] = useState([]);
  console.log(SelectInput)
  const FuncionSelect = (dato)=>{
    setSelectInput([...SelectInput,dato])
  }

  const delectInput = (dato)=>{
    setSelectInput([...SelectInput.filter(registro=>registro !== dato)])
  }

  return (
    <div className="ContenedorGlobal">
      <div className="ContainerFormSelect">
        <div className="HeaderContainer">FORMULARIO PRUEBA KOSMOS</div>
        <Form SelectInput={SelectInput} delectInput={delectInput}/>
        <Select FuncionSelect={FuncionSelect}/>
      </div>
      
    </div>
  );
}

export default App;
