import React from 'react';
import Button from '@mui/material/Button';

import ReadOrder from '../../Backend/APIS/OrderAPI/ReadOrder';
export default function ReadOrderPage() {
    const listOrder = async () => {
        try {
            const ListOrder = await ReadOrder();
            if (ListOrder) {
                alert("List is fetched");
                console.log(ListOrder);
            }
        } catch (error) {
            console.log(error)
        }
    };

    return (
        <div className="App">
            <Button variant="contained" onClick={listOrder}>List All Order</Button>
        </div>
    );
}