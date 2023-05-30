import React from 'react';
import '../Style/Usecase.css';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import card1img from '../uploads/card1_image.jpg';
import card2img from '../uploads/card2_image.jpg';
import card3img from '../uploads/card3_image.jpg'



function Usecase() {
    return (
        <div className='usecase'>
            <Container fluid>
                <div className='integrate'>
                    <Row>
                        <div className='content1'>
                            <Col className='heading'><h2>Unlock Efficiency with ChatGPT Integration for WhatsApp: Save Time and Effort</h2></Col>
                        </div>           
                    </Row>
                    <Row>
                        <div className='content2'>
                            <p className='chat'>Welcome to our web page highlighting the powerful integration of ChatGPT with WhatsApp. Discover how this seamless combination can revolutionize communication, enhance productivity, and save valuable time and effort for users. In this comprehensive guide, we'll delve into compelling use cases, testimonials, and statistics that demonstrate the immense benefits of integrating ChatGPT with WhatsApp.</p>
                        </div>
                    </Row>
                </div>
            </Container>
            <div className='cases'>
                <div className='content2'>
                    <Col className='uses'><h2>Usecases</h2></Col>
                </div>
                <div className='section1'>
                    <Container>
                        <div className='columns'>
                        <Row>
                            <div className='column123'>
                                <Col>
                                <div className='card21'>
                                    <Card style={{ width: '18rem' ,height: '28rem' }}>
                                    <Card.Img variant="top" src={card1img} height={220}/>
                                    <Card.Body>
                                        <div className='cardcontent'>
                                            <div className='cardtitle'><Card.Title > Customer Support Automation</Card.Title></div>
                                            <div className='cardtext'><Card.Text>Through this, businesses can automate customer support processes, providing instant responses to frequently asked questions which provides 24/7 availability.</Card.Text></div>
                                        </div>
                                    </Card.Body>
                                    </Card>
                                </div>
                                </Col>
                                <Col>
                                <div className='card22'>
                                    <Card style={{ width: '18rem',height: '28rem'  }}>
                                    <Card.Img variant="top" src={card2img} height={220}/>
                                    <Card.Body>
                                        <div className='cardcontent'>
                                            <div className='cardtitle'><Card.Title > Personal Assistant</Card.Title></div>
                                            <div className='cardtext'><Card.Text>By integrating ChatGPT, users can delegate tasks such as scheduling appointments, setting reminders, or finding information quickly and efficiently.</Card.Text></div>
                                        </div>
                                    </Card.Body>
                                    </Card>
                                </div>
                                </Col>
                                <Col>
                                <div className='card23'>
                                    <Card style={{ width: '18rem',height: '28rem'  }}>
                                    <Card.Img variant="top" src={card3img} height={220}/>
                                    <Card.Body>
                                        <div className='cardcontent'>
                                            <div className='cardtitle'><Card.Title > Language Translation</Card.Title></div>
                                            <div className='cardtext'><Card.Text>Users can communicate with people from different linguistic backgrounds effortlessly. This integration eliminates the need for external translation apps or services.</Card.Text></div>
                                        </div>
                                    </Card.Body>
                                    </Card>
                                </div>
                                </Col>
                            </div>
                        </Row>
                        </div>
                    </Container>
                </div>
            </div>
        </div>
    
    );
}

export default Usecase;

