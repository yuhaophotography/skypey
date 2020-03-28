import faker from "faker";

const fetchUser = {
  userId: faker.random.uuid(),
  name: faker.name.findName(),
  email: faker.internet.email(),
  phone: faker.phone.phoneNumberFormat(),
  avatorUrl: faker.internet.avatar()
};

const initialState = fetchUser;

export default (state = initialState, _) => state;
