import React from 'react';
import {Button, Row, Col, Container, Image, Card} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../Style/Home.css'
import image1 from '../uploads/image_1.png';
import gif1 from '../uploads/gif1.gif';
import gif2 from '../uploads/gif2.gif';
import gif3 from '../uploads/gif3.gif';


function Home() {

        return (
            <div className='home'>
            <div className='img1'><img src={image1} alt='image' height={150} width={300}></img></div>
            <div className='whatsapp'>
            <Container fluid>
                <div className='integrate'>
                    <Row>
                        <div className='content1'>
                            <Col className='heading'><h1>Whatsapp With ChatGPT</h1></Col>
                        </div>           
                    </Row>
                    <Row>
                        <div className='content2'>
                            <p className='chat'>WhatsApp integration with ChatGPT allows users to interact with the language model directly within the messaging app. Users can send messages to ChatGPT, receive responses, and engage in conversations seamlessly, providing a convenient and accessible way to access the AI-powered capabilities of ChatGPT on the WhatsApp platform.</p>
                        </div>
                    </Row>
                </div>
            </Container>
            <div className='benefits'>
                <Container fluid>
                    <Row>
                        <div className='content1'>
                            <Col className='heading'><h1>Benefits</h1></Col>
                        </div>           
                    </Row>
                </Container>
                <div className='benefit1'>
                    <Row className='communication px-10 my-5'>
                        <div className='comm'>
                            <Col className='image1' sm={4}><Image src= {gif1} rounded height={235} width={250}/></Col>
                            <Col classname='enahnced' sm={8}>
                                    <Card border="dark" style={{ width: '30rem', minheight: '15rem'}}>
                                        <div className='card1'>
                                            <Card.Body>
                                            <Card.Title className='title1'>Enhanced communication</Card.Title>
                                            <Card.Text className='text1'>
                                            Integrating WhatsApp with ChatGPT enables users to have natural language conversations with the language model, allowing for more interactive and dynamic communication. This can enhance the overall user experience by providing personalized and engaging interactions.
                                            </Card.Text>
                                            </Card.Body>
                                        </div>
                                    </Card>
                            </Col>
                        </div>
                    </Row>
                </div>
                <div className='benefit2'>
                    <Row className='access px-10 my-5'>
                        <div className='comm'>
                            <Col classname='convenience' sm={8}>
                                <Card border="dark" style={{ width: '30rem',minheight: '15rem'}}>
                                    <div className='card1'>
                                        <Card.Body>
                                        <Card.Title className='title1'>Accessibility and Convenience</Card.Title>
                                        <Card.Text className='text1'>
                                        WhatsApp is a widely used messaging platform with a large user base, making it easily accessible to a vast audience. Integrating ChatGPT with WhatsApp allows users to access the AI-powered capabilities of the language model directly within the app they are already familiar with, eliminating the need for additional platforms or interfaces.
                                        </Card.Text>
                                        </Card.Body>
                                    </div>
                                </Card>
                            </Col>
                            <Col className='image2' sm={4}><Image src={gif2} rounded height={250} width={250}  /></Col>
                        </div>
                    </Row>
                </div>
                <div className='benefit3'>
                    <Row className='Quick my-5'>
                        <div className='comm'>
                            <Col className='image3' sm={4}><Image src= {gif3} rounded height={235} width={250} /></Col>
                            <Col classname='informative' sm={8}>
                                <Card border="dark" style={{ width: '30rem', minheight: '15rem'}}>
                                    <div className='card1'>
                                        <Card.Body>
                                        <Card.Title className='title1'>Quick and Informative Responses</Card.Title>
                                        <Card.Text className='text1'>
                                        ChatGPT can provide quick and accurate responses to user queries, allowing for efficient information retrieval and support. Integrating it with WhatsApp enables users to ask questions, seek guidance, or obtain information on various topics in a conversational manner, leading to valuable and informative interactions.
                                        </Card.Text>
                                        </Card.Body>
                                    </div>
                                </Card>
                            </Col>
                        </div>
                    </Row>
                </div>
            </div>

        </div>
    </div>

    );

}


export default Home;
