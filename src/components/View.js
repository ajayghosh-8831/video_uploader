import React, { useEffect, useState } from 'react'
import VideoCard from './VideoCard'
import { getAllVideos } from '../services/allApis'
import { Col, Row } from 'react-bootstrap'


function View({stateUpdate}) {
const[allVideos,setAllVideos]=useState([])
const [deleteUpdate,setDeleteUpdate]=useState({})
const accessAllVideos= async ()=>{
  const res=await getAllVideos()
  setAllVideos(res.data);
}
useEffect( ()=>{
  accessAllVideos()
},[stateUpdate,deleteUpdate]
)
console.log(allVideos);
  return (
      <Row> 
      { allVideos.length>0?
      
         allVideos.map(i=>
          <Col lg={4} md={6}>
          <VideoCard delUpdate={setDeleteUpdate}  video={i}></VideoCard>
          </Col>
          )
      :<h1>No Video Found</h1>

      }

          </Row>
  )
}

export default View