import { List, Item, Button } from './FeedbackOptions.styled';
import PropTypes from 'prop-types';
const FeedbackOption = ({ options, onClick }) => {
  return (
    <List>
      {options.map(option => {
        return (
          <Item key={option}>
            <Button onClick={onClick} type="button">
              {option}
            </Button>
          </Item>
        );
      })}
    </List>
  );
};

FeedbackOption.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string.isRequired),
  onClick: PropTypes.func.isRequired,
};
export default FeedbackOption;
