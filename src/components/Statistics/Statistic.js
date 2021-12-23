import { List, Item, Number } from './Statistic.styled';
import { FcHighPriority, FcApproval } from 'react-icons/fc';
const Statistic = ({ good, neutral, bad, total, percentage }) => {
  return (
    <List>
      <Item>
        Good:<Number>{good}</Number>
      </Item>
      <Item>
        Neutral:<Number>{neutral}</Number>
      </Item>
      <Item>
        Bad:<Number>{bad}</Number>
      </Item>
      <Item>
        Total:<Number>{total}</Number>
      </Item>
      {percentage > 49 ? (
        <Item>
          Positive feedback: <FcApproval />
          <Number>{percentage}</Number>%
        </Item>
      ) : (
        <Item>
          Positive feedback: <FcHighPriority />
          <Number>{percentage}</Number>%
        </Item>
      )}
    </List>
  );
};
export default Statistic;
