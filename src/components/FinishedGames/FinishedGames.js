import React, { Component } from "react";
import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Row,
  Col,
  Container,
} from "reactstrap";

class FinishedGames extends Component {
  render() {
    return (
      <>
        <Container>
          <Row>
            <Col>
            <br></br><br></br><br></br>
            <img style={{height:120}} src={require("../../../public/assets/img/comingsoon.png")} />
            <br></br>
              <img src={require("../../../public/assets/img/happyface.png")} />
            </Col>
          </Row>
        </Container>
      </>
    );
  }
}
export default FinishedGames;
