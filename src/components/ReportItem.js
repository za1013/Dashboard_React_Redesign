import React, {useState} from 'react'
import { Modal, ModalHeader, ModalBody, ModalFooter, Button } from 'reactstrap'
import ReportFormPage from '../pages/ReportFormPage'

const ReportItem = (props) => {
    
    const {no, content, updateTime, writer, target} = props

    const [toggle, setToggle] = useState(false)

    const onToggle = () => {
        setToggle(!toggle)
    }

    return (
        <>
            <tr className="table_test" onClick={onToggle}>
                <th>{no}</th>
                <th>{content}</th>
                <th>{updateTime}</th>
                <th>{writer}</th>
                <th>{target}</th>
            </tr>
            <Modal
                isOpen={toggle}
                toggle={onToggle}>
                <ModalHeader toggle={onToggle}>상세 내용</ModalHeader>
                <ModalBody>
                    <ReportFormPage {...props} />
                </ModalBody>
                    <ModalFooter>
                    <Button color="primary" onClick={onToggle}>Submit</Button>
                    <Button color="secondary" onClick={onToggle}>Cancel</Button>
                </ModalFooter>
            </Modal>
        </>
    )
}


export default ReportItem