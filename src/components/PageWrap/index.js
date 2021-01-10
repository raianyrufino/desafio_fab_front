import React from "react";
import PropTypes from "prop-types";
import { store } from "~/store";

import PageContent from "~/components/PageContent";

export default function PageWrap({ children, ...rest }) {
  
  return (
    <>
      <PageContent>{children}</PageContent>
    </>
  );
}

PageWrap.propTypes = {
  children: PropTypes.element.isRequired
};
