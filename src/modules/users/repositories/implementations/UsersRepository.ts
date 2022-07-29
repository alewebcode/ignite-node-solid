import { User } from "../../model/User";
import { IUsersRepository, ICreateUserDTO } from "../IUsersRepository";

class UsersRepository implements IUsersRepository {
  private users: User[];

  private static INSTANCE: UsersRepository;

  private constructor() {
    this.users = [];
  }

  public static getInstance(): UsersRepository {
    if (!UsersRepository.INSTANCE) {
      UsersRepository.INSTANCE = new UsersRepository();
    }

    return UsersRepository.INSTANCE;
  }

  create({ name, email }: ICreateUserDTO): User {
    // Complete aqui
    const user = new User();

    const { id } = user;

    Object.assign(user, {
      id,
      admin: false,
      name,
      email,
      created_at: new Date(),
      updated_at: new Date(),
    });

    // const insertUser = {};
    this.users.push(user);

    return user;
  }

  findById(id: string): User | undefined {
    // Complete aqui
    const user = this.users.find((elem) => {
      return elem.id === id;
    });

    return user;
  }

  findByEmail(email: string): User | undefined {
    // Complete aqui

    const findUserEmail = this.users.find((elem) => {
      return elem.email === email;
    });

    return findUserEmail;
  }

  turnAdmin(receivedUser: User): User {
    // Complete aqui
    const { id } = receivedUser;

    const findUser = this.users.find((elem) => {
      return elem.id === id;
    });

    const user = Object.assign(findUser, {
      admin: true,
      updated_at: new Date(),
    });

    return user;
  }

  list(): User[] {
    // Complete aqui
    return this.users;
  }
}

export { UsersRepository };
