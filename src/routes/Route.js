import React from 'react';
import { Route } from 'react-router-dom';
import PropTypes from 'prop-types';

import { useDispatch } from 'react-redux';
import { Spinner } from 'reactstrap';
import { store } from '~/store';
import PageWrap from '~/components/PageWrap';

export default function RouteWrapper({
  component: Component,
  isPrivate,
  ...rest
}) {
  const dispatch = useDispatch();

  return (
    <PageWrap {...rest}>
      <Route {...rest} component={Component} />
    </PageWrap>
  );
}

RouteWrapper.propTypes = {
  isPrivate: PropTypes.bool,
  component: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.func,
    PropTypes.object,
  ]).isRequired,
};

RouteWrapper.defaultProps = {
  isPrivate: false,
};
