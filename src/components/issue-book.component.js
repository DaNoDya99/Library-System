import React, {useState,useEffect} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Row,Col,Navbar,Nav,Container,Alert} from "react-bootstrap";
import {Link,useNavigate} from "react-router-dom";
import axios from "axios";

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
import { Form } from "react-bootstrap";
import Button from 'react-bootstrap/Button';
import home from "../assets/home.png";
import searchMemberLogo from "../assets/searchMember.png";


export function IssueBook(props) {

    const navigate = useNavigate()

    useEffect(()=>{
        if(!localStorage.getItem("user")){
            navigate('/login')
        }
    })

    const handleClick = () => {
        localStorage.removeItem("user");
        navigate('/login')
    }

    const [id,onChangeBookID] = useState("");
    const [name,onChangeName] = useState("");
    const [nic,onChangeNIC] = useState("");
    let [msg,onChangeMsg] = useState("");
    
    const onSubmit = (e) => {
        e.preventDefault();
        const issueObject = {
            id: id,
            name: name,
            nic: nic
        };
        axios.post('http://localhost:4000/library/issue-book', issueObject)
            .then(res => onChangeMsg(res.data.msg));
    }

    const alert = () => {
        if(msg !== ''){
            if(msg !== "Book issued successfully."){
                return(
                    <Alert variant="danger" onClose={() => onChangeMsg('')} dismissible>
                        <Alert.Heading>Oh snap! You got an error!</Alert.Heading>
                        <p>
                            {msg}
                        </p>
                    </Alert>
                )
            }else{
                return(
                    <Alert variant="success" onClose={() => onChangeMsg('')} dismissible>
                        <Alert.Heading>{msg}</Alert.Heading>
                    </Alert>
                )
            }
        }else{
            return <div></div>
        }
    }

        return (
            <div>
                <Row>
                    <div className={"col-5"} style={{'background-color':'#1C3879','text-align':'center','border-bottom-right-radius':'100px'}}>
                        <h1 className={"title mt-5"}>Book Hub</h1>
                        <p className={"text h3"}>Welcome back to the library.</p>
                        <Row style={{'margin-top': '4rem'} }>
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

                        <Row>
                            <div>
                                <Link to={'/search-member'} className={'nav-link'}>
                                    <img src={searchMemberLogo} alt="add logo" style={{"width":'100px'}}/>
                                    <p className={"text"}>Search Member</p>
                                </Link>
                            </div>

                        </Row>

                        
                        <div style={{'display':'flex','flex-direction':'row','justify-content': 'center'}}>

                            <img onClick={handleClick} className={'mb-5'} src={logoutLogo} alt="Logout" style={{"width": '75px','margin-top':'3rem','margin-right':'6rem'}}/>
                          
                            <Link to={'/'} className={'nav-link'}>
                                <img className={'mb-5'} src={home} alt="Logout" style={{"width": '75px','margin-top':'3rem','margin-left':'6rem'}}/>
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

                        <div style={{'text-align':'center'}}>
                            <h2 className={'title2 my-5'} style={{'font-size':'50px'}}>Issue Book</h2>
                            
                            {alert()}

                            <Form onSubmit={onSubmit} style={{"width":"600px",'margin':"0 auto"}}>
                                <Form.Group className="mb-3" controlId="formGroupEmail">
                                    <Form.Label className={'text'} style={{'color':'black'}}>Book ID</Form.Label>
                                    <Form.Control value={id} onChange={(e) => onChangeBookID(e.target.value)} type="text" placeholder="Enter Book ID" />
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="formGroupPassword">
                                    <Form.Label className={'text'} style={{'color':'black'}}>Book Name</Form.Label>
                                    <Form.Control value={name} onChange={(e) => onChangeName(e.target.value)} type="text" placeholder="Enter Book Name" />
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="formGroupPassword">
                                    <Form.Label className={'text'} style={{'color':'black'}}>Member NIC</Form.Label>
                                    <Form.Control value={nic} onChange={(e) => onChangeNIC(e.target.value)} type="text" placeholder="Enter Member NIC" />
                                </Form.Group>

                                <Button variant="primary" type={'submit'} className={'text'} size={'lg'} style={{'width':'150px','margin-top':'60px'}}>ISSUE</Button>
                            </Form>
                        </div>
                    </div>
                </Row>
            </div>
        );
}

