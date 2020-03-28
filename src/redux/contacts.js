import faker from "faker";

export const fetchContacts = Array.from({ length: 10 }, item => ({
  userId: faker.random.uuid(),
  name: faker.name.findName(),
  email: faker.internet.email(),
  phone: faker.phone.phoneNumberFormat(),
  avatorUrl: faker.internet.avatar()
}));

const transferFecthContacts = contacts => {
  const ids = [];
  const listById = {};

  contacts.forEach(item => {
    const { userId: id } = item;

    ids.push(id);
    listById[id] = item;
  });

  return {
    ids,
    listById
  };
};

const initialState = transferFecthContacts(fetchContacts);

export default (state = initialState, _) => state;
