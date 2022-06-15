import React from 'react';
import { Button, Card, CardBody, CardTitle } from 'reactstrap';

function Medicine(props) {
    const data = [

        {
        id: 101,
        name: 'Abacavir',
        quantity: 25,
        price: 150,
        expiry: 2022
        },
        
        {
        id: 102,
        name: 'Eltrombopag',
        quantity: 90,
        price: 550,
        expiry: 2021
        },
        
        { 
        id: 103,
        name: 'Meloxicam',
        quantity: 85,
        price: 450,
        expiry: 2025
        },
        
        {
        id: 104,
        name: 'Allopurinol',
        quantity: 50,
        price: 600,
        expiry: 2023
        }, 

        {
        id: 105,
        name: 'Phenytoin',
        quantity: 63,
        price: 250,
        expiry: 2021
        },
        ];
        const handleDelete=()=>{
            console.log("delete");
        }
    return (
        <div>
            {
                data.map((d, i)=>{
                    return(
                        <Card key={i}>
                            <CardBody>
                                <CardTitle tag="h5">
                                    {d.name}
                                </CardTitle>
                                <Button onClick={handleDelete}>Delete</Button>
                            </CardBody>
                        </Card>
                    )
                })
            }
        </div>
    );
}

export default Medicine;