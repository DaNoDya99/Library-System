import React, {Component} from "react";
import './home.css';
import {Row,Form,Button} from "react-bootstrap";

import Lib from '../assets/lib.jpg';


export default class Signup extends Component {
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

                        <Form style={{'width':'500px','margin-left':'100px','margin-top':'60px'}}>
                            <Form.Group className="mb-3" controlId="formGroupEmail">
                                <Form.Label>Email address</Form.Label>
                                <Form.Control type="email" placeholder="Enter email" />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formGroupPassword">
                                <Form.Label>Password</Form.Label>
                                <Form.Control type="password" placeholder="Password" />
                            </Form.Group>
                        </Form>

                        <div style={{'text-align':'center'}}>
                            <Button size={'lg'} style={{'background-color':'#277BC0','width':'150px','margin-top':'60px'}}>Login</Button>
                        </div>
                    </div>
                </Row>
            </div>
        )
    }
}