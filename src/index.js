import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const Button = (props) => {
  return(
    <button onClick={props.click}>
     <span>{props.children}</span>
     {/* it will use what you have in app > button */}
    </button>
  )
};

const Application = () => {

  // const [name, setName]= useState('Karolina');
  const [name, setName]= useState('');
  

  const reset = () => {
    document.getElementById('name').value = '';
    //reseting the field
    console.log("reset");
  };

  return (
    <main>
      <input
      type='text'
      id ='name'
      placeholder='Type your name'
      value={name}
      onChange={(event) => setName(event.target.value)}
      >
      </input>
      <Button click={reset}>
        Reset
      </Button>
      { name && <h1>Hello {name}</h1> }
      {/* rendering Hello only when the name is in the input */}
    </main>
  );
};

ReactDOM.render(<Application />, document.getElementById("root"));
