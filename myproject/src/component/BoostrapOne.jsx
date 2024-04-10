import Card from 'react-bootstrap/Card';
import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button';
import Toast from 'react-bootstrap/Toast';
import React, { useState } from 'react'


export default function BoostrapOne() {
    const [showA, setShowA] = useState(true);
    const  toggleShowA = () => setShowA(!showA);
    return (
        <>
            <Card>
                <Card.Header>
                    <Nav variant="tabs" defaultActiveKey="#first" className='fs-4'>
                        <Nav.Item>
                            <Nav.Link href="#first">Home</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link href="#link">About</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link href="#disabled" >
                                Contact
                            </Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link href="#second" >
                                Blog
                            </Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link href="#third" >
                                Help
                            </Nav.Link>
                        </Nav.Item>
                    </Nav>
                </Card.Header>
            </Card>

            {/* message hide and show */}
            <div className="most">
                <Button onClick={toggleShowA} className="mb-2">
                    Toggle Toast <strong>with</strong> Animation
                </Button>
                <Toast show={showA} onClose={toggleShowA}>
                    <Toast.Header>
                        <img
                            src="holder.js/20x20?text=%20"
                            className="rounded me-2"
                            alt=""
                        />
                        <strong className="me-auto">Bootstrap</strong>
                        <small>11 mins ago</small>
                    </Toast.Header>
                    <Toast.Body>Woohoo, you're reading this text in a Toast!</Toast.Body>
                </Toast>
            </div>


        </>
    )
}
