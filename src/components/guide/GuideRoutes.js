import React from "react";
import { BrowserRouter, Route, Redirect } from "react-router-dom";
import app from "../../Firebase";
import GuideDashboard from "./dashboard/GuideDashboard";
import GuideAssignmentList from "./assignment_list/GuideAssignmentList";
import GuideAssignmentDetails from "./assignment_details/GuideAssignmentDetails";
import Profile from "./Profile";
import DetailsForm from "./DetailsForm";

const GuideRoutes = () => {
  return (
    <BrowserRouter>
      <Route
        exact
        path={["/", "/dashboard"]}
        component={GuideDashboard}
      />
      <Route
        exact
        path="/profile"
        component={Profile}
      />
      <Route
        exact
        path="/details"
        component={DetailsForm}
      />
      <Route
        exact
        path= "/assignment-list"
        component={GuideAssignmentList}
      />
	  <Route
        exact
        path= "/assignment/:id"
        component={GuideAssignmentDetails}
      />
    </BrowserRouter>
  );
};

export default GuideRoutes;
