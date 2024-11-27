import React from 'react';
import Swal from 'sweetalert2'
const AddCoffee = () => {
    const handleAddCoffee = event =>{
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const quantity = form.quantity.value;
        const chef = form.chef.value;
        const supplier = form.supplier.value;
        const taste = form.taste.value;
        const detail = form.detail.value;
        const photo = form.photo.value;
        const newCoffee = {name,quantity,chef,supplier,taste,detail,photo}
        console.log(newCoffee);
         //send data to the server
         fetch('http://localhost:5000/coffee',{
            method:'POST',
            headers:{
              'content-type':'application/json'
            },
            body: JSON.stringify(newCoffee)
            
          })
          .then(res=>res.json())
          .then(data=>{
              console.log(data);
              if(data.insertedId){
                  Swal.fire({
                      title: 'Success!',
                      text: 'User Added Successful',
                      icon: 'success',
                      confirmButtonText: 'Cool'
                    })
              }
          })
    }
    return (
        <div className='bg-[#F4F3F0] mx-auto p-10'>
            <h2 className='text-center mt-4 mb-4 font-bold text-3xl'>ADD New Coffee</h2>
            <p className='text-center'>It is a long established fact that a reader will be distraceted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here.</p>
            <form onSubmit={handleAddCoffee}>
                {/* form row */}
            <div className='flex gap-6 justify-center mt-10 md:flex'>
            <div className="form-control md:w-1/2">
  <label className="label">
    <span className="label-text">Coffee Name</span>
  </label>
  <label className="input-group">
    {/* <span>Name</span> */}
    <input type="text" name='name' placeholder="Coffee Name" className="input input-bordered w-full" />
  </label>
             </div>
             <div className="form-control md:w-1/2">
  <label className="label">
    <span className="label-text">Coffee Quantity</span>
  </label>
  <label className="input-group">
    {/* <span> Quantity</span> */}
    <input type="text" name='quantity' placeholder="Available Quantity" className="input input-bordered w-full" />
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
    <input type="text" name='chef' placeholder="Coffee Chef" className="input input-bordered w-full" />
  </label>
             </div>
             <div className="form-control md:w-1/2">
  <label className="label">
    <span className="label-text">Supplier</span>
  </label>
  <label className="input-group">
    {/* <span> Quantity</span> */}
    <input type="text" name='supplier' placeholder="Coffee Supplier" className="input input-bordered w-full" />
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
    <input type="text" name='taste' placeholder="Coffee Taste" className="input input-bordered w-full" />
  </label>
             </div>
             <div className="form-control md:w-1/2">
  <label className="label">
    <span className="label-text">Details</span>
  </label>
  <label className="input-group">
    {/* <span> Quantity</span> */}
    <input type="text" name='detail' placeholder="coffee detail" className="input input-bordered w-full" />
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
    <input type="photo" name='photo' placeholder=" photo URL" className="input input-bordered w-full" />
   </label>
    </div>
    </div>
    <button className='btn bg-[#D2B48C] w-full mt-4'>Add Coffee</button>
    </form>
        </div>
    );
};

export default AddCoffee;