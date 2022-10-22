import React, {Component} from "react";
import './home.css';
import {Row,Form,Button} from "react-bootstrap";
import axios from "axios";

import Lib from '../assets/lib.jpg';
// import {Redirect} from "react-router-dom";

export default class Signup extends Component {
    constructor(props){
        super(props);

        this.onChangeEmail = this.onChangeEmail.bind(this)
        this.onChangePassword = this.onChangePassword.bind(this)
        this.onSubmit = this.onSubmit.bind(this)

        this.state = {
            email: '',
            password: ""
        }
    }

    onChangeEmail(e){
        this.setState({email: e.target.value})
    }
    
    onChangePassword(e){
        this.setState({password: e.target.value})
    }

    onSubmit(e){
        e.preventDefault()

        const loginDetails = {
            email: this.state.email,
            password: this.state.password
        }

        axios.post('http://localhost:4000/library/login',loginDetails)
        .then(res => {
            console.log(res.data)
        })
        this.setState({email: '',password: ''})
    }

    render() {
        return(
            <div>
                <Row>
                    <div className={"col-5"} style={{'background-color':'#1C3879','height':'100vh','text-align':'center','border-bottom-right-radius':'100px'}}>
                        <h1 className={"title mt-5"}>Book Hub</h1>
                        <h2 className={"title2"} style={{'color':'#F9F5EB'}}>Library Management System</h2>

                        <img src={Lib} className={'mt-4 mb-4'} alt="Library" style={{'width':'680px','border-bottom-right-radius':'50px','border-top-left-radius':'50px'
                        ,'border':'5px solid #607EAA'}}/>

                        <h1 className={"mt-lg-5 title"}>Welcome Back!</h1>
                    </div>
                    <div className={'col-7'} >
                        <div style={{'text-align':'center'}}>
                            <h1 className={'title'} style={{'color':'#277BC0','-webkit-text-stroke': '3px #1C3879','margin-top':'50px'}}>Login</h1>
                            <h2 className={'title2 mt-5'} style={{'font-size':'50px'}}>Welcome Back! Please Login Your Account</h2>
                        </div>

                        <Form onSubmit={this.onSubmit} style={{'width':'500px','margin':'0 auto','margin-top':'60px'}}>
                            <Form.Group className="mb-3" controlId="formGroupEmail">
                                <Form.Label>Email address</Form.Label>
                                <Form.Control  value={this.state.email} onChange={this.onChangeEmail}  type="email" placeholder="Enter email" />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formGroupPassword">
                                <Form.Label>Password</Form.Label>
                                <Form.Control  value={this.state.password} onChange={this.onChangePassword}  type="password" placeholder="Password" />
                            </Form.Group>
                            <div style={{'text-align':'center'}}>
                                <Button type={'submit'} size={'lg'} style={{'background-color':'#277BC0','width':'150px','margin-top':'60px'}}>Login</Button>
                            </div>
                        </Form>
                    </div>
                </Row>
            </div>
        )
    }
}