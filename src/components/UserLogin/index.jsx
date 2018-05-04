import React, { Component, Fragment } from 'react';
import {Container, Row, Col, Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle, Button, Form, FormGroup, Input} from 'reactstrap';
import { Link } from 'react-router-dom';
import ScLogo from '../../assets/images/sc-logo.png';

export default class UserLogin extends Component {
  render(){
    return (
      <Container className="bg-gray-100">
        <Row>
          <Col sm="12" md="6" lg="4" className="mt-sm-3 mt-lg-5 mx-auto">
            
            <div className="form-user-login">
              <div className="mt-3 text-center">
                <img src={ScLogo} />
                <h3 className="mt-4 font-weight-light">Sign in to Swim Central</h3>
              </div>
            </div>

            <Form className="card mt-3 shadow py-3 px-3">
              <div className="card-body">
                <FormGroup>
                  <Input type="email" name="email" id="email" placeholder="Email" />
                </FormGroup>
                <FormGroup>
                  <Input type="password" name="password" id="password" placeholder="Password" />
                  <p className="text-right mt-2 mb-4"><Link to="/">Forgot Password?</Link></p>
                </FormGroup>
                <Link to="/" className="btn btn-success btn-block">Sign In</Link>

                {/*<Link href="dashboard.html" className="btn btn-success btn-block">Sign in</Link>*/}
                {/*<Button color="success">primary</Button>*/}
              </div>
            </Form>

            <Card className="mt-4 bg-black-50 border border-gray-300">
              <CardBody className="text-center">
                  New to <span className="font-weight-bold">Swim Central</span>? <Link to="/" className="card-link font-weight-bold">Create an account</Link>.
              </CardBody>
              
            </Card>
            <p className="copyright text-center mt-3">&copy; 2018 Swim Central. All rights reserved.</p>

          </Col>
        </Row>
      </Container>
    );
  }
}
