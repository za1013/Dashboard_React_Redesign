import React from 'react';
import {
  Col,
  Form,
  FormGroup,
  Input,
  Label,
  Row,
} from 'reactstrap';

const FormPage = () => {
  return (
    <Row>

      <Col xl={12} lg={12} md={12}>
        <Form>
          <FormGroup row>
            <Label for="exampleEmail" sm={12}>
              Email
            </Label>
            <Col sm={12}>
              <Input
                type="email"
                name="email"
                placeholder="with a placeholder"
              />
            </Col>
          </FormGroup>
          <FormGroup row>
            <Label for="examplePassword" sm={12}>
              Password
            </Label>
            <Col sm={12}>
              <Input
                type="password"
                name="password"
                placeholder="password placeholder"
              />
            </Col>
          </FormGroup>
          <FormGroup row>
            <Label for="exampleText" sm={12}>
              Text Area
            </Label>
            <Col sm={12}>
              <Input type="textarea" name="text" />
            </Col>
          </FormGroup>
        </Form>
      </Col>
    </Row>
  );
};

export default FormPage;
