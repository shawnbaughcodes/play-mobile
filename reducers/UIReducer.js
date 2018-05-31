import {
  OPEN_ACCOUNT_MODAL,
  OPEN_EVENT_MODAL,
  OPEN_EVENT_INFO_MODAL,
  OPEN_CREATE_EVENT_MODAL,
  CLOSE_MODAL,
  SIGN_OUT
} from '../actions/types';

const INITIAL_STATE = {
  modals: {
    accountModalVisible: false,
    eventModalVisible: false,
    eventInfoModalVisible: false,
    createEventModalVisible: false
  }
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case OPEN_ACCOUNT_MODAL:
      return {
        ...state,
        modals: {
          accountModalVisible: action.payload,
          eventModalVisible: false,
          eventInfoModalVisible: false,
          createEventModalVisible: false
        }
      };

    case OPEN_EVENT_MODAL:
      return {
        ...state,
        modals: {
          eventModalVisible: action.payload,
          eventInfoModalVisible: false,
          accountModalVisible: false,
          createEventModalVisible: false
        }
      };

    case OPEN_EVENT_INFO_MODAL:
      return {
        ...state,
        modals: {
          eventInfoModalVisible: action.payload,
          accountModalVisible: false,
          eventModalVisible: false,
          createEventModalVisible: false
        }
      };

    case OPEN_CREATE_EVENT_MODAL:
      return {
        ...state,
        modals: {
          createEventModalVisible: action.payload,
          eventInfoModalVisible: false,
          accountModalVisible: false,
          eventModalVisible: false
        }
      };

    case CLOSE_MODAL:
      return {
        ...state,
        modals: {
          accountModalVisible: action.payload,
          eventModalVisible: action.payload,
          eventInfoModalVisible: action.payload,
          createEventModalVisible: action.payload
        }
      };

    default:
      return state;
  }
};
