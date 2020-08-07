import React from "react";
import { Card, Button, ListGroup, ListGroupItem } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./HandleRequests.scss";

class HandleRequests extends React.Component {
  render() {
    return (
      <div className="handle-requests mx-auto" style={{ width: "85%" }}>
        <br />
        <div
          className="p-2 px-3 text-center shadow-sm rounded font-weight-bold"
          style={{
            color: "rgb(183, 32, 46)",
            fontSize: "1.1em",
            backgroundColor: "rgba(231, 231, 231, 0.459)"
          }}
        >
          Handle Requests
        </div>
        <br />
        <div className="container">
          <div className="p-2 px-3 d-flex flex-md-row flex-column">
            <div className="col-md-4 pb-4">
              <Card className="shadow" border="light">
                <Card.Body>
                  <Card.Title className="text-center">
                    Leader Request
                  </Card.Title>
                  <Card.Text className="text-center">
                    <Link to="/group/:id" style={{ textDecoration: "none" }}>
                      Click to view group details
                    </Link>
                  </Card.Text>
                </Card.Body>
                <ListGroup className="list-group-flush">
                  <ListGroupItem>
                    Group Number: <span style={{ float: "right" }}>1</span>
                  </ListGroupItem>
                  <ListGroupItem>
                    Current Leader:{" "}
                    <span style={{ float: "right" }}>Jill Shah</span>
                  </ListGroupItem>
                  <ListGroupItem>
                    New Leader:{" "}
                    <span style={{ float: "right" }}>Atharva Kitkaru</span>
                  </ListGroupItem>
                </ListGroup>
                <Card.Body>
                  <Button variant="success" style={{ float: "left" }}>
                    Make Leader
                  </Button>
                  <Button variant="danger" style={{ float: "right" }}>
                    Reject request
                  </Button>
                </Card.Body>
              </Card>
            </div>
            <div className="col-md-4 pb-4">
              <Card className="shadow" border="light">
                <Card.Body>
                  <Card.Title className="text-center">
                    Remove Member Request
                  </Card.Title>
                  <Card.Text className="text-center">
                    <Link to="/group/:id" style={{ textDecoration: "none" }}>
                      Click to view group details
                    </Link>
                  </Card.Text>
                </Card.Body>
                <ListGroup className="list-group-flush">
                  <ListGroupItem>
                    Member Name:{" "}
                    <span style={{ float: "right" }}>Jill Shah</span>
                  </ListGroupItem>
                  <ListGroupItem>
                    Group Number: <span style={{ float: "right" }}>1</span>
                  </ListGroupItem>
                  <ListGroupItem>
                    Guide Name: <span style={{ float: "right" }}>ABCD</span>
                  </ListGroupItem>
                </ListGroup>
                <Card.Body>
                  <Button variant="success" style={{ float: "left" }}>
                    Remove
                  </Button>
                  <Button variant="danger" style={{ float: "right" }}>
                    Reject request
                  </Button>
                </Card.Body>
              </Card>
            </div>
            <div className="col-md-4 pb-4">
              <Card className="shadow" border="light">
                <Card.Body>
                  <Card.Title className="text-center">
                    Project Approval Request
                  </Card.Title>
                  <Card.Text className="text-center">
                    <Link to="/project/:id" style={{ textDecoration: "none" }}>
                      Click to view project details
                    </Link>
                  </Card.Text>
                </Card.Body>
                <ListGroup className="list-group-flush">
                  <ListGroupItem>
                    Group Number: <span style={{ float: "right" }}>1</span>
                  </ListGroupItem>
                  <ListGroupItem>
                    Leader Name:{" "}
                    <span style={{ float: "right" }}>Jill Shah</span>
                  </ListGroupItem>
                  <ListGroupItem>
                    Guide Name: <span style={{ float: "right" }}>ABCD</span>
                  </ListGroupItem>
                </ListGroup>
                <Card.Body>
                  <Button variant="success" style={{ float: "left" }}>
                    Approve project
                  </Button>
                  <Button variant="danger" style={{ float: "right" }}>
                    Reject project
                  </Button>
                </Card.Body>
              </Card>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default HandleRequests;
