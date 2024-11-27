import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Swal from 'sweetalert2';

const UpdateCoffee = () => {
    const coffee = useLoaderData();
    const {_id,name,quantity,chef,supplier,taste,detail,photo} = coffee;
    const handleUpdateCoffee = event =>{
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const quantity = form.quantity.value;
        const chef = form.chef.value;
        const supplier = form.supplier.value;
        const taste = form.taste.value;
        const detail = form.detail.value;
        const photo = form.photo.value;
        const updateCoffee = {name,quantity,chef,supplier,taste,detail,photo}
        console.log(updateCoffee);
         //send data to the server
         fetch(`http://localhost:5000/coffee/${_id}`,{
            method:'PUT',
            headers:{
              'content-type':'application/json'
            },
            body: JSON.stringify(updateCoffee)
            
          })
          .then(res=>res.json())
          .then(data=>{
              console.log(data);
              if(data.modifiedCount > 0){
                  Swal.fire({
                      title: 'Success!',
                      text: 'Coffee Update Successful',
                      icon: 'success',
                      confirmButtonText: 'Cool'
                    })
              }
          })
    }
    return (
        <div className='bg-[#F4F3F0] mx-auto p-10'>
            <h2 className='text-center mt-4 mb-4 font-bold text-3xl'>UpDate New Coffee:  {name}</h2>
            <form onSubmit={handleUpdateCoffee}>
                {/* form row */}
            <div className='flex gap-6 justify-center mt-10 md:flex'>
            <div className="form-control md:w-1/2">
  <label className="label">
    <span className="label-text">Coffee Name</span>
  </label>
  <label className="input-group">
    {/* <span>Name</span> */}
    <input type="text" name='name' defaultValue={name}  placeholder="Coffee Name" className="input input-bordered w-full" />
  </label>
             </div>
             <div className="form-control md:w-1/2">
  <label className="label">
    <span className="label-text">Coffee Quantity</span>
  </label>
  <label className="input-group">
    {/* <span> Quantity</span> */}
    <input type="text" name='quantity' defaultValue={quantity} placeholder="Available Quantity" className="input input-bordered w-full" />
  </label>
             </div>
            </div>
                   {/* form row */}
                   <div className='flex gap-6 justify-center mt-2 md:flex'>
            <div className="form-control md:w-1/2">
  <label className="label">
    <span className="label-text">Chef</span>
  </label>
  <label className="input-group">
    {/* <span>Name</span> */}
    <input type="text" name='chef' defaultValue={chef} placeholder="Coffee Chef" className="input input-bordered w-full" />
  </label>
             </div>
             <div className="form-control md:w-1/2">
  <label className="label">
    <span className="label-text">Supplier</span>
  </label>
  <label className="input-group">
    {/* <span> Quantity</span> */}
    <input type="text" name='supplier' defaultValue={supplier} placeholder="Coffee Supplier" className="input input-bordered w-full" />
  </label>
             </div>
            </div>
                   {/* form row */}
                   <div className='flex gap-6 justify-center mt-2 md:flex'>
            <div className="form-control md:w-1/2">
  <label className="label">
    <span className="label-text">Taste</span>
  </label>
  <label className="input-group">
    {/* <span>Name</span> */}
    <input type="text" name='taste' defaultValue={taste} placeholder="Coffee Taste" className="input input-bordered w-full" />
  </label>
             </div>
             <div className="form-control md:w-1/2">
  <label className="label">
    <span className="label-text">Details</span>
  </label>
  <label className="input-group">
    {/* <span> Quantity</span> */}
    <input type="text" name='detail' defaultValue={detail} placeholder="coffee detail" className="input input-bordered w-full" />
  </label>
             </div>
            </div>
                   {/* form row */}
    <div className='mt-2 w-full'>
    <div className="form-control  w-full">
  <label className="label">
    <span className="label-text">Photo</span>
  </label>
  <label className="input-group">
    {/* <span>Name</span> */}
    <input type="photo" name='photo' defaultValue={photo} placeholder=" photo URL" className="input input-bordered w-full" />
   </label>
    </div>
    </div>
    <button className='btn bg-[#D2B48C] w-full mt-4'>Update Coffee</button>
    </form>
        </div>
    );
};

export default UpdateCoffee;