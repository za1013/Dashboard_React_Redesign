import Page from '../components/Page'
import React, {useEffect, useState} from 'react'
import { Row, Table} from 'reactstrap'
import {reportBoard, reportComment } from '../lib/api/page'

import ReportItem from '../components/ReportItem'

const ReportPage = ({qsType}) => {

    const [data, setData] = useState([])

    useEffect(() => {

        const server = qsType === "board" ? reportBoard : reportComment

        server.then((res) => {
            setData(res.data)
        }).catch((err) => {
            console.error(err)
        })
    }, [])

    return (
        <Page
            title="신고처리"
            type={qsType==="board" ? "게시판" : "댓글"}
            className="ReportPage">
            <Row className="table_style">
                <Table>
                    <thead>
                        <tr>
                            <th className="table_head">No</th>
                            <th className="table_head">Report Content</th>
                            <th className="table_head">Update Time</th>
                            <th className="table_head">Writer</th>
                            <th className="table_head">Target</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            data.map((ele, idx) => {
                                return <ReportItem key={idx} {...ele} />
                            })
                        }
                    </tbody>
                </Table>
            </Row>
        
        
        </Page>
    )
}

export default ReportPage