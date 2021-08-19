
import React from "react";
import classnames from "classnames";
import { Redirect } from "react-router-dom";
import { changeuser } from "store/user/action";
import { connect } from "react-redux";
// reactstrap components

import {
  Button,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  CardImg,
  CardTitle,
  Label,
  FormGroup,
  Form,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Container,
  Row,
  Col,
} from "reactstrap";

// core components
import ExamplesNavbar from "components/Navbars/ExamplesNavbar.js";
import IndexNavbar from "components/Navbars/IndexNavbar";
import Footer from "components/Footer/Footer.js";
import { PostData } from "services/PostData";

const mapStateToProps = (state) => {
  return {
    user: state.userReducer.user
  }
}

//  function RegisterPage() {
function RegisterPage({ user, changeuser }) {
  
  const [squares1to6, setSquares1to6] = React.useState("");
  const [squares7and8, setSquares7and8] = React.useState("");
  // const [fullNameFocus, setFullNameFocus] = React.useState(false);
  // const [emailFocus, setEmailFocus] = React.useState(false);
  // const [passwordFocus, setPasswordFocus] = React.useState(false);


  const [NameFocus, setNameFocus] = React.useState(false);
  const [LastNameFocus, setLastNameFocus] = React.useState(false);
  const [TypeDocumentFocus, setTypeDocumentFocus] = React.useState(false);
  const [DocumentFocus, setDocumentFocus] = React.useState(false);

  const [Name, setName] = React.useState('');
  const [LastName, setLastName] = React.useState('');
  const [TypeDocument, setTypeDocument] = React.useState('CC');
  const [Document, setDocument] = React.useState('');

  const [MsmError, setMsmError] = React.useState('');

  React.useEffect(() => {
    changeuser({});
    document.body.classList.toggle("register-page");
    document.documentElement.addEventListener("mousemove", followCursor);
    // Specify how to clean up after this effect:
    return function cleanup() {
      document.body.classList.toggle("register-page");
      document.documentElement.removeEventListener("mousemove", followCursor);
    };
  }, []);
  const followCursor = (event) => {
    let posX = event.clientX - window.innerWidth / 2;
    let posY = event.clientY - window.innerWidth / 6;
    setSquares1to6(
      "perspective(500px) rotateY(" +
      posX * 0.05 +
      "deg) rotateX(" +
      posY * -0.05 +
      "deg)"
    );
    setSquares7and8(
      "perspective(500px) rotateY(" +
      posX * 0.02 +
      "deg) rotateX(" +
      posY * -0.02 +
      "deg)"
    );
  };


  function Send(e) {
    console.log(Name);
    console.log(LastName);
    console.log(TypeDocument);
    console.log(Document);
    if (Name == '' || LastName == '' || TypeDocument == '' || Document == '') {
      setMsmError('Todos los campos son requeridos');
    } else {
      PostData('co/consultarNombres',
        'POST',
        { documentType: TypeDocument, documentNumber: Document })
        .then((result) => { console.log(result); })
        .catch((err) => { console.log(err); })

      var data = {
        Name: Name,
        LastName: LastName,
        TypeDocument: TypeDocument,
        Document: Document
      }
      changeuser(data);
      window.location.href = "#/profile-page";

    }
    e.preventDefault();
    // console.log('You clicked submit.');
    // window.location.href = "/profile-page";

  }

  return (
    <>
      <IndexNavbar />
      <div className="wrapper"  >
        <div className="page-header" >
          <div className="page-header-image" />
          <div className="content" >


            <Container >

              <Row>

                <Col className="offset-lg-0 offset-md-3" lg="5" md="6">
                  <div
                    className="square square-1"
                    id="square7"
                    style={{ transform: squares7and8 }}
                  />
                  <div
                    className="square square-7"
                    id="square7"
                    style={{ transform: squares7and8 }}
                  />
                  <div
                    className="square square-8"
                    id="square8"
                    style={{ transform: squares7and8 }}
                  />
                  <Card className="card-register" >
                    <Row className="card-sign">
                      <Col >
                        <img src={require("assets/img/lsv.png").default} rounded />
                        <Row className="card-sign-title-div">
                          <text className="card-sign-title">Sign Up</text>
                          {/* <text className="card-sign-title">{user}</text> */}
                        </Row>
                      </Col>
                    </Row>
                    <CardBody>
                      <Form className="form">

                        <InputGroup
                          className={classnames({
                            "input-group-focus": NameFocus,
                          })}
                        >
                          <InputGroupAddon addonType="prepend">
                            <InputGroupText>
                              <i className="tim-icons icon-notes" />
                            </InputGroupText>
                          </InputGroupAddon>
                          <Input
                            placeholder="Nombres"
                            type="text"
                            style={{ color: "#1d8cf8" }}
                            onFocus={(e) => setNameFocus(true)}
                            onBlur={(e) => setNameFocus(false)}
                            onChange={(e) => { setMsmError(''); setName(e.target.value) }}
                            value={Name}
                          />
                        </InputGroup>
                        <InputGroup
                          className={classnames({
                            "input-group-focus": LastNameFocus,
                          })}
                        >
                          <InputGroupAddon addonType="prepend">
                            <InputGroupText>
                              <i className="tim-icons icon-notes" />
                            </InputGroupText>
                          </InputGroupAddon>

                          <Input
                            placeholder="Apellidos"
                            type="text"
                            style={{ color: "#1d8cf8" }}
                            onFocus={(e) => setLastNameFocus(true)}
                            onBlur={(e) => setLastNameFocus(false)}
                            onChange={(e) => { setMsmError(''); setLastName(e.target.value) }}
                            value={LastName}
                          />
                        </InputGroup>

                        <Row className="card-sign">
                          <InputGroup
                            style={{ width: '30%', marginRight: '2%' }}
                            className={classnames({
                              "input-group-focus": TypeDocumentFocus,
                            })}
                          >
                            <InputGroupAddon addonType="prepend">
                              <InputGroupText>
                                {/* <i className="tim-icons icon-email-85" /> */}
                              </InputGroupText>
                            </InputGroupAddon>
                            <Input
                              placeholder="Type"
                              type="select"
                              style={{ color: "#1d8cf8" }}
                              onFocus={(e) => setTypeDocumentFocus(true)}
                              onBlur={(e) => setTypeDocumentFocus(false)}
                              onChange={(e) => { setMsmError(''); setTypeDocument(e.target.value) }}
                              value={TypeDocument}
                            >
                              <option>CC</option>
                              <option>CE</option>
                              <option>PEP </option>
                              <option>TI </option>
                              <option>RC </option>
                              <option>PA</option>
                            </Input>
                          </InputGroup>


                          <InputGroup
                            style={{ width: '60%' }}
                            className={classnames({
                              "input-group-focus": DocumentFocus,
                            })}
                          >
                            <InputGroupAddon addonType="prepend">
                              <InputGroupText>
                                <i className="tim-icons icon-single-02" />
                              </InputGroupText>
                            </InputGroupAddon>
                            <Input
                              placeholder="Document"
                              type="text"
                              style={{ color: "#1d8cf8" }}
                              onFocus={(e) => setDocumentFocus(true)}
                              onBlur={(e) => setDocumentFocus(false)}
                              onChange={(e) => { setMsmError(''); setDocument(e.target.value) }}
                              value={Document}
                            />
                          </InputGroup>
                        </Row>
                      </Form>

                      <div style={{ backgroundColor: MsmError != '' ? '#FBD3D3' : null, textAlign: 'center' }}>

                        <text style={{ color: 'red' }}>{MsmError ?? null}</text>
                      </div>
                    </CardBody>
                    <CardFooter>

                      <Button color="info" size="lg" onClick={Send}>
                        Sign Up
                      </Button>
                    </CardFooter>
                  </Card>

                </Col>

              </Row>
              <div className="register-bg" />
              <div
                className="square square-1"
                id="square1"
                style={{ transform: squares1to6 }}
              />
              <div
                className="square square-2"
                id="square2"
                style={{ transform: squares1to6 }}
              />
              <div
                className="square square-3"
                id="square3"
                style={{ transform: squares1to6 }}
              />
              <div
                className="square square-4"
                id="square4"
                style={{ transform: squares1to6 }}
              />
              <div
                className="square square-5"
                id="square5"
                style={{ transform: squares1to6 }}
              />
              <div
                className="square square-6"
                id="square6"
                style={{ transform: squares1to6 }}
              />
            </Container>

          </div>

        </div>
        <Footer />
      </div>

    </>
  );
}

export default connect(mapStateToProps, { changeuser })(RegisterPage);