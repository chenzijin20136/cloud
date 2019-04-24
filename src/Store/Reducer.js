import * as ActionTypes from './ActionTypes';

export default (state, action) => {
  const { counterCaption } = action;
  // eslint-disable-next-line default-case
  switch (action.type) {
    case ActionTypes.INCREMENT:
      return { ...state, [counterCaption]: state[counterCaption] + 1 };
    case ActionTypes.DECREMENT:
      return { ...state, [counterCaption]: state[counterCaption] - 1 };
    default:
      return state
  }
}