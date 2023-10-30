import React, { useEffect } from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { Card, CardTitle, Col, Form, Row } from 'react-bootstrap';
import { addCategory, deleteCategory, getAllCategory, getvideo, updateCategory } from '../services/allApis';
import uniqid from 'uniqid';
import { AlignCenter, Trash2 } from 'react-feather';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link } from 'react-router-dom';



function Categories() {
  const [show, setShow] = useState(false);
  const [deleteStatus, setDeleteStatus] = useState({})
  const [categlist, SetCategList] = useState([])
  const [category, setCategory] = useState({
    id: "",
    name: "",
    videos: []
  })
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const setCategoryName = (e) => {
    let value = e.target.value
    setCategory({ ...category, ["name"]: value })
  }

  const addNewCategory = async () => {
    const categName = category.name
    if (category.length == 0 || categName == "") {
      toast.error('Category name is required', {
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
    else {
      let id = uniqid()
      setCategory({ ...category, ["id"]: id })

      const res = await addCategory(category)
      if (res.status >= 200 && res.status < 300)
        console.log(res);
      getAllCategories();
      {
        toast.success(`${res.data.name} Added`, {
          position: "top-center",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
        });
        setShow(false)
        setCategory({
          id: "",
          name: "",
          videos: []
        }
        )
      }
    }

  }

  const getAllCategories = async () => {
    const categResult = await getAllCategory()
    SetCategList(categResult.data)

  }
  const categleDelete = async (categId) => {
    const res = await deleteCategory(categId)
    if (res.status >= 200 && res.status < 300) {
      setDeleteStatus(res)
    }
  }
  useEffect(() => {
    getAllCategories()
  }, [deleteStatus])
  const dragOver = (e) => {
    e.preventDefault();
  }
  const dropped = async (e, id) => {
    console.log("Card Dropped " + id);
    //video id access from videocard
    const videoId = e.dataTransfer.getData("cardid")
    console.log("video Id" + videoId);
    //video access from backednd
    const { data } = await getvideo(videoId)
    console.log(data);
    //select sepecific category from all cateegory \
    const selectedCategory = categlist.find(i => i.id == id)
    // set vidos in to selected category 
    selectedCategory.videos.push(data)
    // Update videos in ctaegory at backend 
    await updateCategory(id, selectedCategory)
    getAllCategories()
  }

  return (
    <div  >
      <div className='p-2' style={{ float: 'right', marginRight: '3%' }}>
        <Button style={{ width: '250px' }} variant="primary" onClick={handleShow}>
          Add Category
        </Button></div>

      <div className='categoryMaindiv'>

        <Row>
          <div className='ml-5 card' style={{ border: '2px solid white', width: '100%' }}>

            {categlist &&
              categlist.map(i =>

                <Col style={{ width: '100%' }} lg={4} md={6} sm={3}>
                  <div droppable onDragOver={(e) => dragOver(e)} onDrop={(e) => dropped(e, i.id)}

                    style={{ border: '1px solid #9A7400' }} className='m-1'>
                    <div class="card-body" >
                    <Link to={`/CategoryVideo/${i.id}`}> <h5 class="card-title rounded" style={{ textAlign: 'center' }}>{i.name} </h5></Link>
                      <div style={{ marginTop: '-40px', float: 'right' }} >
                        <Trash2 size={40} onClick={() => categleDelete(i.id)} className='text-danger btn'></Trash2>
                      </div>
                    </div>
                    <Row>
                      {
                        i.videos &&
                        i.videos.map(j =>
                          <Col lg={6} md={6} sm={6}>
                            <div className='m-1' style={{ border: '1px solid white', width: '100%' }}  >

                             <img class="card-img-top " style={{ height: '65px', width: '100%' }} src={j.cover_image} alt="" />
                              <p class="card-text m-2" > {j.caption} </p>

                            </div>
                          </Col>
                        )

                      }

                    </Row>

                  </div>
                </Col>
              )

            } <br /><br /></div>
        </Row>



        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Add New Category</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form.Control onChange={(e) => setCategoryName(e)} className='text-dark bg-white' type="text" placeholder="Category Name" />
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={addNewCategory}>
              Add
            </Button>
          </Modal.Footer>
        </Modal>
        <ToastContainer />



      </div>
    </div>
  )
}

export default Categories