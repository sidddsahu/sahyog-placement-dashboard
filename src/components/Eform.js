import React from "react";
import { Col, Row, Card, Form, Button } from '@themesberg/react-bootstrap';

export const EmployerRegistrationForm = () => {
  return (
    <Card border="light" className="bg-white shadow-sm mb-4">
      <Card.Body>
        <h5 className="mb-4">Company Registration</h5>
        <Form>
          <Row>
            <Col md={6} className="mb-3">
              <Form.Group id="companyName">
                <Form.Label>Company Name</Form.Label>
                <Form.Control required type="text" placeholder="Enter your company name" />
              </Form.Group>
            </Col>
            <Col md={6} className="mb-3">
              <Form.Group id="website">
                <Form.Label>Website</Form.Label>
                <Form.Control required type="url" placeholder="Enter your company website" />
              </Form.Group>
            </Col>
          </Row>
          <Row>
            <Col md={6} className="mb-3">
              <Form.Group id="contactPersonName">
                <Form.Label>Contact Person Name</Form.Label>
                <Form.Control required type="text" placeholder="Enter contact person's name" />
              </Form.Group>
            </Col>
            <Col md={6} className="mb-3">
              <Form.Group id="contactPersonMobile">
                <Form.Label>Contact Person Mobile</Form.Label>
                <Form.Control required type="tel" placeholder="Enter contact person's mobile" />
              </Form.Group>
            </Col>
          </Row>
          <Row>
            <Col md={6} className="mb-3">
              <Form.Group id="contactPersonEmail">
                <Form.Label>Contact Person Email</Form.Label>
                <Form.Control required type="email" placeholder="Enter contact person's email" />
              </Form.Group>
            </Col>
            <Col md={6} className="mb-3">
              <Form.Group id="address">
                <Form.Label>Address</Form.Label>
                <Form.Control required type="text" placeholder="Enter your company address" />
              </Form.Group>
            </Col>
          </Row>
          <Row>
            <Col md={6} className="mb-3">
              <Form.Group id="city">
                <Form.Label>City</Form.Label>
                <Form.Control required type="text" placeholder="Enter your city" />
              </Form.Group>
            </Col>
            <Col md={6} className="mb-3">
              <Form.Group id="industry">
                <Form.Label>Industry</Form.Label>
                <Form.Control required type="text" placeholder="Enter your industry" />
              </Form.Group>
            </Col>
          </Row>
          <div className="mt-3">
            <Button variant="primary" type="submit">Register Company</Button>
          </div>
        </Form>
      </Card.Body>
    </Card>
  );
};
