import Page from 'components/Page';
import React from 'react';
import {
  Button,
  Card,
  CardBody,
  CardHeader,
  Col,
  Modal,
  ModalBody,
  ModalFooter,
  ModalHeader,
  Row,
} from 'reactstrap';

import FormPage from './FormPage'

class ModalPage extends React.Component {
  state = {
    modal: false,
    modal_backdrop: false,
    modal_nested_parent: false,
    modal_nested: false,
    backdrop: true,
  };

  toggle = modalType => () => {
    if (!modalType) {
      return this.setState({
        modal: !this.state.modal,
      });
    }

    this.setState({
      [`modal_${modalType}`]: !this.state[`modal_${modalType}`],
    });
  };

  render() {
    return (
      <Page title="Modals" breadcrumbs={[{ name: 'modals', active: true }]}>
        <Row>
          <Col md="12" sm="12" xs="12">
            <Card>
              <CardHeader>Modal</CardHeader>
              <CardBody>
                <Button onClick={this.toggle()}>Launch Modal</Button>
                <Modal
                  isOpen={this.state.modal}
                  toggle={this.toggle()}
                  className={this.props.className}>
                  <ModalHeader toggle={this.toggle()}>Modal title</ModalHeader>
                  <ModalBody>
                    <FormPage />
                  </ModalBody>
                  <ModalFooter>
                    <Button color="primary" onClick={this.toggle()}>
                      Do Something
                    </Button>{' '}
                    <Button color="secondary" onClick={this.toggle()}>
                      Cancel
                    </Button>
                  </ModalFooter>
                </Modal>
              </CardBody>
            </Card>
          </Col>

          
        </Row>
      </Page>
    );
  }
}

export default ModalPage;
