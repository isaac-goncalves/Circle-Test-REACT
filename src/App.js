
import './App.css';
import { useState } from 'react'

const getClickPosition = (e) => {
  console.log(e)
  const X = e.clientX;
  const Y = e.clientY;
 
  return [X, Y];

}

function createCilcle(event) {
  console.log('Clicou');
  // return (
  //   <div class_ame='circle'></div>
  // )
  const [X, Y] = getClickPosition(event);
  console.log(Y);
  console.log(X);

  // const newCirclesArray = [...circlesArray, {X, Y}];

}




function App() {
  const [circles,setCircles] = useState([]) 

  return (
    <div className="App">
      <h1>Clique em qualquer lugar para criar um circulo</h1>
      <div onClick={createCilcle} className='circle-area'>Area clicavel
        <div className='circle'></div></div>
    </div>
  );
}

export default App;
