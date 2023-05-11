import styled from 'styled-components';

export const StyledForm = styled.form`
  display: flex;
  width: 500px;
  margin-left: 100px;
  input {
    display: block;
    width: 100%;
    padding: 8px 16px;
    line-height: 25px;
    font-size: 24px;
    font-weight: 500;
    font-family: inherit;
    border-radius: 4px;
    color: #99a3ba;
    border: 3px solid #cdd9ed;
    background: #fff;
    transition: border 0.3s ease;
    &:focus {
      outline: none;
      border-color: #275efe;
    }
  }
  button {
    cursor: pointer;
    border-radius: 4px;
    text-align: center;
    padding: 8px 12px;
    font-size: 14px;
    line-height: 25px;
    color: #99a3ba;
    background: #eef4ff;
    border: 1px solid #cdd9ed;
    transition: background 0.3s ease, border 0.3s ease, color 0.3s ease;
  }
  &:focus-within {
    & > button {
      color: #fff;
      background: #678efe;
      border-color: #275efe;
    }
  }
`;
