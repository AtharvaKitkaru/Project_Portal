import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import ReactSearchBox from "react-search-box";
import "./StudentList.scss";

class StudentList extends Component {
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
  constructor(props) {
    super(props);
    this.state = { redirect: null };
  }
  detailInfo = () => {
    this.setState({ redirect: "/users/student/:id" });
  };

  render() {
    if (this.state.redirect) {
      return <Redirect to={this.state.redirect} />;
    }
    return (
      <div className="student-list mx-auto" style={{ width: "90%" }}>
        <br />
        <div
          className="p-2 px-3 text-center shadow-sm rounded font-weight-bold"
          style={{
            color: "rgb(183, 32, 46)",
            fontSize: "1.1em",
            backgroundColor: "rgba(231, 231, 231, 0.459)"
          }}
        >
          Student List
        </div>
        <div className="my-4">
          <ReactSearchBox
            placeholder="Search for students here ..."
            data={this.data}
            autoFocus="true"
            inputBoxBorderColor="#e1e6e2"
            callback={record => console.log(record)}
          />
        </div>
        <div class="table-responsive-sm">
          <table class="ui striped table">
            <thead class="text-center">
              <tr class="">
                <th class="" scope="col">
                  Roll Number
                </th>
                <th class="" scope="col">
                  Student Name
                </th>
                <th class="" scope="col">
                  Group Number
                </th>
                <th class="" scope="col">
                  Project Name
                </th>
              </tr>
            </thead>
            <tbody class="text-center">
              <tr class="" onClick={this.detailInfo}>
                <td class="">1814055</td>
                <td class="">Jill Shah</td>
                <td class="">1</td>
                <td class="">Smart Cities Mission</td>
              </tr>
              <tr class="" onClick={this.detailInfo}>
                <td class="">1814040</td>
                <td class="">Nishavak Naik</td>
                <td class="">1</td>
                <td class="">Smart Cities Mission</td>
              </tr>
              <tr class="" onClick={this.detailInfo}>
                <td class="">1814033</td>
                <td class="">Atharva Kitkaru</td>
                <td class="">1</td>
                <td class="">Smart Cities Mission</td>
              </tr>
              <tr class="" onClick={this.detailInfo}>
                <td class="">1814055</td>
                <td class="">Jill Shah</td>
                <td class="">2</td>
                <td class="">ABCD</td>
              </tr>
              <tr class="" onClick={this.detailInfo}>
                <td class="">1814040</td>
                <td class="">Nishavak Naik</td>
                <td class="">2</td>
                <td class="">ABCD</td>
              </tr>
              <tr class="" onClick={this.detailInfo}>
                <td class="">1814033</td>
                <td class="">Atharva Kitkaru</td>
                <td class="">2</td>
                <td class="">ABCD</td>
              </tr>
              <tr class="" onClick={this.detailInfo}>
                <td class="">1814055</td>
                <td class="">Jill Shah</td>
                <td class="">3</td>
                <td class="">Project India</td>
              </tr>
              <tr class="" onClick={this.detailInfo}>
                <td class="">1814040</td>
                <td class="">Nishavak Naik</td>
                <td class="">3</td>
                <td class="">Project India</td>
              </tr>
              <tr class="" onClick={this.detailInfo}>
                <td class="">1814033</td>
                <td class="">Atharva Kitkaru</td>
                <td class="">4</td>
                <td class="">Save Animals</td>
              </tr>
              <tr class="" onClick={this.detailInfo}>
                <td class="">1814055</td>
                <td class="">Jill Shah</td>
                <td class="">4</td>
                <td class="">Save Animals</td>
              </tr>
              <tr class="" onClick={this.detailInfo}>
                <td class="">1814040</td>
                <td class="">Nishavak Naik</td>
                <td class="">5</td>
                <td class="">ABCD</td>
              </tr>
              <tr class="" onClick={this.detailInfo}>
                <td class="">1814033</td>
                <td class="">Atharva Kitkaru</td>
                <td class="">5</td>
                <td class="">ABCD</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}
export default StudentList;
