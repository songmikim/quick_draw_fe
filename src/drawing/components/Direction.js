import React from 'react';
import styled from 'styled-components';
import color from '../../global/styles/color';
import fontsize from '../../global/styles/fontsize';

const { primary, secondary, dark } = color;
const { big } = fontsize;

const StyledBox = styled.div`
    background: ${secondary};
    font-size: ${big};
    padding: 10px 20px;
    text-align: center;
    margin-bottom: 10px;
    color: ${dark};
    border: 1px solid ${primary};
    border-radius; 3px;
    line-height: 1;
`;

const Direction = ({ category }) => {
  return <StyledBox>{category[1]}를(을) 그리시오.</StyledBox>;
};

export default React.memo(Direction);
