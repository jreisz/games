import React, { Component } from "react";
import { Table, Row, Col, Container } from "reactstrap";
import { connect } from "react-redux";
import { toMMddyyyyhhmm } from "../../../lib/santex/utils/dateFormatter";

class FinishedGames extends Component {
  render() {
    const records = this.props.savedGames
      .filter((game) => game.endTime != null)
      .sort(
        (a, b) =>
          a.SetUp.difficultyId - b.SetUp.difficultyId ||
          a.totalSpentTime - b.totalSpentTime
      )
      .map((d) => (
        <tr key={d.startTime}>
          <th scope="row">{toMMddyyyyhhmm(d.startTime)}</th>
          <td>{toMMddyyyyhhmm(d.endTime)}</td>
          <td>{d.SetUp.difficulty}</td>
          <td>{d.totalSpentTime + " secs"}</td>
          <td>{d.status}</td>
        </tr>
      ));

    return (
        <Container>
          <Row>
            <Col>
              <Table style={{ marginTop: "40px" }}>
                <thead>
                  <tr>
                    <th>Start Time</th>
                    <th>End Time</th>
                    <th>Difficulty</th>
                    <th>Total time spent</th>
                    <th>Status</th>
                  </tr>
                </thead>
                <tbody>{records}</tbody>
              </Table>
            </Col>
          </Row>
        </Container>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    savedGames: state.SavedGames,
  };
};
export default connect(mapStateToProps)(FinishedGames);
