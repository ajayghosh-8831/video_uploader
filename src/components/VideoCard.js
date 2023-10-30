import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import { Col, Row } from 'react-bootstrap';
import { Trash2 } from 'react-feather';
import { addHistory, deleteVideos } from '../services/allApis';
import uniqid from 'uniqid';
import { format } from 'date-fns';


function VideoCard({video,delUpdate}) {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = async() =>{
      var id=uniqid();
     var video_title=video.caption;
     var url= video.video_url;
     var curDate=format(new Date(),'yyyy-MM-dd h:mm:ss a')
     const body={id,video_title,url,curDate}
     if(body)
     {
     const res=await addHistory(body)
     }
      setShow(true);
    } 

    const handleDelete= async (id)=>{
 const result= await deleteVideos(id)
 if(result.status>=200 && result.status<300)
 {
  delUpdate(result.data)
 }
    }
  const drgStart=(e,id)=>
  {
    console.log("Drag Id "+ id);
    e.dataTransfer.setData("cardId",id);
  }
  return (
    <div style={{border:'1px solid',marginBottom:'40px'}}  >
      <Row>
        <Col >
    <Card draggable onDragStart={(e)=>drgStart(e,video.id)}   className='bg-black border-dark'>
    <Card.Img variant="top" onClick={handleShow}  style={{height:'200px',width:'99%'}} 
    src={video.cover_image} />
    <Card.Body >
    <div className='float-end mb-2' > 
    <Trash2 onClick={()=>handleDelete(video.id)} size={46} className='text-danger btn'></Trash2>
      {/* <i class="fa-solid fa-trash-can fa-fade fa-xl mb-3 btn"  style={{'color': '#f20707'}}></i> */}
      </div>
    </Card.Body>
  </Card>
  </Col>
  </Row>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{video.caption}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <iframe width="100%" height="340" src={video.video_url} title="Kalki Official Trailer | Tovino Thomas | Samyuktha Menon | Praveen Prabharam | Jakes Bejoy" 
        frameborder="0" allow="accelerometer; autoplay;
         clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        
        </Modal.Footer>
      </Modal>
  </div>

  )
}

export default VideoCard