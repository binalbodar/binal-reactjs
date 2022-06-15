import { Form, Formik, useFormik } from 'formik';
import React from 'react';
import { NavLink } from 'react-router-dom';
import * as yup from 'yup';

function ListAppointment(props) {

    let schema = yup.object().shape({
        name: yup.string().required("please enter name"),
        email: yup.string().email("please enter valid email").required("please enter email"),
        phone: yup.number().required("please enter number"),
        date: yup.string().required("please select date"),
        department: yup.string().required("please select department")
    });

    const formik = useFormik({
        initialValues: {
            name: '',
            email: '',
            phone: '',
            date: '',
            department: '',
        },
        validationSchema: schema,
        onSubmit: values => {
            console.log(JSON.stringify(values, null, 2));
        },
    });

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
            </section>
        </main>

    );
}

export default ListAppointment;
