import React, {Component} from "react";
import './home.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Row,Col,Navbar,Nav,Container,Form,Button} from "react-bootstrap";
import {Link} from "react-router-dom";
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
import home from "../assets/home.png";
import searchMemberLogo from "../assets/searchMember.png";


export default class Home extends Component {
    constructor(props) {
        super(props);

        this.onChangeBookID = this.onChangeBookID.bind(this);
        this.onChangeBookName = this.onChangeBookName.bind(this);
        this.onChangeAuthor = this.onChangeAuthor.bind(this);
        this.onChangeQuantity = this.onChangeQuantity.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            id: '',
            name: '',
            author: '',
            quantity: ''
        }
    }

    onChangeBookID(e) {
        this.setState({id: e.target.value});
    }
    onChangeBookName(e) {
        this.setState({name: e.target.value});
    }
    onChangeAuthor(e) {
        this.setState({author: e.target.value});
    }
    onChangeQuantity(e) {
        this.setState({quantity: e.target.value});
    }

    onSubmit(e) {
        e.preventDefault();
        const bookObject = {
            id: this.state.id,
            name: this.state.name,
            author: this.state.author,
            quantity: this.state.quantity
        }
        axios.post('http://localhost:4000/library/add-book', bookObject)
            .then(res => console.log(res.data));
        this.setState({id:'',name:'',author:'',quantity:''});
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

                        <Row>
                            <div>
                                <Link to={'/search-member'} className={'nav-link'}>
                                    <img src={searchMemberLogo} alt="add logo" style={{"width":'100px'}}/>
                                    <p className={"text"}>Search Member</p>
                                </Link>
                            </div>

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
                            <h2 className={'title2 my-5'} style={{'font-size':'50px'}}>Add Book</h2>

                            <Form style={{"width":"600px",'margin':"0 auto"}} onSubmit={this.onSubmit}>

                                <Form.Group className="mb-3" controlId="Id">
                                    <Form.Label className={'text'} style={{'color':'black'}}>Book ID</Form.Label>
                                    <Form.Control type="text" value={this.state.id} onChange={this.onChangeBookID} placeholder="Enter Book ID" />
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="Book">
                                    <Form.Label className={'text'} style={{'color':'black'}}>Book Name</Form.Label>
                                    <Form.Control type="text" value={this.state.name} onChange={this.onChangeBookName} placeholder="Enter Book Name" />
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="Author">
                                    <Form.Label className={'text'} style={{'color':'black'}}>Author Name</Form.Label>
                                    <Form.Control type="text" value={this.state.author} onChange={this.onChangeAuthor} placeholder="Enter Author Name" />
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="Quantity">
                                    <Form.Label className={'text'} style={{'color':'black'}}>Quantity</Form.Label>
                                    <Form.Control type={'text'} value={this.state.quantity} onChange={this.onChangeQuantity} placeholder="Enter Quantity" />
                                </Form.Group>
                                <Button className={'text'} size={'lg'} style={{'background-color':'#277BC0','width':'150px','margin-top':'60px'}} type='submit' block="block">ADD</Button>
                            </Form>
                        </div>
                    </div>
                </Row>
            </div>
        );
    }
}
