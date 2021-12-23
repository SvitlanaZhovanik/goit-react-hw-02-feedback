import styled from '@emotion/styled';

export const List = styled.ul`
  font-size: 23px;
`;

export const Item = styled.li`
  &:not(:last-child) {
    margin-bottom: 7px;
  }
`;

export const Number = styled.span`
  padding: 5px;
  font-weight: 700;
`;
