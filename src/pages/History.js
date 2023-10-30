import React, { useEffect, useState } from 'react'
import Table from 'react-bootstrap/Table';
import { Trash2 } from 'react-feather';
import { deleteHistory, getAllHistory } from '../services/allApis';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';



function History()
 {
    const [hist,setHist]=useState([])
    const [deletRes,setdeletRes]=useState({})
    const getHistories= async()=>
    {
const res= await getAllHistory();
setHist(res.data)
    }
    useEffect(()=>{
        getHistories()
    },[deletRes])
const deleteHistoryData=async (histId)=>{
const res=await deleteHistory(histId)
if(res.status>=200 && res.status<300)
setdeletRes(res.data)
console.log(deletRes);
}
  return (
    <div>
        <h1 className='text-center p-5'>Watch History</h1>
        <div className='float-end mb-5'>
       <Link className='p-5' to={'/home'}> <Button className="btn btn-warning rounded">Go Back</Button></Link> 
       </div>
{
    hist.length>0? (
<Table className='w-75 container pb-5 mb-5' striped bordered hover variant='danger'>
      <thead className='text-center fs-5'>
        <tr>
          <th>#</th>
          <th>Date</th>
          <th>Title</th>
          <th>Video Url</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {
      hist?.map((j,index)=>
        <tr>
          <td>{index+1}</td>
          <td>{j?.curDate}</td>
          <td>{j?.video_title}</td>
          <td>{j?.url}</td>
          <td><Trash2 onClick={()=>deleteHistoryData(j.id)} size={45} className='btn text-black'></Trash2></td>
        </tr>)}
    </tbody>
    </Table> ): <h2 className='text-centrt p-5 text-warning'>No History Found</h2>
 } 
    </div>

  )
}

export default History