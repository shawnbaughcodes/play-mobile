import { css } from 'styled-components';

export const wrapper = css`
    borderRadius: 25px;
    shadow-color: grey;
    shadow-offset: {
        width: 5px,
        height: 10px
    };
    shadow-opacity: 0.4;
    shadow-radius: 2
    elevation: 1;
    border: solid grey 1px;
    marginBottom: 10px;
    z-index: 2;
`;
// CARD USER INFO
export const infoWrapper = css`
    flex: 2;
    height: 70px;
    flex-direction: row;
    padding: 5% 3% 0% 3%;
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
    padding: 0 3%;
`;
export const postText = css`
    text-align: justify;
    font-size: 15px;
`;
// CARD BUTTONS
export const optionWrapper = css`
    flex: 1;
    flex-direction: row;
    padding: 0 3%;
    margin: 0;
`;
export const optionButton = css`
    flex: 1;
    flex-direction: row;
    margin: 10px 3px;
`;
