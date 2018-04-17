import { css } from 'styled-components';

export const wrapper = css`
    borderRadius: 2px;
    border: solid grey 0.3px;
    shadow-color: grey;
    shadow-radius: 1;
    elevation: 1;
    shadow-opacity: 0.2;
`;
// CARD USER INFO
export const infoWrapper = css`
    flex: 2;
    height: 70px;
    flex-direction: column;
    justify-content: center;
    padding-top: 5%;
    padding-bottom: 0%;
    padding-right: 3%;
    padding-left: 3%;
`;
export const userName = css`
    font-size: 15px;
    font-weight: bold;
`;
// CARD USER POST
export const postWrapper = css`
    flex: 1;
    margin-top: 20px;
`;
export const postBody = css`
    flex: 1;
    padding-top: 0%;
    padding-bottom: 0%;
    
`;
export const postText = css`
    text-align: justify;
    font-size: 15px;
    padding-right: 3%;
    padding-left: 3%;
`;
// CARD BUTTONS
export const optionWrapper = css`
    flex: 1;
    flex-direction: row;
    padding-top: 0%;
    padding-bottom: 0%;
    padding-right: 3%;
    padding-left: 3%;
    margin-top: 0px;
    margin-right: 0px;
    margin-bottom: 0px;
    margin-left: 0px;
`;
export const optionButton = css`
    flex: 1;
    flex-direction: row;
    margin-top: 10px;
    margin-bottom: 10px;
    margin-right: 3px;
    margin-left: 3px;
`;
