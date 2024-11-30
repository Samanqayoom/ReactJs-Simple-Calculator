import "./App.css"
import Name from "./components/Name.jsx"
//import Container from "./components/Container.jsx"
import AddCharacter from "./components/AddCharacter.jsx"
import Input from "./components/Input.jsx"
import Container from "./components/Container.jsx"
import { useState } from "react"
function App() {

  let [CalVal,setCalVal]=useState("")
  const onButtonClick=(buttonText)=>
  {
    if(buttonText=="C")
    {  
       setCalVal("")

    }else if(buttonText=="="){
      const result=eval(CalVal)
      setCalVal(result)

    }else if(buttonText=="Del"){
      setCalVal((CalVal)=>{
        if(CalVal.length==1)
        {
          return "0";
        }
        else{
          return CalVal.slice(0,-1)
        }
        
    })}
    else {
             setCalVal((CalVal)=>
              CalVal+buttonText)

    }

  }
 
    
  




  return( 
   <>
      <Name></Name>
      <Container>
      <Input CalVal={CalVal}></Input>
      <AddCharacter onButtonClick={onButtonClick}></AddCharacter>
      </Container>
      
  
   </>
     
  )
    
  }
  

export default App
