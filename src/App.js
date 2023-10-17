import logo from './logo.svg';
// import './App.css';
import { Fragment } from 'react';
import ToDoFeature from './features/Todo';

function App() {
  const name = 'Thanh Tu';
  const age = 18;
  const isMale = true;
  const student = {
    name: 'Thanh Tu'
  };

  const colorList = ['red', 'green', 'blue'];

  return (
    <div className="App">
     
        {/* <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>

         Render ra chuỗi, số, đúng sai 
        <p>{name} - {age} - {isMale ? 'Male' : 'Female'}</p>

        {isMale ? <p> Male</p> : <p>Female</p>}

        {isMale && <p>Male</p>}
        {!isMale && <p>Female</p>}

        {isMale && ( 
          <div>
            <p>Male 1</p>
            <p>Male 2</p>
            <p>Male 3</p>
          </div>
        )}

        {isMale && ( 
          <Fragment>
            <p>Male 4</p>
            <p>Male 5</p>
            <p>Male 6</p>
          </Fragment>
        )}

        {isMale && ( 
          <>
            <p>Male 7</p>
            <p>Male 8</p>
            <p>Male 9</p>
          </>
        )}

         Render ra đối tượng 
        <p>{student.name}</p>

         Render ra mảng 
        <ul>
          {colorList.map(color =>(
            <li key={color} style={{color}}>{color}</li>
          ))}
        </ul>*/}

        <ToDoFeature />
    </div>
  );
}

export default App;
