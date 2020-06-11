import React from 'react';
import {
  Col,
  Form,
  FormGroup,
  Input,
  Label,
  Row,
} from 'reactstrap';

const AnnoFormPage = ({title, content, onChangeAnnoTitle, onChangeAnnoContent}) => {
  return (
    <Row>

      <Col xl={12} lg={12} md={12}>
        <Form>
          <FormGroup row>
            <Label for="title" sm={12}>
              Title
            </Label>
            <Col sm={12}>
              <Input
                name="title"
                placeholder="input title..."
                value={title}
                onChange={onChangeAnnoTitle}
              />
            </Col>
          </FormGroup>
          <FormGroup row>
            <Label for="contentArea" sm={12}>
              Content Area
            </Label>
            <Col sm={12}>
              <Input
                type="textarea"
                name="contentArea"
                value={content}
                placeholder="input content..."
                onChange={onChangeAnnoContent}
                />
            </Col>
          </FormGroup>
        </Form>
      </Col>
    </Row>
  );
};

export default AnnoFormPage;
