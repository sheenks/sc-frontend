import React, { Component, Fragment } from 'react';
import {Container, Row, Col, Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle, Button, Form, FormGroup, Input} from 'reactstrap';
import { Link } from 'react-router-dom';
import ScLogo from '../assets/images/sc-logo.png';

export default class Register extends Component {
  render(){
    return (
      <Container className="bg-gray-100">
        <Row>
          <Col sm="12" md="6" lg="4" className="mt-sm-3 mt-lg-5 mx-auto">
            
            <div className="form-user-login">
              <div className="mt-3 text-center">
                <img src={ScLogo} />
                <h3 className="mt-4 font-weight-light">Join Swim Central</h3>
              </div>
            </div>

            <Form className="card mt-3 shadow py-3 px-3">
              <div className="card-body">
                <FormGroup>
                  <Input type="firstName" name="firstName" id="firstName" placeholder="First Name" />
                </FormGroup>
                <FormGroup>
                  <Input type="lastName" name="lastName" id="lastName" placeholder="Last Name" />
                </FormGroup>
                <FormGroup>
                  <Input type="email" name="email" id="email" placeholder="Email" />
                </FormGroup>
                <FormGroup>
                  <Input type="password" name="password" id="password" placeholder="Password" />
                </FormGroup>
                <FormGroup>
                  <Input type="confirmpassword" name="confirmpassword" id="confirmpassword" placeholder="Confirm Password" />
                </FormGroup>
                <Link to="/" className="btn btn-success btn-block">Create an account</Link>
                
                <hr class="hr-text" data-content="OR" />

                <Link to="/" className="btn btn-info btn-facebook btn-block">Sign up using facebook</Link>

                <p className="mt-3 mb-0 text-center">By creating an account, you agree to Swim Central's <Link to="/">Terms and Conditions</Link> and <Link to="/">Waiver</Link>.</p>


              </div>
            </Form>

            <Card className="mt-4 bg-black-50 border border-gray-300">
              <CardBody className="text-center">
                  Already have an account? <Link to="/" class="card-link font-weight-bold">Log in</Link>.
              </CardBody>
              
            </Card>
            <p className="copyright text-center mt-3">&copy; 2018 Swim Central. All rights reserved.</p>

          </Col>
        </Row>
      </Container>
    );
  }
}
