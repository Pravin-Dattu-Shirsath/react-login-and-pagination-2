import React from 'react'
import { Link } from "react-router-dom";
function Home() {
  return (
    <><div className='container text-center'>
    <h1 className='text-white'>Home page</h1> 
                  
    <img src="https://t4.ftcdn.net/jpg/03/61/52/11/360_F_361521180_mMN9HNjxBWBy4DV6nRqCgt23VtcFiscL.jpg" alt="" />
    <button className='btn btn-light '><Link to="/" className='text-black '>logout</Link></button>


    </div>
      
    </>
  )
}

export default Home;
