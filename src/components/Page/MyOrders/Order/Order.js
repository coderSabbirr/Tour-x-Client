import React from 'react';
import Swal from 'sweetalert2';
import './Order.css';
const Order = ({order}) => {
    const handleDelete =(id,e) =>{

        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
          }).then((result) => {
            if (result.isConfirmed) {
              Swal.fire(
                'Deleted!',
                'Your file has been deleted.',
                'success'
              )
              const url=`https://young-waters-54180.herokuapp.com/orders/${id}`
            fetch(url,{
                method:'DELETE'
            })
            
            .then(res => res.json())
            .then(data => {
                window.location.reload();
            })

            }
          })
       
    }
    const{package_details}=order;
    const { name, day, cost, img }=package_details
    return (
        <div>
             <div className="tour_Cart">
                <img src={img} alt="" />
                <div className="p-2">
                    <div className="d-flex">
                        <h5 className="me-5">${cost}/Per Person</h5>
                        <h5 >{day}</h5>
                    </div>
                    <h2 className="custom_color">{name}</h2>
                    <button className="m-auto me-5 mt-5 cencel-btn" onClick={()=> handleDelete(order._id)}>Cencel Order</button>
                    <button className=" mt-5 status-btn" >{order.status.status}</button>
                </div>
            </div>
        </div>
    );
};

export default Order;