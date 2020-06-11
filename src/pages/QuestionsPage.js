import Page from 'components/Page';
import React, {useEffect, useState} from 'react';
import { Row, Table } from 'reactstrap';
import Axios from 'axios';

import Table_Item from '../components/Table_Item'

const TablePage = ({qsType}) => {

  const [data, setData] = useState([])

  useEffect(() => {
    Axios.get("/api/question/"+qsType)
    .then((res) => {
      setData(res.data)
    })
    .catch((error) => {
      console.log(error)
    })
  }, [])

  return (
    <Page
      title="문의사항"
      type={qsType}
      className="TablePage"
    >
    <Row className="table_style">
      <Table>
          <thead>
          <tr>
              <th className="table_head">No</th>
              <th className="table_head">Title</th>
              <th className="table_head">Update Time</th>
              <th className="table_head">Status</th>
          </tr>
          </thead>
          <tbody>

          {
              data.map((ele, index) => (
                <Table_Item key={ele.no} {...ele} /> 
              ))
          }
          
          </tbody>
      </Table>
  </Row>

    </Page>
  );
};

export default TablePage;
