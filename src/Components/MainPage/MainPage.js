import React from 'react'
import { useState } from 'react'
import {MainContainer, Form, Input} from './styles'

function MainPage() {

  const [nome, setNome] = useState("")
  const onChangeName = (event) => {
    console.log("mudei nome")
    console.log(event.target.value)
    setNome(event.target.value)
  }

  const [idade, setIdade] = useState("")
  const onChangeIdade = (event) => {
    console.log("mudei idade")
    console.log(event.target.value)
    setIdade(event.target.value)
  }

  const [email, setEmail] = useState("")
  const onChangeEmail = (event) => {
    console.log("mudei email")
    console.log(event.target.value)
    setEmail(event.target.value)
  }

    function checkSend (){
      console.log("Nome:", nome, "Idade:", idade, "Email:", email)
      setNome("")
      setIdade("")
      setEmail("")
    }

  return (
    <MainContainer>
      <h2>Formulário de inscrição</h2>
      <Form>
        <label>
          Nome:
          <Input type= "text" onChange={onChangeName} value={nome}/>
        </label>
        <label>
          Idade:
          <Input type= "number" onChange={onChangeIdade} value={idade}/>
        </label>
        <label>
          E-mail:
          <Input type= "email" onChange={onChangeEmail} value={email}/>
        </label>
      <button onClick={checkSend}>Enviar dados</button>
      </Form>
    </MainContainer>
  )
}

export default MainPage