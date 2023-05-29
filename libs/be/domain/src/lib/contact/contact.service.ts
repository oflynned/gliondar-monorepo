import { Injectable } from '@nestjs/common';
import { curatedUsers, User } from '@gliondar/be/mock-data';

@Injectable()
export class ContactService {
  constructor() {}

  async getContacts(): Promise<User[]> {
    return curatedUsers;
  }

  async getContactById(id: string): Promise<User | null> {
    const user = curatedUsers.find((user) => user.id === id);

    return user ?? null;
  }
}
