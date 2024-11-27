import React from 'react';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';

const CoffeeCard = ({coffee,coffees,setCoffees}) => {
    const {_id,name,quantity,chef,supplier,taste,detail,photo} = coffee;
     
    const handleDelete =_id =>{
        console.log(_id);
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
          }).then((result) => {
            if (result.isConfirmed) {
            
            fetch(`http://localhost:5000/coffee/${_id}`,{
                method:'DELETE'
            })
            .then(res=>res.json())
            .then(data=>{
                console.log(data);
                if(data.deletedCount > 0){
   Swal.fire({
                 title: "Deleted!",
                text: "Your Coffee has been deleted.",
                 icon: "success"
               });
               const remaining = coffees.filter(cof=> cof._id != _id)
            setCoffees(remaining);    
            }
            })
            }
          });
     }
    return (
        
      <div className="card mb-4  card-side bg-base-100 shadow-xl">
  <figure>
    <img className=''
      src={photo} alt="Movie" />
  </figure>
  <div className="card-body flex flex-row justify-between">
  
  
  <div className=''>
  <h2 className="card-title">Name:{name}</h2>
    <p>Quantity:{quantity}</p>
    <p>Taste:{taste}</p>
    <p>Supplier:{supplier}</p>
    <p>Chef:{chef}</p>
    </div>
   
    <div className="card-actions grid grid-cols-1">
  <button className="btn bg-[#D2B48C]  text-white">View</button>
 
  <Link to={`updateCoffee/${_id}`}>
  <button className="btn bg-[#1B1A1A]  text-white">Edit</button>
  </Link>
  <button onClick={() =>handleDelete(_id)}  className="btn  bg-[#EA4744]  text-white">X</button>
</div>
   
  </div>
      </div>
        
    );
};

export default CoffeeCard;