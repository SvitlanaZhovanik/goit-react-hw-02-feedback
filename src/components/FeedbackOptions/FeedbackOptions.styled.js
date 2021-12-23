import styled from '@emotion/styled';

export const List = styled.ul`
  display: flex;
`;

export const Item = styled.li`
  &:not(:last-child) {
    margin-right: 10px;
  }
`;
export const Button = styled.button`
  border-radius: 7px;
  border-color: #e2d3d3;
  border-width: 1px;
  border-style: solid;
  padding: 5px 8px;
  font-weight: bold;
  color: inherit;
  background-color: #ffffff;
  &:hover,
  &:focus {
    background-color: #3388ff;
  }
`;
