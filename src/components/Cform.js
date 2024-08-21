import React from 'react';
import { Card, Form, Button, Row, Col } from '@themesberg/react-bootstrap';

export const CandidateForm = () => {
  return (
    <Card border="light" className="bg-white shadow-sm mb-4">
      <Card.Body>
        <h5 className="mb-4">Candidate Details</h5>
        <Form>
          <Row>
            <Col md={6} className="mb-3">
              <Form.Group id="serialNumber">
                <Form.Label>S.No</Form.Label>
                <Form.Control required type="text" placeholder="Enter S.No" />
              </Form.Group>
            </Col>
            <Col md={6} className="mb-3">
              <Form.Group id="contactPersonName">
                <Form.Label>Contact Person Name</Form.Label>
                <Form.Control required type="text" placeholder="Enter Contact Person Name" />
              </Form.Group>
            </Col>
          </Row>
          <Row>
            <Col md={6} className="mb-3">
              <Form.Group id="contactPersonMobile">
                <Form.Label>Contact Person Mobile</Form.Label>
                <Form.Control required type="tel" placeholder="Enter Contact Person Mobile" />
              </Form.Group>
            </Col>
            <Col md={6} className="mb-3">
              <Form.Group id="contactPersonEmail">
                <Form.Label>Contact Person Email</Form.Label>
                <Form.Control required type="email" placeholder="Enter Contact Person Email" />
              </Form.Group>
            </Col>
          </Row>
          <Row>
            <Col md={6} className="mb-3">
              <Form.Group id="gender">
                <Form.Label>Gender</Form.Label>
                <Form.Control as="select" required>
                  <option value="">Select Gender</option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                  <option value="other">Other</option>
                </Form.Control>
              </Form.Group>
            </Col>
            <Col md={6} className="mb-3">
              <Form.Group id="state">
                <Form.Label>State</Form.Label>
                <Form.Control required type="text" placeholder="Enter State" />
              </Form.Group>
            </Col>
          </Row>
          <Row>
            <Col md={6} className="mb-3">
              <Form.Group id="city">
                <Form.Label>City</Form.Label>
                <Form.Control required type="text" placeholder="Enter City" />
              </Form.Group>
            </Col>
            <Col md={6} className="mb-3">
              <Form.Group id="dob">
                <Form.Label>Date of Birth</Form.Label>
                <Form.Control required type="date" />
              </Form.Group>
            </Col>
          </Row>

          <h5 className="mt-4">Post Graduation Details</h5>
          <Row>
            <Col md={6} className="mb-3">
              <Form.Group id="pgApplyYear">
                <Form.Label>Apply Year</Form.Label>
                <Form.Control required type="text" placeholder="Enter Post Graduation Apply Year" />
              </Form.Group>
            </Col>
            <Col md={6} className="mb-3">
              <Form.Group id="pgPassingYear">
                <Form.Label>Passing Year</Form.Label>
                <Form.Control required type="text" placeholder="Enter Post Graduation Passing Year" />
              </Form.Group>
            </Col>
          </Row>
          <Row>
            <Col md={6} className="mb-3">
              <Form.Group id="pgPercentage">
                <Form.Label>Percentage</Form.Label>
                <Form.Control required type="text" placeholder="Enter Post Graduation Percentage" />
              </Form.Group>
            </Col>
            <Col md={6} className="mb-3">
              <Form.Group id="pgUniversityName">
                <Form.Label>University Name</Form.Label>
                <Form.Control required type="text" placeholder="Enter Post Graduation University Name" />
              </Form.Group>
            </Col>
          </Row>
          <Row>
            <Col md={12} className="mb-3">
              <Form.Group id="pgSubject">
                <Form.Label>Subject (Course Name)</Form.Label>
                <Form.Control required type="text" placeholder="Enter Post Graduation Subject (Course Name)" />
              </Form.Group>
            </Col>
          </Row>

          <h5 className="mt-4">Graduation Details</h5>
          <Row>
            <Col md={6} className="mb-3">
              <Form.Group id="gradApplyYear">
                <Form.Label>Apply Year</Form.Label>
                <Form.Control required type="text" placeholder="Enter Graduation Apply Year" />
              </Form.Group>
            </Col>
            <Col md={6} className="mb-3">
              <Form.Group id="gradPassingYear">
                <Form.Label>Passing Year</Form.Label>
                <Form.Control required type="text" placeholder="Enter Graduation Passing Year" />
              </Form.Group>
            </Col>
          </Row>
          <Row>
            <Col md={6} className="mb-3">
              <Form.Group id="gradPercentage">
                <Form.Label>Percentage</Form.Label>
                <Form.Control required type="text" placeholder="Enter Graduation Percentage" />
              </Form.Group>
            </Col>
            <Col md={6} className="mb-3">
              <Form.Group id="gradUniversityName">
                <Form.Label>University Name</Form.Label>
                <Form.Control required type="text" placeholder="Enter Graduation University Name" />
              </Form.Group>
            </Col>
          </Row>
          <Row>
            <Col md={12} className="mb-3">
              <Form.Group id="gradSubject">
                <Form.Label>Subject (Course Name)</Form.Label>
                <Form.Control required type="text" placeholder="Enter Graduation Subject (Course Name)" />
              </Form.Group>
            </Col>
          </Row>

          <h5 className="mt-4">12th Details</h5>
          <Row>
            <Col md={6} className="mb-3">
              <Form.Group id="twelfthPassingYear">
                <Form.Label>Passing Year</Form.Label>
                <Form.Control required type="text" placeholder="Enter 12th Passing Year" />
              </Form.Group>
            </Col>
            <Col md={6} className="mb-3">
              <Form.Group id="twelfthPercentage">
                <Form.Label>Percentage</Form.Label>
                <Form.Control required type="text" placeholder="Enter 12th Percentage" />
              </Form.Group>
            </Col>
          </Row>
          <Row>
            <Col md={6} className="mb-3">
              <Form.Group id="twelfthBoard">
                <Form.Label>University/Board</Form.Label>
                <Form.Control required type="text" placeholder="Enter 12th University/Board" />
              </Form.Group>
            </Col>
            <Col md={6} className="mb-3">
              <Form.Group id="twelfthSubject">
                <Form.Label>Subject</Form.Label>
                <Form.Control required type="text" placeholder="Enter 12th Subject" />
              </Form.Group>
            </Col>
          </Row>
          <Row>
            <Col md={12} className="mb-3">
              <Form.Group id="twelfthSchoolName">
                <Form.Label>School Name</Form.Label>
                <Form.Control required type="text" placeholder="Enter 12th School Name" />
              </Form.Group>
            </Col>
          </Row>

          <h5 className="mt-4">10th Details</h5>
          <Row>
            <Col md={6} className="mb-3">
              <Form.Group id="tenthPassingYear">
                <Form.Label>Passing Year</Form.Label>
                <Form.Control required type="text" placeholder="Enter 10th Passing Year" />
              </Form.Group>
            </Col>
            <Col md={6} className="mb-3">
              <Form.Group id="tenthPercentage">
                <Form.Label>Percentage</Form.Label>
                <Form.Control required type="text" placeholder="Enter 10th Percentage" />
              </Form.Group>
            </Col>
          </Row>
          <Row>
            <Col md={6} className="mb-3">
              <Form.Group id="tenthBoard">
                <Form.Label>University/Board</Form.Label>
                <Form.Control required type="text" placeholder="Enter 10th University/Board" />
              </Form.Group>
            </Col>
            <Col md={6} className="mb-3">
              <Form.Group id="tenthSchoolName">
                <Form.Label>School Name</Form.Label>
                <Form.Control required type="text" placeholder="Enter 10th School Name" />
              </Form.Group>
            </Col>
          </Row>

          <h5 className="mt-4">Additional Information</h5>
          <Row>
            <Col md={6} className="mb-3">
              <Form.Group id="twoWheeler">
                <Form.Label>Two Wheeler Available</Form.Label>
                <Form.Control as="select" required>
                  <option value="">Select Option</option>
                  <option value="yes">Yes</option>
                  <option value="no">No</option>
                </Form.Control>
              </Form.Group>
            </Col>
            <Col md={6} className="mb-3">
              <Form.Group id="drivingLicense">
                <Form.Label>Driving License</Form.Label>
                <Form.Control as="select" required>
                  <option value="">Select Option</option>
                  <option value="yes">Yes</option>
                  <option value="no">No</option>
                </Form.Control>
              </Form.Group>
            </Col>
          </Row>

          <div className="mt-3">
            <Button variant="primary" type="submit">Submit Candidate Details</Button>
          </div>
        </Form>
      </Card.Body>
    </Card>
  );
};
