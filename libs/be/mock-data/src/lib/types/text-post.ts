import { User } from './user';

export class TextPost {
  constructor(
    readonly id: string,
    readonly createdAt: Date,
    readonly text: string,
    readonly createdBy: User
  ) {}
}
