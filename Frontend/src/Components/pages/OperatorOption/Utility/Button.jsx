import { styled } from '@mui/material';
import Box from '@mui/material/Box';
import React from 'react';

const StyledButton = styled(Box)`
  .button-33 {
    background-color: #c2fbd7;
    border-radius: 100px;
    box-shadow: rgba(44, 187, 99, 0.2) 0 -25px 18px -14px inset,
      rgba(44, 187, 99, 0.15) 0 1px 2px, rgba(44, 187, 99, 0.15) 0 2px 4px,
      rgba(44, 187, 99, 0.15) 0 4px 8px, rgba(44, 187, 99, 0.15) 0 8px 16px,
      rgba(44, 187, 99, 0.15) 0 16px 32px;
    color: green;
    cursor: pointer;
    display: inline-block;
    font-family: 'CerebriSans-Regular', -apple-system, system-ui, Roboto, sans-serif;
    padding: 7px 20px;
    text-align: center;
    text-decoration: none;
    transition: all 250ms;
    border: 0;
    font-size: 16px;
    user-select: none;
    -webkit-user-select: none;
    touch-action: manipulation;
  }

  .button-33:hover {
    box-shadow: rgba(44, 187, 99, 0.35) 0 -25px 18px -14px inset,
      rgba(44, 187, 99, 0.25) 0 1px 2px, rgba(44, 187, 99, 0.25) 0 2px 4px,
      rgba(44, 187, 99, 0.25) 0 4px 8px, rgba(44, 187, 99, 0.25) 0 8px 16px,
      rgba(44, 187, 99, 0.25) 0 16px 32px;
    transform: scale(1.05) rotate(-1deg);
  }
`;

function CustomButton(props) {
  return (
    <StyledButton>
      <button className="button-33" role="button" style={props.style}>
        {props.tittle}
      </button>
    </StyledButton>
  );
}

export default CustomButton;
