import 'isomorphic-fetch';
import { getUsers, createUser, deleteUser, emailLogin } from './user';

const testUsername = 'testuser';
const testUser = {
  username: testUsername,
  password: 'keepontesting',
  firstName: 'Jane',
  lastName: 'Doe',
  mobilePhone: '5854740222',
};

describe('user api tests', () => {
  afterEach(async done => {
    await deleteUser(testUsername);
    done();
  });

  it('gets the list of users', async done => {
    const data = await getUsers();
    expect(data.status).toEqual(200);
    const json = await data.json();
    expect(Array.isArray(json)).toBeTruthy();
    done();
  });

  it('creates a user', async done => {
    const data = await createUser(testUser);
    expect(data.status).toEqual(200);
    const json = await data.json();
    expect(json.username).toEqual(testUser.username);
    expect(json.firstName).toEqual(testUser.firstName);
    expect(json.lastName).toEqual(testUser.lastName);
    expect(json.mobilePhone).toEqual(testUser.mobilePhone);
    done();
  });

  it('deletes a user', async done => {
    await createUser(testUser);
    const data = await deleteUser('testuser');
    expect(data.status).toEqual(200);
    const json = await data.json();
    expect(json).toBeDefined();
    done();
  });

  it('logs a user in', async done => {
    await createUser(testUser);
    const data = await emailLogin(testUser.username, testUser.password);
    expect(data.status).toEqual(200);
    const json = await data.json();
    expect(json.username).toEqual(testUser.username);
    expect(json.firstName).toEqual(testUser.firstName);
    expect(json.lastName).toEqual(testUser.lastName);
    done();
  });
});
