import logo from './logo.svg';
import './App.css';

function App() {

  let data=[
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

  let filterdata = data.filter((d, i) => (d.status === true));
  let abc = filterdata.reduce((acc, d) => acc + d.salary + d.bonus, 0)
  
  return (
    <>
      <table border="1">
        <tr>
          <th>Name</th>
          <th>Age</th>
          <th>Salary</th>
          <th>Bonus</th>
          <th>Status</th>
          <th>Salary+Bonus</th>
          <th>Total</th>
        </tr>
        {
          filterdata.map((value, index) => {
            return(
              <tr>
              <td>{value.name}</td>
              <td>{value.age}</td>
              <td>{value.salary}</td>
              <td>{value.bonus}</td>
              <td>{value.status.toString()}</td>
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
