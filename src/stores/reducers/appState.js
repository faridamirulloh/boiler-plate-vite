import {App} from '../../constants/actionType';

const initialState = {
  text: 'Counter',
};

export default function appState(state = initialState, action = {}) {
  switch (action.type) {
    case App.SET_TEXT:
      return {...state, text: action.text};

    default:
      return state;
  }
}
