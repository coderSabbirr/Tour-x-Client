import Swal from 'sweetalert2';
import './SingleOrderCart.css';

const SingleOrderCart = ({order}) => {
    
    const{package_details} =order;
    const { name, day, cost, img } = package_details;
    const handleDelete =id => {

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
              .then(data =>{
                  window.location.reload();
              })
            }
          })
        
       
    }

  
    const updateOrder = (id) => {

const update={
    status:"Approved"
}
        const url = `https://young-waters-54180.herokuapp.com/ordersupdate/${id}`;
        fetch(url , {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(update)
        })
            .then(res => res.json())
            .then(data => {
                Swal.fire(
                    'Good job!',
                    'Order Confirm successfull',
                    'success'
                  )
                window.location.reload();
                
             })
             
            }
            const status=order.status.status;
            let stutesbar=[];
            if(order.status.status ==="Pending") {
                stutesbar="Approve Order";
             }
             else{
                stutesbar=status;
             }
    return (
        <div className="">
            <div className="tour_Cart single-Order-Cart ">
                <img src={img} alt="" />
                <div className="p-2">
                    <div className="d-flex">
                        <h5 className="me-5">${cost}/Per Person</h5>
                        <h5 >{day}</h5>
                    </div>
                    <h2 className="custom_color">{name}</h2>
                    <p className=" customer_n ">Customer Name : {order.full_name.toUpperCase()}</p>
                    <p className=" customer_e">Customer Email :{order.email}</p>
                    <button className="btn btn-danger me-4 mt-5 ms-5 Delete_Order" onClick={()=> handleDelete(order._id)}>Delete Order</button>
                    <button className="btn btn-primary updateOrder"  onClick={()=> updateOrder(order._id)}>{stutesbar}</button>
                </div>
            </div>
            
        </div>
    );
};

export default SingleOrderCart;