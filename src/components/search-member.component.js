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

export default class SearchMember extends Component {

    constructor(props) {
        super(props);

        this.onChangeNIC = this.onChangeNIC.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.state = {
            nic: '',
            memberDetails: {},
            flag: false
        }
    }

    onChangeNIC(e){
        this.setState({nic: e.target.value});
    }

    onSubmit(e){
        e.preventDefault();
        axios.get('http://localhost:4000/library/search-member/'+this.state.nic)
            .then(res => {
                this.setState({
                   memberDetails: res.data
                });
                this.setState({
                    flag:true
                })
            }).catch((error) => {
            console.log("Error")
        });
    }

    tableData(){
        if(this.state.flag){
            return (
                <div style={{'text-align':'center'}}>
                    <h2 className={'title2 mt-5'}>Search Results</h2>
                    <hr style={{"border-top": "6px dotted red"}}/>
                    <table className="table table-striped">
                        <thead>
                        <tr>
                            <th scope="col">NIC Number</th>
                            <th scope="col">Name</th>
                            <th scope="col">Email</th>
                            <th scope="col">Gender</th>
                            <th scope="col">Home Address</th>
                            <th scope="col">Contact Number</th>
                            <th></th>
                        </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>{this.state.memberDetails.nic}</td>
                                <td>{this.state.memberDetails.name}</td>
                                <td>{this.state.memberDetails.email}</td>
                                <td>{this.state.memberDetails.gender}</td>
                                <td>{this.state.memberDetails.address}</td>
                                <td>{this.state.memberDetails.contact}</td>
                                <td style={{'display':'flex','flex-direction':'row'}}>
                                    <Link to={'/edit-member'} className={'nav-link'}>
                                        <Button className={'text'} style={{'background-color':'#277BC0'}}>Edit</Button>
                                    </Link>
                                    <Button className={'text'} style={{'background-color':'#277BC0','margin-left':'3px'}}>Del</Button>
                                </td>

                            </tr>
                        </tbody>
                    </table>
                </div>

            );
        }else{
            return <div></div>;
        }
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
                            <h2 className={'title2 my-5'} style={{'font-size':'50px'}}>Search Member</h2>
                            <Form onSubmit={this.onSubmit} style={{"width":"600px",'margin':"0 auto"}}>
                                <Form.Group className="mb-3" controlId="formGroupBook">
                                    <Form.Label className={'text'} style={{'color':'black'}}> NIC Number of The Member</Form.Label>
                                    <Form.Control value={this.state.nic} onChange={this.onChangeNIC} type="text" placeholder="Enter NIC" />
                                </Form.Group>
                                <Button type={'submit'} className={'text'} size={'lg'} style={{'background-color':'#277BC0','width':'150px','margin-top':'60px'}}>SEARCH</Button>
                            </Form>
                        </div>

                        {this.tableData()}
                    </div>
                </Row>
            </div>
        );
    }
}
