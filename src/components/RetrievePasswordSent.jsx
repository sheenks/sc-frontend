import React, { Component, Fragment } from 'react';
import {Container, Row, Col, Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle, Button, Form, FormGroup, Input} from 'reactstrap';
import { Link } from 'react-router-dom';
import ScLogo from '../assets/images/sc-logo.png';

export default class RetrievePasswordSent extends Component {
  render(){
    return (
      <Container className="bg-gray-100">
        <Row>
          <Col sm="12" md="6" lg="4" className="mt-sm-3 mt-lg-5 mx-auto">
            
            <div className="form-user-login">
              <div className="mt-3 text-center">
                <img src={ScLogo} />
                <h3 className="mt-4 font-weight-light">Retrieve Password</h3>
              </div>
            </div>

            <Form className="card mt-3 shadow py-3 px-3">
              <div className="card-body">
                  <p class="text-center text-info"><i class="fas fa-check-circle fa-7x"></i></p>
                  <p class="text-center "><span class="font-weight-bold">Help is on the way!</span><br />Please check your email for instructions on how to reset your password</p>

                <FormGroup>
                  <Link to="login.html" className="btn btn-primary btn-block">Return to Log In</Link>
                </FormGroup>

              </div>
            </Form>

            <p className="copyright text-center mt-3">&copy; 2018 Swim Central. All rights reserved.</p>

          </Col>
        </Row>
      </Container>
    );
  }
}