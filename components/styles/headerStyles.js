import { css } from 'styled-components';

export const wrapper = css`
    background-color: #EFF1F3;
    height: 65px;
    border-radius: 5px;
    border-top-right-radius: 0;
    border-top-left-radius: 0;
    opacity: 0.8;
    shadow-color: grey;
    shadow-offset: {width: 100%, height: 25%};
    shadow-opacity: 8;
    elevation: 1;
    z-index: 2;
    flex-direction: row;
    padding: 0% 5%;
`;

export const headText = css`
    font-size: 20px;
    font-weight: bold;
`;
