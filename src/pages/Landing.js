import React from 'react'
import { Col, Row } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';


function Landing() {
  return (
    <div>
  <Card style={{ width: '90%' }} className='m-0'>
    <Row><Col>    <Card.Img style={{height:'300px',width:'100%'}} variant="top"  
      src="https://i.postimg.cc/K8Rwv1wG/b-MRLo-BDv-Un-Xnb-DDz-DKw-W2-Qmkq-Nnhp-Y36z-Rdu-Lb3-D.webp" /> </Col> 
      <Col>
       <Card.Img style={{height:'300px',width:'100%'}} variant="top"  
      src="https://i.postimg.cc/sf9dLmnd/G563k-NHnx-Zkso-XC4mrtcib-Xdx-G6-Su-E0-Hm2ear-EVu.webp" /> </Col></Row>
  
  
   
      <Card.Body>
        <Card.Title>Video Storage</Card.Title>
        <Card.Text>
        </Card.Text>
         <Link to={'/home'}> <Button variant="primary">Get Started</Button> </Link>
      </Card.Body>
    </Card>

    </div>
  )
}

export default Landing