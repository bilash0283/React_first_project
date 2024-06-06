import React from 'react';
import Card from './Card';
import Sdata from './Sdata';

export default function Service() {
console.log(Sdata);
  return (
    <>
      <div className='container-fluid '>
        <div className='row'>
          <h1 className='text-center text-primary py-5'>OUR SERVICES</h1>
          <div className='col-10 mx-auto'>
            <div className='row gx-5 gy-5 d-flex justify-content-between '>
             {
              Sdata.map((val,ind)=>{
                return <Card key={ind} 
                  imgsrc={val.imgsrc}
                  title={val.title}
                />
              })
             }
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
