import React, { useEffect, useState } from 'react';
import SinglePackages from './SinglePackages/SinglePackages';
import './TourPackages.css';
const TourPackages = () => {
    const[tourPackages,setTourPackages]=useState([])

    useEffect(()=>{
        fetch('https://young-waters-54180.herokuapp.com/packages')
        .then(res=>res.json())
        .then(data=>setTourPackages(data))
    },[])
    // console.log(tourPackages);
    return (
        <div className="container our_package">
            <div className="mt-5 pt-5">
                <h5 className="custom_color text-center">Choose Your Package</h5>
                <h2 className="text-center">Select Your Best Package For Your Travel</h2>
                <div className="tourPackages">
                    {
                       tourPackages?.map(tourPackage=><SinglePackages
                       key={tourPackage._id}
                       tourPackage={tourPackage}
                       >

                       </SinglePackages>) 
                    }
                </div>
            </div>
        </div>
    );
};

export default TourPackages;