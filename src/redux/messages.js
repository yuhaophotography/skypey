import faker from "faker";

import { fetchContacts } from "./contacts";

const SET_INPUT_MESSAGE = "SET_INPUT_MESSAGE";

export const setInputMessage = message => ({
  type: SET_INPUT_MESSAGE,
  payload: message
});

const fetchMessages = length => {
  const messages = {};

  fetchContacts.forEach(contact => {
    messages[contact.userId] = Array.from({ length }, (_, index) => ({
      index,
      isUser: faker.random.boolean(),
      text: faker.lorem.words()
    }));
  });

  return messages;
};

const initialState = fetchMessages(15);

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case SET_INPUT_MESSAGE:
      const { userId, message } = payload;
      const messages = state[userId];

      return {
        ...state,
        [userId]: [
          ...messages,
          { index: messages.length, isUser: true, text: message }
        ]
      };

    default:
      return state;
  }
};
