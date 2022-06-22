import React, { useEffect, useState } from 'react';
import { NavLink, useHistory } from 'react-router-dom';

function ListAppointment(props) {
    const history = useHistory()
    const [data, setData] = useState([]);
    const loadData = () => {
        let localData = JSON.parse(localStorage.getItem("apt"))
        setData(localData);
    }
    const handleDelete = (id) => {
        let localData= JSON.parse(localStorage.getItem("apt"));
        let dData = localData.filter((l, i) => l.id !==id)
        localStorage.setItem("apt", JSON.stringify(dData));
        loadData();
    }

    const handleEdit = (id) => {
        history.push("/bookappointment", {"id": id})
    }
    useEffect(() => {
        loadData();
    },
        [])
    return (
        <main id="main">
            <section id="appointment" className="appointment">
                <div className="container">
                    <div className="section-title">
                        <h2>Make an Appointment</h2>
                        <p>Aenean enim orci, suscipit vitae sodales ac, semper in ex. Nunc aliquam eget nibh eu euismod. Donec dapibus
                            blandit quam volutpat sollicitudin. Fusce tincidunt sit amet ex in volutpat. Donec lacinia finibus tortor.
                            Curabitur luctus eleifend odio. Phasellus placerat mi et suscipit pulvinar.</p>
                    </div>
                    <div className='row text-center'>
                        <div className='col-6 pb-4'>
                            <NavLink exact to={"/bookappointment"} activeClassName={"actbtn"}>BookAppointment</NavLink>
                        </div>
                        <div className='col-6 pb-4'>
                            <NavLink exact to={"/listappointment"} activeClassName={"actbtn"}>ListAppointment</NavLink>
                        </div>
                    </div>
                </div>
                {
                    data.map((d, i) => {
                        return (
                            <>
                                <div className='container'>
                                    <div className='row'>
                                        <h5>{d.name}</h5>
                                        <hr/>
                                        <h5>{d.email}</h5>
                                        <hr/>
                                        <h5>{d.phone}</h5>
                                        <hr/>
                                        <h5>{d.date}</h5>
                                        <hr/>
                                        <h5>{d.department}</h5>
                                        <hr/>
                                        <h5>{d.message}</h5>
                                        <hr/>
                                    </div>
                                    <button onClick={()=>handleDelete(d.id)}>Delete</button>
                                    <button onClick={()=>handleEdit(d.id)}>Edit</button>
                                    <hr/>
                                </div>
                            </>
                        )
                    })
                }
            </section>
        </main>

    );
}

export default ListAppointment;
