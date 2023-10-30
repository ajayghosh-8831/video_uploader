import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { getCategoryById, getVideoById, updateCategory } from '../services/allApis';
import { Button, Card, Col, Row } from 'react-bootstrap';
import { Trash2 } from 'react-feather';


function CategoryVideo() {
    const param = useParams();
    const [video, setVideo] = useState({})
    const [categ, setCateg] = useState({
        id: "",
        name: "",
        videos: []
    })
    useEffect(() => {
        //console.log('categ id' +param.categId)
        getCategoryDetailsById()
    }, []
    )
    const getCategoryDetailsById = async () => {
        const vidId = param.videoId
        const categoryId = param.categId
        const result = await getCategoryById(categoryId)
        setCateg(result.data);
        setVideo(result.data.videos.find(i => i.id == vidId))

    }
    const handleDelete = async (id) => {
        const vidId = param.videoId
        const categoryId = param.categId
        const filterdVido = categ.videos.filter(i => i.id != id)
        categ.videos.splice(0, categ.videos.length)
        categ.videos.push.apply(categ.videos, filterdVido);
        console.log(categ);
        const res = await updateCategory(categoryId, categ)
        console.log(res);
        getCategoryDetailsById()
    }

    //console.log(video);
    return (
        <div className='m-3' style={{ textAlign: 'center',width:'98%',height:'340px'}}>
            <div className='float-end m-2' >
                <Link  to={'/home'}> <Button className='btn btn-warning rounded btn btn-primary'>Go Home</Button></Link>
            </div>
            <Row style={{ width:'100%',float:'top' }}>
                <h2   className='text-warning'>{categ?.name}</h2>                {
                    categ.videos.length > 0 ?

                        categ.videos.map(j =>
                            <Col lg={4} sm={12} md={12} style={{height:'250px'}} >
                                <h2>{j.caption}</h2>
                                <Card className='border-dark pl-5' >
                                    <iframe height="200" width="100%" src={j.video_url} title="Kalki Official Trailer | Tovino Thomas | Samyuktha Menon | Praveen Prabharam | Jakes Bejoy"
                                        frameborder="0" allow="accelerometer;
         clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                                    <Card.Body >
                                        <div className='float-end mb-2' >
                                            <Trash2 onClick={(e) => handleDelete(j.id)} size={44} className='text-danger btn'></Trash2>
                                        </div>
                                    </Card.Body>
                                </Card>
                                <br />
                                <br />
                                <br />
                      
                            </Col>
                        ) : <h1>No Video's avilable in this Category</h1>
                }
            </Row>




        </div>
    )
}

export default CategoryVideo