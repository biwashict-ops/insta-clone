import { Injectable } from "@nestjs/common";
import { User } from "./entities/user.entity";

@Injectable()
export class UsersService {
  private users: User[] = [];
  private idCounter = 1;

  async findByUsername(username: string): Promise<User | undefined> {
    return this.users.find(
      (user) =>
        user.username === username ||
        user.email === username ||
        user.phoneNumber === username,
    );
  }

  async findByEmail(email: string): Promise<User | undefined> {
    return this.users.find((user) => user.email === email);
  }

  async findById(id: string): Promise<User | undefined> {
    return this.users.find((user) => user.id === id);
  }

  async create(userData: Partial<User>): Promise<User> {
    const user: User = {
      id: String(this.idCounter++),
      username: userData.username!,
      email: userData.email!,
      fullName: userData.fullName!,
      password: userData.password!,
      phoneNumber: userData.phoneNumber,
      createdAt: new Date(),
      updatedAt: new Date(),
    };
    this.users.push(user);
    return user;
  }

  async getAllUsers(): Promise<User[]> {
    return this.users.map(({ password, ...user }) => user as User);
  }
}
