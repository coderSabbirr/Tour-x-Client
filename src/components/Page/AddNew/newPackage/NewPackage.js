import React from 'react';
import './NewPackage.css';

const NewPackage = ({addnewpackage}) => {

    const handleDelete =id =>{
        if (window.confirm("Delete the item?")) {
            const url=`https://young-waters-54180.herokuapp.com/packages/${id}`
            fetch(url,{
                method:'DELETE'
            })
            .then(res => res.json())
            .then(data =>{
                window.location.reload();
            })
           
        }
        else{
            return;
        }
        
    }
    const{_id,img,cost,day,name,}=addnewpackage;
    return (
        <div>
            <div className=" addnewpackage">
               <div>
               <img src={img} alt="" />
               </div>
                <div className="p-2">
                    <div className="d-flex">
                        <h5 className="me-5">${cost}/Per Person</h5>
                        <h5 >{day}</h5>
                    </div>
                    <h2 className="custom_color">{name}</h2>
                    <button className="btn btn-danger me-5 mt-5" onClick={()=> handleDelete(_id)}>Delete Package</button>
                </div>
            </div>
        </div>
    );
};

export default NewPackage;