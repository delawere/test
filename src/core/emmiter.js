import faker from "faker";

const nowDate = new Date();

export const userUUIDs = [
  faker.random.uuid(),
  faker.random.uuid(),
  faker.random.uuid(),
  faker.random.uuid(),
  faker.random.uuid(),
  faker.random.uuid(),
  faker.random.uuid(),
  faker.random.uuid()
];

export const UserNames = [
  `${faker.name.firstName()}`,
  `${faker.name.firstName()}`,
  `${faker.name.firstName()}`,
  `${faker.name.firstName()}`,
  `${faker.name.firstName()}`,
  `${faker.name.firstName()}`,
  `${faker.name.firstName()}`,
  `${faker.name.firstName()}`
];

export const UserSurnames = [
  `${faker.name.lastName()}`,
  `${faker.name.lastName()}`,
  `${faker.name.lastName()}`,
  `${faker.name.lastName()}`,
  `${faker.name.lastName()}`,
  `${faker.name.lastName()}`,
  `${faker.name.lastName()}`,
  `${faker.name.lastName()}`
];

export const UserAvatars = [
  faker.image.avatar(),
  faker.image.avatar(),
  faker.image.avatar(),
  faker.image.avatar(),
  faker.image.avatar(),
  faker.image.avatar(),
  faker.image.avatar(),
  faker.image.avatar()
];

export class WebsocketMockAdapter {
  constructor(subscriber, deelay = 1000) {
    this.subscriber = subscriber;
    this.deelay = deelay;

    this.init();
  }

  init() {
    setInterval(() => {
      this.subscriber(this.createData());
    }, this.deelay);
  }

  createData() {
    const index = faker.random.number({ min: 0, max: 7 });

    return {
      id: faker.random.uuid(),
      date: +faker.date.future(0, nowDate),
      user_id: userUUIDs[index],
      text: faker.lorem.words(3)
    };
  }

  getUsers() {
    const users = [];

    for (let index = 0; index < 8; index++) {
      users.push({
        name: UserNames[index],
        secname: UserSurnames[index],
        avatar: UserAvatars[index],
        id: userUUIDs[index]
      });
    }

    return users;
  }
}
