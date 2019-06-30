import React, {useState, useEffect} from 'react';
import './App.css';

const App = () => {

  const [name, setName] = useState('Sarah')
  const [age, setAge] = useState('24')

  useEffect(() => {
    document.title = name
  })

  return (
    <div className="App">
      <h1>Hi, I'm {name}</h1>
      <button onClick={() => setName('Spiderman')}>
        Change Name
      </button>
      <h2>I am {age} years old</h2>
      <button onClick={() => setAge(age-1)}>Younger</button>
      <button onClick={() => setAge(age+1)}>Older</button>
    </div>
  );
}

export default App;

// useState
  // returns a stateful value and a function to update it (compared to initalizing apps separately and using setState function to update state)

  // imported useState hook from React
  // created constant that returned a pair of objects, name & setName from useState
  // initialized useState hook to value of 'Sarah'
  // used name property instead of a hard-coded value
  // called setName function to change the value of name on click of button


// useEffect
  // takes a function that contains code (fetching data or subscribing to a service) and returns a function that will be executed before the effect runs and when the component is unmounted
  // re-initializes itself from the last iteration
  
  // imported useEffect
  // used this effect to change the title of the HTML document
  // dynamically changes value of document.title every time the name state property changes
  // executes first when the component is done loading on to the page, then again when the state of the component gets updated