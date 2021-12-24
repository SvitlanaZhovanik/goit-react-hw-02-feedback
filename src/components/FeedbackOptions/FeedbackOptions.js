import { List, Item, Button } from './FeedbackOptions.styled';
import PropTypes from 'prop-types';
const FeedbackOption = ({ options, onLeaveFeedback }) => {
  return (
    <List>
      {options.map(option => {
        return (
          <Item key={option}>
            <Button
              onClick={() => {
                onLeaveFeedback(option);
              }}
              type="button"
            >
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
  onLeaveFeedback: PropTypes.func.isRequired,
};
export default FeedbackOption;
