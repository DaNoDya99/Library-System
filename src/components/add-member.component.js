import React, {Component} from "react";
import axios from "axios";
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
import home from "../assets/home.png";

export default class Home extends Component {

    constructor(props) {
        super(props);

        this.onChangeNIC = this.onChangeNIC.bind(this);
        this.onChangeName = this.onChangeName.bind(this);
        this.onChangeEmail = this.onChangeEmail.bind(this);
        this.onChangeGender = this.onChangeGender.bind(this);
        this.onChangeAddress = this.onChangeAddress.bind(this);
        this.onChangeContact = this.onChangeContact.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            nic: '',
            name: '',
            email: '',
            gender: '',
            address: '',
            contact: ''
        }
    }
    onChangeNIC(e){
        this.setState({nic: e.target.value})
    }
    onChangeName(e){
        this.setState({name: e.target.value})
    }
    onChangeEmail(e){
        this.setState({email: e.target.value})
    }
    onChangeGender(e){
        this.setState({gender: e.target.value})
    }
    onChangeAddress(e){
        this.setState({address: e.target.value})
    }
    onChangeContact(e){
        this.setState({contact: e.target.value})
    }

    onSubmit(e){
        e.preventDefault()
        const memberObject = {
            nic: this.state.nic,
            name: this.state.name,
            email: this.state.email,
            gender: this.state.gender,
            address: this.state.address,
            contact: this.state.contact
        };
        axios.post('http://localhost:4000/library/add-member', memberObject)
            .then(res => console.log(res.data));
        this.setState({nic: '', name: '', email: '', gender: '', address: '', contact: ''});
    }

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
                        <div style={{'display':'flex','flex-direction':'row','justify-content': 'center'}}>
                            <Link to={'login'} className={'nav-link'}>
                                <img className={'mb-5'} src={logoutLogo} alt="Logout" style={{"width": '75px','margin-top':'6rem','margin-right':'6rem'}}/>
                            </Link>
                            <Link to={'/'} className={'nav-link'}>
                                <img className={'mb-5'} src={home} alt="Logout" style={{"width": '75px','margin-top':'6rem','margin-left':'6rem'}}/>
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
                            <h2 className={'title2 my-3'} style={{'font-size':'50px'}}>Add Member</h2>

                            <Form onSubmit={this.onSubmit} style={{"width":"600px",'margin':"0 auto"}}>
                                <Form.Group className="mb-3" controlId="NIC">
                                    <Form.Label className={'text'} style={{'color':'black'}}>NIC Number</Form.Label>
                                    <Form.Control type="text" value={this.state.nic} onChange={this.onChangeNIC} placeholder="Enter NIC Number"/>
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="Name">
                                    <Form.Label className={'text'} style={{'color':'black'}}>Name</Form.Label>
                                    <Form.Control type="text" value={this.state.name} onChange={this.onChangeName} placeholder="Enter Name" />
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="Email">
                                    <Form.Label className={'text'} style={{'color':'black'}}>Email</Form.Label>
                                    <Form.Control type="email" value={this.state.email} onChange={this.onChangeEmail} placeholder="Enter Email" />
                                </Form.Group>

                                <Form.Group className={"mb-3"} controlId="Gender">
                                    <Form.Label className={'text'} style={{'color':'black'}}>Gender</Form.Label>
                                    <Form.Select value={this.state.gender} onChange={this.onChangeGender} aria-label="Default select example" >
                                        <option>--- Select Gender ---</option>
                                        <option value="Male">Male</option>
                                        <option value="Female">Female</option>
                                    </Form.Select>
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="Adress">
                                    <Form.Label className={'text'} style={{'color':'black'}}>Home Address</Form.Label>
                                    <Form.Control type="text" value={this.state.address} onChange={this.onChangeAddress} placeholder="Enter Home Address" />
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="Contact">
                                    <Form.Label className={'text'} style={{'color':'black'}}>Contact Number</Form.Label>
                                    <Form.Control value={this.state.contact} onChange={this.onChangeContact} type="text" placeholder="Enter Contact Number" />
                                </Form.Group>

                                <Button className={'text'} type="submit" size={'lg'} style={{'background-color':'#277BC0','width':'150px','margin-top':'30px'}} block="block">ADD</Button>
                            </Form>


                        </div>
                    </div>
                </Row>
            </div>
        );
    }
}
