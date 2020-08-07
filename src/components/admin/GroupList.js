import React from "react";
import { Link } from "react-router-dom";
import { Card } from "react-bootstrap";
import "./GroupList.scss";
import ReactSearchBox from "react-search-box";

// import GroupDetails from "./GroupDetails";

class GroupList extends React.Component {
  data = [
    {
      key: "john",
      value: "John Doe"
    },
    {
      key: "jane",
      value: "Jane Doe"
    },
    {
      key: "mary",
      value: "Mary Phillips"
    },
    {
      key: "robert",
      value: "Robert"
    },
    {
      key: "karius",
      value: "Karius"
    }
  ];
  render() {
    return (
      <div className="groups mx-auto" style={{ width: "90%" }}>
        <br />
        {/* <div className = "container-fluid bg-primary">
          abc
        </div> */}
        <div
          className="p-2   text-center shadow-sm rounded font-weight-bold  mx-auto"
          style={{
            color: "rgb(183, 32, 46)",
            fontSize: "1.1em",
            width: "auto",
            backgroundColor: "rgba(231, 231, 231, 0.459)"
          }}
        >
          Select Group
        </div>

        <div className="my-4">
          <ReactSearchBox
            placeholder="Search for groups here ..."
            data={this.data}
            autoFocus="true"
            inputBoxBorderColor="#e1e6e2"
            callback={record => console.log(record)}
          />
        </div>

        <div
          className="d-flex justify-content-between  flex-lg-row flex-column text-center p-0" /* style={{ margin: "2px auto" }} */
        >
          <Link
            to="/group/:id"
            id="group-item"
            className="text-dark"
            style={{ textDecoration: "none" }}
          >
            <div className="col-lg-4  col-12  mb-2  p-0">
              <Card
                border="dark"
                /* style={{ minWidth: "100%" }} */ style={{ minWidth: "40vh" }}
              >
                <Card.Header>Group Number: 1</Card.Header>
                <Card.Body>
                  <Card.Text>
                    Project Name: ABC
                    <br />
                    Number of Members: 2
                    <br />
                    Guide Name: Jill Shah
                  </Card.Text>
                </Card.Body>
              </Card>
            </div>
          </Link>

          <Link
            to="/group/:id"
            id="group-item"
            className="text-dark"
            style={{ textDecoration: "none" }}
          >
            <div className="col-lg-4  col-12  mb-2  p-0 ">
              <Card border="dark" style={{ minWidth: "40vh" }}>
                <Card.Header>Group Number: 1</Card.Header>
                <Card.Body>
                  <Card.Text>
                    Project Name: ABC
                    <br />
                    Number of Members: 2
                    <br />
                    Guide Name: Jill Shah
                  </Card.Text>
                </Card.Body>
              </Card>
            </div>
          </Link>

          <Link
            to="/group/:id"
            id="group-item"
            className="text-dark"
            style={{ textDecoration: "none" }}
          >
            <div className="col-lg-4  col-12  mb-2 p-0 ">
              <Card border="dark" style={{ minWidth: "40vh" }}>
                <Card.Header>Group Number: 1</Card.Header>
                <Card.Body>
                  <Card.Text>
                    Project Name: ABC
                    <br />
                    Number of Members: 2
                    <br />
                    Guide Name: Jill Shah
                  </Card.Text>
                </Card.Body>
              </Card>
            </div>
          </Link>
        </div>
        <br />
        <Link to="/groups">
          <div className="mx-auto back-button p-2 text-center my-4 rounded-lg">
            <i className="fa fa-arrow-down mr-2" aria-hidden="true" />
            Download
          </div>
        </Link>
      </div>
    );
  }
}
export default GroupList;
