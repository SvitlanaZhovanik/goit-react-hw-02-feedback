import { Message } from './Notification.styled';
import { FcCancel } from 'react-icons/fc';
import PropTypes from 'prop-types';

const Notification = ({ message }) => {
  return (
    <Message>
      <FcCancel />
      {message}
    </Message>
  );
};

Notification.propTypes = {
  message: PropTypes.string.isRequired,
};
export default Notification;
