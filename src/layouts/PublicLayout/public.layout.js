import React, { Fragment } from "react";
import { Route, Link } from "react-router-dom";
import { withWebId } from "@inrupt/solid-react-components";

const PublicLayout = props => {
  const { component: Component, webId, i18n, ...rest } = props;
  return (
    <Route
      {...rest}
      component={matchProps => (
        <Component {...matchProps} />
      )}
    />
  );
};

export default withWebId(PublicLayout);
