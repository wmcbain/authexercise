interface UserListRow {
  username: string;
  password: string;
  id: string;
  firstName: string;
  lastName: string;
}

export interface CreateUserResponse {
  username: string;
  firstName: string;
  lastName: string;
  mobilePhone: string;
}

export interface LoginResponse {
  id: string;
  username: string;
  firstName: string;
  lastName: string;
}

interface UserRegistrationProp {
  username: string;
  password: string;
  firstName: string;
  lastName: string;
  mobilePhone: string;
}

interface TResponse<T = any> extends Response {
  json<P = T>(): Promise<P>;
}

declare function fetch<T>(...args: any): Promise<TResponse<T>>;

const BASE_URL = 'https://fa0o71a1zk.execute-api.us-east-1.amazonaws.com/dev';
export const getUsers = () => fetch<UserListRow[]>(`${BASE_URL}/user`);

export const createUser = (user: UserRegistrationProp) =>
  fetch<CreateUserResponse | string>(`${BASE_URL}/user`, {
    method: 'POST',
    body: JSON.stringify(user),
  });

export const deleteUser = (username: string) =>
  fetch<{}>(`${BASE_URL}/user/${username}`, {
    method: 'DELETE',
  });

export const emailLogin = (username: string, password: string) =>
  fetch<LoginResponse | string>(`${BASE_URL}/user/${username}/${password}`);
