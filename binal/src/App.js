import logo from './logo.svg';
import './App.css';

function App() {

  const data=[
    {
      name: "amit",
      age: 35,
      salary: 40000,
      bonus: 1000,
      status: true
    },
    {
      name: "ajay",
      age: 25,
      salary: 38000,
      bonus: 2000,
      status: false
    },
    {
      name: "mayur",
      age: 23,
      salary: 50000,
      bonus: 500,
      status: true
    },
    {
      name: "jay",
      age: 29,
      salary: 35000,
      bonus: 600,
      status: true
    },
    {
      name: "raj",
      age: 33,
      salary: 22000,
      bonus: 2000,
      status: true
    },
  ]

  //map
  data.map((value, index) => console.log(value.name, value.age, value.salary, value.bonus));

  //filter
  //let filterData = data.filter((d, i) => d.expiry >=2022);
  //console.log(filterData);

  //reduce
  //let ans = filterData.reduce((acc, d, i)=>acc+d.price, 0);
  //console.log(ans);

  //filter&reduce
  let abc=data
  .filter((d, i)=>d.salary>=35000)
  .reduce((acc,d,i)=>acc+d.bonus,0);
  console.log(abc);

  return (
    <>
      <table border="1">
        <tr>
          <td>Name</td>
          <td>Age</td>
          <td>Salary</td>
          <td>Bonus</td>
          <td>Salary+Bonus</td>
          <td>Total</td>
        </tr>
        {
          data.map((value, index) => {
            return(
              <tr>
              <td>{value.name}</td>
              <td>{value.age}</td>
              <td>{value.salary}</td>
              <td>{value.bonus}</td>
              <td>{value.salary+value.bonus}</td>
              {index === 0 ?<td rowspan={data.length}>{abc}</td> :null}
            </tr>
            )
          })
        }
      </table>
    </>
  );
}

export default App;
