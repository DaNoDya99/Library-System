import React, {Component} from "react";
import './home.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Row,Col,Navbar,Nav,Container,Form,Button} from "react-bootstrap";
import {Link} from "react-router-dom";

import addLogo from "../assets/add.png";
import searchLogo from "../assets/search.png";
import issueLogo from "../assets/borrow.png";
import deleteLogo from "../assets/delete.png";
import returnLogo from "../assets/return.png";
import userLogo from "../assets/user.png";
import logoutLogo from "../assets/logout.png";
import bookShelf from "../assets/bookshelf.png";
import info from "../assets/info.png";
import settings from "../assets/settings.png";
import profile from "../assets/profile.png";

export default class Home extends Component {
    render() {
        return (
            <div>
                <Row>
                    <div className={"col-5"} style={{'background-color':'#1C3879','text-align':'center','border-bottom-right-radius':'100px'}}>
                        <h1 className={"title mt-5"}>Book Hub</h1>
                        <p className={"text h3"}>Welcome back to the library.</p>
                        <Row style={{'margin-top': '10rem'} }>
                            <Col>
                                <div>
                                    <Link to={'/add-book'} className={'nav-link'}>
                                        <img src={addLogo} alt="add logo" style={{"width":'100px'}}/>
                                        <p className={"text"}>Add Book</p>
                                    </Link>
                                </div>
                                <div>
                                    <Link to={'/delete-book'} className={'nav-link'}>
                                        <img src={deleteLogo} alt="delete logo" style={{"width":'100px'}}/>
                                        <p className={"text"}>Delete Book</p>
                                    </Link>
                                </div>
                            </Col>
                            <Col>
                                <div>
                                    <Link to={'/search-book'} className={'nav-link'}>
                                        <img src={searchLogo} alt="add logo" style={{"width":'100px'}}/>
                                        <p className={"text"}>Search Book</p>
                                    </Link>
                                </div>
                                <div>
                                    <Link to={'/return-book'} className={'nav-link'}>
                                        <img src={returnLogo} alt="add logo" style={{"width":'100px'}}/>
                                        <p className={"text"}>Return Book</p>
                                    </Link>
                                </div>
                            </Col>
                            <Col>
                                <div>
                                    <Link to={'/issue-book'} className={'nav-link'}>
                                        <img src={issueLogo} alt="add logo" style={{"width":'100px'}}/>
                                        <p className={"text"}>Issue Book</p>
                                    </Link>
                                </div>
                                <div>
                                    <Link to={'/add-member'} className={'nav-link'}>
                                        <img src={userLogo} alt="add logo" style={{"width":'100px'}}/>
                                        <p className={"text"}>Add Member</p>
                                    </Link>
                                </div>
                            </Col>
                        </Row>
                        <div>
                            <Link to={'login'} className={'nav-link'}>
                                <img className={'mb-5'} src={logoutLogo} alt="Logout" style={{"width": '75px','margin-top':'6rem'}}/>
                            </Link>
                        </div>
                    </div>
                    <div className={'col-7'}>
                        <Navbar bg={"light"} >
                            <Container>
                                <img src={bookShelf} style={{'width':'50px'}} alt="Logo"/>
                                <Nav.Link className={"mx-4 title2"}>Book Hub</Nav.Link>
                                <Nav className={"justify-content-end"}>
                                    <Nav.Link>
                                        <img src={info} alt="" style={{'width':'50px'}}/>
                                    </Nav.Link>
                                    <Nav.Link>
                                        <img src={settings} alt="" style={{'width':'50px'}}/>
                                    </Nav.Link>
                                    <Nav.Link>
                                        <img src={profile} alt="" style={{'width':'50px'}}/>
                                    </Nav.Link>
                                </Nav>
                            </Container>
                        </Navbar>

                        <div style={{'text-align':'center'}} >
                            <h2 className={'title2 my-5'} style={{'font-size':'50px'}}>Add Member</h2>
                            <Form style={{"width":"600px",'margin':"0 auto"}}>
                                <Form.Group className="mb-3" controlId="formGroupNIC">
                                    <Form.Label className={'text'} style={{'color':'black'}}>NIC Number</Form.Label>
                                    <Form.Control type="text" placeholder="Enter NIC Number" />
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="formGroupName">
                                    <Form.Label className={'text'} style={{'color':'black'}}>Name</Form.Label>
                                    <Form.Control type="text" placeholder="Enter Name" />
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="formGroupEmail">
                                    <Form.Label className={'text'} style={{'color':'black'}}>Email</Form.Label>
                                    <Form.Control type="email" placeholder="Enter Email" />
                                </Form.Group>
                                <Form.Group className={"mb-3"} controlId="formGroupGender">
                                    <Form.Label className={'text'} style={{'color':'black'}}>Gender</Form.Label>
                                    <Form.Select aria-label="Default select example">
                                        <option>--- Select Gender ---</option>
                                        <option value="male">Male</option>
                                        <option value="female">Female</option>
                                    </Form.Select>
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="formGroupAdress">
                                    <Form.Label className={'text'} style={{'color':'black'}}>Home Address</Form.Label>
                                    <Form.Control type="text" placeholder="Enter Home Address" />
                                </Form.Group>


                            </Form>

                            <Button className={'text'} size={'lg'} style={{'background-color':'#277BC0','width':'150px','margin-top':'60px'}}>ADD</Button>
                        </div>
                    </div>
                </Row>
            </div>
        );
    }
}
