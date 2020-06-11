import React, {useState} from 'react'
import { Modal, ModalHeader, ModalBody, ModalFooter, Button } from "reactstrap"
import FormPage from '../pages/FormPage'

const Table_Item = ({no, title, updateTime, status}) => {

    const [toggle, setToggle] = useState(false)

    const onToggle = () => {
        setToggle(!toggle)
    }

    return (
        <>
            <tr className="table_test" onClick={onToggle} >
                <th scope="row">{no}</th>
                <th>{title}</th>
                <th>{updateTime}</th>
                <th>{status}</th>
            </tr>
            <Modal
                  isOpen={toggle}
                  toggle={onToggle}>
                <ModalHeader toggle={onToggle}>Modal title</ModalHeader>
                <ModalBody>
                    <FormPage />
                </ModalBody>
                <ModalFooter>
                <Button color="primary" onClick={onToggle}>
                    Submit
                </Button>{' '}
                <Button color="secondary" onClick={onToggle}>
                    Cancel
                </Button>
                </ModalFooter>
            </Modal>
        </>
    )
}

export default Table_Item