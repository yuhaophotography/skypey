const SET_ACTIVE_USER_ID = "SET_ACTIVE_USER_ID";

export const setActiveUserId = contactId => ({
  type: SET_ACTIVE_USER_ID,
  payload: contactId
});

const initialState = null;

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case SET_ACTIVE_USER_ID:
      return payload;
    default:
      return state;
  }
};
