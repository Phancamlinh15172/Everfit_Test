import { faker } from "@faker-js/faker";
const firstName = faker.name.firstName();
const lastName = faker.name.lastName();
const randomNumber = Math.random();

const fakeData = () => {
  return { firstName, lastName, randomNumber};
};

export default fakeData;