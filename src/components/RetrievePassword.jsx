import React, { Component, Fragment } from 'react';
import {Container, Row, Col, Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle, Button, Form, FormGroup, Input} from 'reactstrap';
import { Link } from 'react-router-dom';
import ScLogo from '../assets/images/sc-logo.png';

export default class RetrievePassword extends Component {
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
                <p>Enter your email address below and we'll get you back on track.</p>

                <FormGroup>
                  <Input type="email" name="email" id="email" placeholder="Email" />
                </FormGroup>

                <Link to="/" className="btn btn-success btn-block">Request reset link</Link>

                <hr className="hr-text" data-content="OR" />

                <p>Have trouble remembering your Swim Central password? Log in with Facebook now and you'll never have to</p>

                <Link to="/" className="btn btn-info btn-facebook btn-block">Log in using facebook</Link>



              </div>
            </Form>

            <Card className="mt-4 bg-black-50 border border-gray-300">
              <CardBody className="text-center">
                  <Link to="/" className="card-link font-weight-bold">Back to Log In</Link>.
              </CardBody>
              
            </Card>
            <p className="copyright text-center mt-3">&copy; 2018 Swim Central. All rights reserved.</p>

          </Col>
        </Row>
      </Container>
    );
  }
}