import { List, Item, Number } from './Statistic.styled';
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
      {/* <Item>
        Positive feedback:<Number>{percentage}</Number>
      </Item> */}
    </List>
  );
};
export default Statistic;
