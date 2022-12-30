import { User } from "../entities/User";

interface ICreateUserDTO {
  id?: string;
  name: string;
  password: string;
  email: string;
  driver_licence: string;
  avatar?: string;
}

interface IUsersRepository {
  findByEmail(email: string): Promise<User | undefined>;
  findById(id: string): Promise<User | undefined>;
  list(): Promise<User[]>;
  create({
    name,
    password,
    email,
    driver_licence,
  }: ICreateUserDTO): Promise<void>;
}

export { IUsersRepository, ICreateUserDTO };
