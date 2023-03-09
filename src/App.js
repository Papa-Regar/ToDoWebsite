import logo from './logo.svg';
import './App.css';
import Form from './components/Form';
import List from './components/List';
import { useState } from 'react';

function App() {

  const [addList, setAddList]=useState([])

  const onAddList=(newList)=>{
    setAddList((prevList)=>{
    return [...prevList, {list: newList}]
    })
  }

  return (
    <div className="App">
      <div style={{display: 'flex',justifyContent: 'center',flexDirection: 'column', height: '100%', backgroundColor: 'crimson'}}>
      <Form onAddList={onAddList} />
      <List addList={addList} setAddList={setAddList}/>
      </div>
    </div>
  );
}

export default App;
