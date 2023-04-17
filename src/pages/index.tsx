// Step 1: Import React
import * as React from 'react'
import { Link } from 'gatsby'
import { Container, Row, Col, Card, Button } from 'react-bootstrap'
import { AiOutlineLinkedin } from "@react-icons/all-files/ai/AiOutlineLinkedin"
import { AiOutlineGithub } from "@react-icons/all-files/ai/AiOutlineGithub"
import { AiOutlineMail } from "@react-icons/all-files/ai/AiOutlineMail"
import Layout from '../components/layout'
import { StaticImage } from 'gatsby-plugin-image'

// Step 2: Define your component
const IndexPage = () => {
  return (
    <Layout>
      <Container fluid className='text-center px-0' style={{color: "#C0B4A4"}}>
        <div style={{ display: "grid" }}>
          <StaticImage
            src="../images/somewhere_in_scotland.jpg"
            alt="Edinburgh"
            layout="fullWidth"
            style={{gridArea: "1/1"}}
            aspectRatio={2.4 / 1}
            placeholder="blurred"/>
          <div style={{
            gridArea: "1/1",
            position: "relative",
            placeItems: "center",
            display: "grid",
            backgroundColor: "rgba(0,0,0,0.4)"
          }}>
            <div>
              <h1 style={{fontFamily: 'Quentin'}}>Enzo Italiano</h1>
              <p>FullStack Developer</p>
            </div>
          </div>
        </div>
        <div className='pb-2' style={{backgroundColor: "#363837"}}>
          <Row className='gx-0 pt-5'>
            <Col>
              <Card className='bg-dark mx-auto' style={{ width: '20rem', minHeight: '10rem' }}>
                <Card.Body>
                  <Card.Title>About</Card.Title>
                  <Card.Text>
                    Interested in programming since 2015, started studying by myself in personal projects.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card className='bg-dark mx-auto' style={{ width: '20rem', minHeight: '10rem' }}>
                <Card.Body>
                  <Card.Title>Projects</Card.Title>
                  <Card.Text>
                    Take a look in some projects I've been working on.
                  </Card.Text>
                  <Card.Link>
                    <Link to="/projects" style={{color: "#8F6E47"}}>
                      View projects
                    </Link>
                  </Card.Link>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card className='bg-dark mx-auto' style={{ width: '20rem', minHeight: '10rem' }}>
                <Card.Body>
                  <Card.Title>Contact</Card.Title>
                  <Card.Text>
                    <AiOutlineLinkedin /> Linkedin
                  </Card.Text>
                  <Card.Text>
                    <AiOutlineGithub /> Github
                  </Card.Text>
                  <Card.Text>
                    <AiOutlineMail /> enzo.ditaliano@gmail.com
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
          <Button className='my-4' variant="light">Download CV</Button>
          <br />
          <h3 className='mb-4'>Experience timeline</h3>
          <Container className='my-2'>
            <Row>
              <Col>Backend Developer</Col>
              <Col>Polytechnic Institute of Bragança</Col>
              <Col>2022-2023</Col>
            </Row>
            <hr className='hr hr-blurry'></hr>
            <Row>
              <Col>Backend Developer</Col>
              <Col>Dataway Tecnology</Col>
              <Col>2021-2022</Col>
            </Row>
            <hr className='hr hr-blurry'></hr>
            <Row>
              <Col>Algorithm Monitor</Col>
              <Col>Technological Federal University of Paraná</Col>
              <Col>2021</Col>
            </Row>
            <hr className='hr hr-blurry'></hr>
            <Row>
              <Col>Python Developer</Col>
              <Col>Technological Federal University of Paraná</Col>
              <Col>2019</Col>
            </Row>
            <hr className='hr hr-blurry'></hr>
          </Container>
          <small>You may find out more about each on my LinkedIn.</small>
        </div>
        <StaticImage
            src="../images/somewhere_in_scotland.jpg"
            alt="Edinburgh"
            layout='fullWidth'
            style={{gridArea: "1/1", maxHeight: "100px"}}
            objectPosition={"center bottom"}
            placeholder="blurred"/>
      </Container>
    </Layout>
  )
}

// You'll learn about this in the next task, just copy it for now
export const Head = () => <title>Home Page</title>

// Step 3: Export your component
export default IndexPage