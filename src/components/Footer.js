import React from 'react'
import { Col, Row } from 'react-bootstrap'
import Badge from 'react-bootstrap/Badge';

function Footer() {
  return (
    <div className='fixed-bottom p-1 footercls'>
      <Row>
        <Col>
          <div className='footercontent'    >
            <ul>
              <li><Badge className='mb-2 ' pill bg="secondary">Make videos</Badge></li>
              <li>
                Screen recording
              </li>
              {/* <li>
                Creation and editing
              </li>
              <li>
                Interactive video
              </li> */}

            </ul>
          </div>

        </Col>

        <Col>
          <div   className=' footercontent' >
            <ul>
              <li><Badge className='mb-2 ml-5'  pill bg="secondary">Manage videos </Badge></li>
              <li>
                Video hosting
              </li>
              {/* <li>
                Video privacy
              </li>
              <li>
                Video collaboration
              </li> */}


            </ul>
          </div>


        </Col>
        <Col>
          <div  className=' footercontent' >
            <ul>
              <li><Badge pill bg="secondary" className='mb-2 ml-5' >Help & support</Badge></li>
              <li>
                Contact us
              </li>
              {/* <li>
                Community
              </li>
              <li>
                Help center
              </li> */}
            </ul>
          </div>


        </Col>

        <Col>
          <div className="footer-copyright text-center py-3">© 2023 Copyright:
            <a href="#"> VideoStorage.com</a>
          </div></Col>
      </Row>

    </div>
  )
}

export default Footer