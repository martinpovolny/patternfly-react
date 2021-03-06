import React from 'react';
import PropTypes from 'prop-types';
import { noop } from '../../../../common/helpers';

const LoginCardRememberMe = ({ onClick, label, className, ...props }) =>
  label && (
    <label className={`checkbox-label ${className}`}>
      <input {...props} type="checkbox" onClick={onClick} /> {label}
    </label>
  );

LoginCardRememberMe.propTypes = {
  /** The checkbox label. */
  label: PropTypes.string,
  /** Additional css classes. */
  className: PropTypes.string,
  /** Callback to trigger when clicking the checkbox */
  onClick: PropTypes.func
};

LoginCardRememberMe.defaultProps = {
  label: null,
  className: '',
  onClick: noop
};

export default LoginCardRememberMe;
