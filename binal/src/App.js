import logo from './logo.svg';
import './App.css';
import Country from './Container/Country/Country';
import City from './Container/Country/City';
import Countryfun from './Container/Country/Countryfun';
import Cityfun from './Container/Country/Cityfun';
import Branch from './Container/Country/Branch';
import Time from './Container/Country/Time/Time';
import TimeFun from './Container/Country/Time/TimeFun';
import { useEffect, useState } from 'react';
import Loading from './Componats/Loading/Loading';
import Home from './Container/Country/Home/Home';

const HomeWithLoding=Loading(Home)

function App() {
  const [loading, setLoading]=useState(false);
  const [data, setData]=useState([]);

  let orgData=[
    {id: 101, name:"Mansi"},
    {id: 102, name:"Krinali"},
    {id: 103, name:"Jignasa"}
  ]

  useEffect(
    ()=>{
      setLoading(true);
      setTimeout(()=>{setLoading(false);setData(orgData)},2000);
    },
  [])
console.log(loading, data);
  return (
    <>
    <HomeWithLoding
      isLoading={loading}
      data={data}
    />
    </>
  );
}

export default App;
