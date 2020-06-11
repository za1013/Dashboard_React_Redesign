import Page from 'components/Page';
import React from 'react';
import { Card, CardBody, CardHeader, Col, Row, Table } from 'reactstrap';

const testData = [
  {
    no: 1,
    title: "게시글 신고 정보 입니다.",
    updateTime: "2020-05-27",
    status: "처리완료",
  },
  {
    no: 2,
    title: "게시글 신고 정보 입니다.",
    updateTime: "2020-05-27",
    status: "처리완료",
  },
  {
    no: 3,
    title: "게시글 신고 정보 입니다.",
    updateTime: "2020-05-27",
    status: "처리중",
  },
  {
    no: 4,
    title: "제목은 고정 (Client 에서 안받음)",
    updateTime: "2020-05-26",
    status: "처리중",
  },
]


const TablePage = () => {
  return (
    <Page
      title="게시글 신고 목록"
      breadcrumbs={[{ name: 'tables', active: true }]}
      className="TablePage"
    >
      <Row>
        <Col>
          <Card className="mb-3">
            <CardHeader>{'default'}</CardHeader>
            <CardBody>
              <Row>
                <Table>
                  <thead>
                    <tr>
                      <th>No</th>
                      <th>Title</th>
                      <th>Update Time</th>
                      <th>Status</th>
                    </tr>
                  </thead>
                  <tbody>

                    {
                      testData.map(({no, title, updateTime, status}, index) => (
                        <tr key={index} className="table_test">
                          <th scope="row">{no}</th>
                          <th>{title}</th>
                          <th>{updateTime}</th>
                          <th>{status}</th>
                        </tr>
                      ))
                    }
                    
                  </tbody>
                </Table>

                
              </Row>
            </CardBody>
          </Card>
        </Col>
      </Row>


    </Page>
  );
};

export default TablePage;
