import React from 'react'
import {
    Col,
    Form,
    FormGroup,
    Input,
    Label,
    Row,
  } from 'reactstrap';
  import PropTypes from 'utils/propTypes';


  const ReportFormPage = ({writer, target, content}) => {
    return (
      <Row>
  
        <Col xl={12} lg={12} md={12}>
          <Form>
            <FormGroup row>
              <Label for="report_detail_writer" sm={12}>
                Writer
              </Label>
              <Col sm={12}>
                <Input
                  name="report_writer"
                  value={writer}
                  disabled
                />
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label for="report_detail_target" sm={12}>
                Target
              </Label>
              <Col sm={12}>
                <Input
                  name="report_detail_target"
                  value={target}
                  disabled
                />
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label for="report_detail_content" sm={12}>
                Report Content
              </Label>
              <Col sm={12}>
                <Input type="textarea" name="report_detail_content" value={content} disabled />
              </Col>
            </FormGroup>
            <FormGroup>
                  <Label for="report_detail_grade">Target Grade</Label>
                  <Input type="select" name="report_detail_grade">
                    <option>사용 중</option>
                    <option>경고 단계</option>
                    <option>제재 단계</option>
                    <option>일시 정지</option>
                    <option>영구 정지</option>
                  </Input>
                </FormGroup>
          </Form>
        </Col>
      </Row>
    );
  };

ReportFormPage.propTypes = {
  writer: PropTypes.string,
  target: PropTypes.string,  
}

ReportFormPage.defaultProps = {
  writer: "Test Writer",
  target: "Test Target",
  content:  "Test Content",
}
  
  export default ReportFormPage;