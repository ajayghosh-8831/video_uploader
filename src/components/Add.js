import React from 'react'
import { useState } from 'react';
import { Form } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { Link } from 'react-router-dom';
import uniqid from 'uniqid';
import { addVideos } from '../services/allApis';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';




function Add({update}) {
    const [show, setShow] = useState(false);
    const [inputs,setInputs]=useState(
      {
        id:"",
        caption:"",
        cover_image:"",
        video_url:""

      }
    )
    const setValues=(e)=>{
let {name,value}=e.target
setInputs({...inputs,[name]:value})
    }
const extractUrl=(e)=>{
  let video=e.target.value
  if(video.includes("v="))
  {


    let subUrl=video.split("v=")[1]
    let finalUrl= `https://www.youtube.com/embed/${subUrl}?autoplay=1`
    setInputs({...inputs,["video_url"]:finalUrl})
  }

}
const addData=async (e)=>{
  e.preventDefault()
let recordid=uniqid()
const {caption,cover_image,video_url}=inputs
console.log(inputs)
if(inputs.length==0|| caption==""|| cover_image=="" ||video_url==""  )
{
  toast.error('All input fields are required', {
    position: "top-center",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "colored",
    });
}
else 
{
setInputs({...inputs,["id"]:recordid})
const res=await addVideos(inputs)
if(res.status>=200 && res.status<300)
{
  update(res.data)
toast.success('Video Added', {
  position: "top-center",
  autoClose: 2000,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  progress: undefined,
  theme: "colored",
  });
  setInputs( {
    id:"",
    caption:"",
    cover_image:"",
    video_url:""

  })
  setShow(false);
}
}

}
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  return (
  
        <div>
    <div className='m-3' style={{marginLeft:'120px'}}>
          <Link onClick={handleShow}> 
          <i class="fa-solid fa-circle-plus fa-fade fa-xl" style={{color :'#ed0202'}}></i>
        </Link>
    </div>
  
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Upload Video</Modal.Title>
          </Modal.Header>
          <Modal.Body className=' border mt-2'>
          <Form.Control className='text-dark bg-white' name='caption' type="text" onChange={(e)=>setValues(e)} placeholder="Video Caption" />
      <br />
      <Form.Control className='text-dark bg-white' name='cover_image' type="text" onChange={(e)=>setValues(e)} placeholder="Video Cover Image URL" />
      <br />
      <Form.Control  className='text-dark bg-white' name='video_url' type="text" onChange={(e)=>extractUrl(e)} placeholder="YouTube Video URL" />
          
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={addData}>
              Add
            </Button>
          </Modal.Footer>
        </Modal>
        <ToastContainer />
      </div>
  
  )
}

export default Add