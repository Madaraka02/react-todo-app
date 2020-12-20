import React,{ useState, useEffect} from 'react';
import './App.css';
import { Button, FormControl, InputLabel,Input } from '@material-ui/core';
import Todo from './Todo';
import {db }from './firebase';
import firebase from "firebase";

function App() {
   const [todos, setTodos] = useState([]);
   const [input ,setInput] = useState('');
  
   useEffect(() => {
     db.collection('todos').orderBy('timestamp', 'desc').onSnapshot(snapshot => {
       setTodos(snapshot.docs.map(doc => doc.data().todo))
     })


   }, []);
  
  
   const addTodo = (event) =>{
     event.preventDefault();

     db.collection('todos').add({
       todo: input,
       timestamp: firebase.firestore.FieldValue.serverTimestamp()
     })
      setTodos([...todos, input]);
     setInput("");

   }
  return (
    <div className="app">
      <form>
      <FormControl>
  <InputLabel>Write Todo</InputLabel>
  <Input  value={input}  onChange={event => setInput(event.target.value)}/>
</FormControl>
      <Button disabled={!input} type="submit" onClick={addTodo} color="secondary">
          Add Todo
        </Button>
        </form>
        <ul>
          {todos.map(todo => (
            <Todo text={todo}/>
            // <li>{todo}</li>
          ))}
        </ul>
    </div>
  );
}

export default App;
