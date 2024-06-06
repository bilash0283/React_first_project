import React, { useState } from 'react'

export default function Contact() {
  const [data,setdata] = useState({
    fullname:'',
    phone:'',
    email:'',
    message:'',
  });

  const InputEvent =(event)=>{
      const {name,value} = event.target;

       setdata((preVal)=>{
        return{
          ...preVal,
          [name] : value
        };
      });

  };

  const formsubmit =(e)=>{
    e.preventDefault();
    alert(`My Name is ${data.name} My Phone Number is ${data.phone} My Email Address is ${data.email} My Message is ${data.message}`);
  };

  return (
    <>
      <div className='my-5'>
        <h1 className='text-center'> Our Contact From</h1>
        <div className='container contact'>
          <div className='row'>
            <div className='col-md-6 col-10 mx-auto'>
              <form action="" onSubmit={formsubmit}>
                <div class="mb-3">
                  <label for="exampleFormControlInput1" class="form-label">Full Name</label>
                  <input name='fullname' onChange={InputEvent} value={data.fullname} type="text" class="form-control" id="exampleFormControlInput1" placeholder="Enter Your Name" />
                </div>
                <div class="mb-3">
                  <label for="exampleFormControlInput1" class="form-label">Phone</label>
                  <input name='phone' onChange={InputEvent} value={data.phone} type="number" class="form-control" id="exampleFormControlInput1" placeholder="Enter Your Phone" />
                </div>
                <div class="mb-3">
                  <label for="exampleFormControlInput1" class="form-label">Email Address</label>
                  <input name='email' onChange={InputEvent} value={data.email} type="email" class="form-control" id="exampleFormControlInput1" placeholder="Enter Your Phone" />
                </div>
                <div class="mb-3">
                  <label for="exampleFormControlTextarea1" class="form-label">Message</label>
                  <textarea name='message' onChange={InputEvent} value={data.message}  class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                </div>
                <button type='submit' className='btn btn-outline-secondary px-5'>Submit</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
