import logo from './logo.svg';
import './App.css';

function App() {

  // var x=10;
  // {
  //   var x=20;
  // }
  // console.log(x);

  // let x=10;
  // {
  //   let x=20;
  // }
  // console.log(x);

  // const x=10;
  // {
  //   const x=20;
  // }
  // console.log(x);

  // let y=5;
  // y= y + 2;
  // console.log(y);

  // const z=5;
  // z= z + 2;
  // console.log(z);

  // const a;
  // a=50;
  // console.log(a);

  // let b;
  // b=50;
  // console.log(b);

  // let arr =[10,20,30,40,50];
  // arr.map((a ,i) => console.log(a));

  // let intro = () =>{
  //   console.log("binal bodar")
  // }
  // intro();

  // const numbers = [1, 2, 3, 4, 5];
  // const doubled = numbers.map((number) => number * 2);
  // console.log(doubled);

  let arr = [10,"Binal",20,30,40,50];
  console.log(arr[4]);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
