
import React from "react";
import classnames from "classnames";
// javascript plugin used to create scrollbars on windows
import PerfectScrollbar from "perfect-scrollbar";
// reactstrap components
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  Label,
  FormGroup,
  Form,
  Input,
  FormText,
  NavItem,
  NavLink,
  Nav,
  Table,
  TabContent,
  TabPane,
  Container,
  Row,
  Col,
  UncontrolledTooltip,
  UncontrolledCarousel,
} from "reactstrap";

// core components
import ExamplesNavbar from "components/Navbars/ExamplesNavbar.js";
import Footer from "components/Footer/Footer.js";
import { changeuser } from "store/user/action";
import { connect, useSelector } from "react-redux";
import { getUser } from "store/user/reducer";

const mapStateToProps = state => {
  return {
    // user: state.userReducer.user
    user: getUser(state)
  }
}

const carouselItems = [
  {
    src: require("assets/img/lsv2.jpg").default,
    altText: "Slide 1",
    caption: "LSV TEACH SAS",
  },
  {
    src: require("assets/img/lsv3.jpg").default,
    altText: "Slide 2",
    caption: "LSV TEACH SAS",
  },
  {
    src: require("assets/img/lsv4.jpg").default,
    altText: "Slide 3",
    caption: "LSV TEACH SAS",
  },
];

let ps = null;

function ProfilePage({ user }) {
  // const ProfilePage = ({ user }) => {
  if (!user.Name) {
    window.location.href = "#/";
  }
  // const nameuser=useSelector(store=>store.userReducer.user)
  const [tabs, setTabs] = React.useState(1);
  React.useEffect(() => {
    if (navigator.platform.indexOf("Win") > -1) {
      document.documentElement.className += " perfect-scrollbar-on";
      document.documentElement.classList.remove("perfect-scrollbar-off");
      let tables = document.querySelectorAll(".table-responsive");
      for (let i = 0; i < tables.length; i++) {
        ps = new PerfectScrollbar(tables[i]);
      }
    }
    document.body.classList.toggle("profile-page");
    // Specify how to clean up after this effect:
    return function cleanup() {
      if (navigator.platform.indexOf("Win") > -1) {
        ps.destroy();
        document.documentElement.className += " perfect-scrollbar-off";
        document.documentElement.classList.remove("perfect-scrollbar-on");
      }
      document.body.classList.toggle("profile-page");
    };
  }, []);
  return (
    <>
      <ExamplesNavbar />
      <div className="wrapper">
        <div className="page-header">
          <img
            alt="..."
            className="dots"
            src={require("assets/img/dots.png").default}
          />
          <img
            alt="..."
            className="path"
            src={require("assets/img/path4.png").default}
          />
          <Container className="align-items-center">
            <Row>
              <Col lg="6" md="6">
                <h1 className="profile-title text-left">{user.Name}</h1>
                <h5 className="text-on-back">LSV</h5>
                <p className="profile-description">
                  {"Hola " + user.Name + " " + user.LastName + ", bienvenido a nuestra plataforma, su identificacion es " + user.TypeDocument+". " +user.Document}
                </p>

              </Col>
              <Col className="ml-auto mr-auto" lg="4" md="6">
                
                <Card className="card-coin card-plain">
                  <CardHeader>
                    <img
                      alt="..."
                      className="img-center img-fluid rounded-circle"
                      src={require("assets/img/james.jpg").default}
                    />
                    <h4 className="title">{"Bienvenido " + user.Name}</h4>
                  </CardHeader>
                  <CardBody>
                    <Nav
                      className="nav-tabs-primary justify-content-center"
                      tabs
                    >
                      <NavItem>
                        <NavLink
                          className={classnames({
                            active: tabs === 1,
                          })}
                          onClick={(e) => {
                            e.preventDefault();
                            setTabs(1);
                          }}
                          href="#pablo"
                        >
                          Info
                        </NavLink>
                      </NavItem>

                      <NavItem>
                        <NavLink
                          className={classnames({
                            active: tabs === 3,
                          })}
                          onClick={(e) => {
                            e.preventDefault();
                            setTabs(3);
                          }}
                          href="#pablo"
                        >
                          News
                        </NavLink>
                      </NavItem>
                    </Nav>
                    <TabContent
                      className="tab-subcategories"
                      activeTab={"tab" + tabs}
                    >
                      <TabPane tabId="tab1">
                        <Table className="tablesorter" responsive>

                          <tbody>
                            <tr>
                              <th>{user.TypeDocument}</th>
                              <td>{user.Document}</td>
                            </tr>
                            <tr>
                              <th>Name</th>
                              <td>{user.Name}</td>
                            </tr>
                            <tr>
                              <th>LastName</th>
                              <td>{user.LastName}</td>
                            </tr>
                          </tbody>
                        </Table>
                      </TabPane>
                      <TabPane tabId="tab2">
                        <Row>
                          <Label sm="3">Pay to</Label>
                          <Col sm="9">
                            <FormGroup>
                              <Input
                                placeholder="e.g. 1Nasd92348hU984353hfid"
                                type="text"
                              />
                              <FormText color="default" tag="span">
                                Please enter a valid address.
                              </FormText>
                            </FormGroup>
                          </Col>
                        </Row>
                        <Row>
                          <Label sm="3">Amount</Label>
                          <Col sm="9">
                            <FormGroup>
                              <Input placeholder="1.587" type="text" />
                            </FormGroup>
                          </Col>
                        </Row>
                        <Button
                          className="btn-simple btn-icon btn-round float-right"
                          color="primary"
                          type="submit"
                        >
                          <i className="tim-icons icon-send" />
                        </Button>
                      </TabPane>
                      <TabPane tabId="tab3">
                        <Table className="tablesorter" responsive>
                          <thead className="text-primary">
                            <tr>
                              <th className="header">LSV TECH</th>
                            </tr>
                          </thead>
                          <tbody>
                           <p>
                             Esto es una prueba tecnica para la empresa LSV TECH SAS
                           </p>
                          </tbody>
                        </Table>
                      </TabPane>
                    </TabContent>
                  </CardBody>
                </Card>
              </Col>
            </Row>
          </Container>
        </div>
        <div className="section">
          <Container>
            <Row className="justify-content-between">
              <Col md="6">
                <Row className="justify-content-between align-items-center">
                  <UncontrolledCarousel items={carouselItems} />
                </Row>
              </Col>
              <Col md="5">
                <h1 className="profile-title text-left">TEACH SAS</h1>
                <h5 className="text-on-back">LSV</h5>
                <p className="profile-description text-left">
                  Esto es una prueba tecnica de frontend paraa la empresa LSV TEACH SAS
                </p>
              </Col>
            </Row>
          </Container>
        </div>
        
        <Footer />
      </div>
    </>
  );
}

export default connect(mapStateToProps)(ProfilePage);