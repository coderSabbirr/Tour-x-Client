import React, { useEffect, useState } from 'react';
import './mangeOrder.css';
import SingleOrderCart from './SingleOrderCart/SingleOrderCart';

const MangeOrder = () => {
    const[Orders,setOrders] =useState([])

    useEffect(() => {
fetch('https://young-waters-54180.herokuapp.com/orders')
.then(res => res.json())
.then((data) =>setOrders(data))
    },[])
    return (
        <div>
            <div className="our_package-img">
               <h2> Manage All Orders</h2>
            </div>
            <div className="container mange_ordermain">
           <div className="mange-order">
           {
                Orders.map(order =><SingleOrderCart
                    order={order}
                    key={order._id}
                >

                </SingleOrderCart>)
            }
           </div>
        </div>
        </div>
    );
};

export default MangeOrder;