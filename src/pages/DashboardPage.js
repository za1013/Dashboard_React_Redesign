import Page from 'components/Page';
import AnnouncementMedia from 'components/AnnouncementMedia';
import UserProgressTable from 'components/UserProgressTable';
import { IconWidget, NumberWidget } from 'components/Widget';
import {
  announcementsData,
  userProgressTableData,
} from 'demos/dashboardPage';
import React, {useState, useEffect} from 'react';
import {
  MdPersonPin,
  MdRateReview,
  MdShare,
  MdThumbUp,
} from 'react-icons/md';
import {
  Card,
  CardBody,
  CardGroup,
  CardHeader,
  Col,
  Row,
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
} from 'reactstrap';

import AnnoFormPage from '../pages/AnnoFormPage'

import classNames from 'classnames';



const DashboardPage = () => {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [])

  const [annoData, setAnnoData] = useState(announcementsData)
  const [toggle, setToggle] = useState(false) 

  const [annoTitle, setAnnoTitle] = useState("")
  const [annoContent, setAnnoContent] = useState("")

  const onChangeAnnoTitle = (e) => {
    setAnnoTitle(e.target.value)
  }
  const onChangeAnnoContent = (e) => {
    setAnnoContent(e.target.value)
  }
  
  const onToggle = () => {
    setToggle(!toggle)
  }

  const onActive = (id) => {
    setAnnoData(annoData.map((ele) => {
      return ele.id === id ? {...ele, active:true} : {...ele, active:false}
    }))
  }

  const addAnnoData = () => {
    console.log(annoContent)
    setAnnoData([{
      id : annoData.length + 1,
      title : annoTitle,
      content : annoContent,
      active : true,
    }, ...annoData.map((ele) => ({...ele, active:false}))])
    setAnnoTitle("")
    setAnnoContent("")
    onToggle()
  }

  return (
    <Page
      className="DashboardPage"
      title="Dashboard"
      breadcrumbs={[{ name: 'Dashboard', active: true }]}
    >
      <Row>
        <Col lg={3} md={6} sm={6} xs={12}>
          <NumberWidget
            title="Total Profit"
            subtitle="This month"
            number="9.8k"
            color="secondary"
            progress={{
              value: 75,
              label: 'Last month',
            }}
          />
        </Col>

        <Col lg={3} md={6} sm={6} xs={12}>
          <NumberWidget
            title="Monthly Visitors"
            subtitle="This month"
            number="5,400"
            color="secondary"
            progress={{
              value: 45,
              label: 'Last month',
            }}
          />
        </Col>

        <Col lg={3} md={6} sm={6} xs={12}>
          <NumberWidget
            title="New Users"
            subtitle="This month"
            number="3,400"
            color="secondary"
            progress={{
              value: 90,
              label: 'Last month',
            }}
          />
        </Col>

        <Col lg={3} md={6} sm={6} xs={12}>
          <NumberWidget
            title="Bounce Rate"
            subtitle="This month"
            number="38%"
            color="secondary"
            progress={{
              value: 60,
              label: 'Last month',
            }}
          />
        </Col>
      </Row>
      <CardGroup style={{ marginBottom: '1rem' }}>
        <IconWidget
          bgColor="white"
          inverse={false}
          icon={MdThumbUp}
          title="50+ Likes"
          subtitle="People you like"
        />
        <IconWidget
          bgColor="white"
          inverse={false}
          icon={MdRateReview}
          title="10+ Reviews"
          subtitle="New Reviews"
        />
        <IconWidget
          bgColor="white"
          inverse={false}
          icon={MdShare}
          title="30+ Shares"
          subtitle="New Shares"
        />
      </CardGroup>

      <Row>
        <Col md="6" sm="12" xs="12">
          <Card>
            <CardHeader>공지사항 목록</CardHeader>
            <CardBody className={"announcement-body"}>
              {annoData.map(
                ({ id, title, content, active }) => (
                  <AnnouncementMedia
                    key={id}
                    id={id}
                    title={title}
                    content={content}
                    className={active ? classNames("announcement-media", "active") : "announcement-media"}
                    onActive={onActive}
                  />
                ),
              )}
              <div class="mr-2 ml-2 mb-2">
                <Button color="primary" size="lg" block onClick={onToggle}>Add Anno</Button>
              </div>
              <Modal
                  isOpen={toggle}
                  toggle={onToggle}>
                <ModalHeader toggle={onToggle}>공지 사항</ModalHeader>
                <ModalBody>
                    <AnnoFormPage
                      title={annoTitle}
                      content={annoContent}
                      onChangeAnnoTitle={onChangeAnnoTitle}
                      onChangeAnnoContent={onChangeAnnoContent}
                    />
                </ModalBody>
                <ModalFooter>
                <Button color="primary" onClick={addAnnoData}>
                    Submit
                </Button>{' '}
                <Button color="secondary" onClick={onToggle}>
                    Cancel
                </Button>
                </ModalFooter>
            </Modal>
            </CardBody>
          </Card>
        </Col>

        <Col md="6" sm="12" xs="12">
          <Card>
            <CardHeader>New Users</CardHeader>
            <CardBody>
              <UserProgressTable
                headers={[
                  <MdPersonPin size={25} />,
                  'name',
                  'date',
                  'participation',
                  '%',
                ]}
                usersData={userProgressTableData}
              />
            </CardBody>
          </Card>
        </Col>
      </Row>
    </Page>
  );
  
}
export default DashboardPage;
