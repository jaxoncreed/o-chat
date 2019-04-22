import React, { Fragment } from "react";
import { Route, Redirect } from "react-router-dom";
import { withTranslation } from "react-i18next";
import { withWebId } from "@inrupt/solid-react-components";

const NotLoggedInLayout = props => {
  const { component: Component, webId, ...rest } = props;
  return !webId ? (
    <Route
      {...rest}
      component={matchProps => (
        <Fragment>
          <Component {...matchProps} />
        </Fragment>
      )}
    />
  ) : (
    <Redirect to="/" />
  );
};

export default withTranslation()(withWebId(NotLoggedInLayout));
