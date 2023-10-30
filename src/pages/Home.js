import React, { useState } from 'react'
import { Col, Row } from 'react-bootstrap'
import Add from '../components/Add'
import View from '../components/View'
import Categories from '../components/Categories'
import { Link } from 'react-router-dom'




function Home() {
  const [addUpdate,setAddUpdate]=useState({})  // state For state Lifting
  return (
    <div className='homeClass ml=5' style={{width:'98%',height:"500px",overflowY:'auto',border:'1px solid white'}}>
<h2 className='ms-5 ps-5'><span className='text-danger'> S</span>tatrts<span className='text-danger'> U</span>ploading
<span className='text-danger'> V</span>ideos <span className='text-danger'> F</span>or <span className='text-danger'>F</span>ree </h2>
<div className='mb-3' style={{textDecoration:'none',fontFamily:'Satisfy cursive'}}>
<i class="fa-brands fa-searchengin fa-flip fa-xl"  style={{color: '#f20707'}}></i>
  <Link style={{textDecoration:'none'}} to={'/watch-history'}><a >View watch history</a></Link> 
</div>
<Row>
<Col lg={1}><Add update={setAddUpdate}></Add></Col>
<Col lg={7} sm={2} md={2}><View stateUpdate={addUpdate}></View></Col>
<Col lg={4} sm={4}  md={4} ><Categories></Categories></Col>
</Row>

    </div>
  )
}

export default Home