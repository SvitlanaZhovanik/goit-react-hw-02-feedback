import { List, Item, Button } from './FeedbackOptions.styled';
import PropTypes from 'prop-types';
const FeedbackOption = ({ onLeaveFeedback }) => {
  return (
    <List>
      <Item>
        <Button
          onClick={() => {
            onLeaveFeedback('good');
          }}
          type="button"
        >
          Good
        </Button>
      </Item>
      <Item>
        <Button
          onClick={() => {
            onLeaveFeedback('neutral');
          }}
          type="button"
        >
          Neutral
        </Button>
      </Item>
      <Item>
        <Button
          onClick={() => {
            onLeaveFeedback('bad');
          }}
          type="button"
        >
          Bad
        </Button>
      </Item>
    </List>
  );
};

FeedbackOption.propTypes = {
  onLeaveFeedback: PropTypes.func.isRequired,
};
export default FeedbackOption;
