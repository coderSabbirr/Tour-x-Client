import React, { useEffect, useState } from 'react';
import './AllPackage.css';
import PackageCart from './PackageCart/PackageCart';
const TourPackages = () => {
    const[tourPackages,setTourPackages]=useState([])

    useEffect(()=>{
        fetch('https://young-waters-54180.herokuapp.com/packages')
        .then(res=>res.json())
        .then(data=>setTourPackages(data))
    },[])
    return (
        <div className="">
            <div className="our_package-img">
            <h2>Tour Packages</h2>
            </div>
            <div className="container our_package">
            <div className="mt-5 pt-5">
                <h2 className="custom_color text-center mb-5">Choose Your Package</h2>
               
                <div className="tourPackages">
                    {
                       tourPackages?.map(tourPackage=><PackageCart
                       key={tourPackage._id}
                       tourPackage={tourPackage}
                       >

                       </PackageCart>) 
                    }
                </div>
            </div>
        </div>
        </div>
    );
};

export default TourPackages;