//Import das dependencias 
import {v4 as uuid} from 'uuid';
import React, {useState} from 'react';

import { Container, ToDoList, Input, Button, ListItem } from './styles.js';

import { FcEmptyTrash, FcCheckmark } from "react-icons/fc";

//Abaixo da primeira function vem o JavaScript
function App() {

  const [list, setList] = useState ([{ id: uuid(), task: "Nada" }])
  const [inputTask, setInputTask] = useState ('')
  
  function imputMudou(event){
    setInputTask(event.target.value)
  }

  function cliqueiNoBotao(){
    setList([ ... list, { id: uuid(), task: inputTask }])
  }

  //abaixo do return é onde é inserido todos os dados de HTML
  return (
    <Container>
      <ToDoList>
        <Input onChange={imputMudou} placeholder="O que tenho para fazer..." />
        <Button onClick={cliqueiNoBotao}>Adicionar</Button>

        <ul>
          {
            list.map(item => (
              <ListItem>
                <FcCheckmark />
                <li key={item.id}>{item.task}</li>
                <FcEmptyTrash/>
              </ListItem>
            ))
          }     
        </ul>
      </ToDoList>
    </Container>
  )
}

export default App
