import { DateTime } from 'luxon'
import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'
import { v4 as uuid } from 'uuid';

export default class User extends BaseModel {
  @column({ isPrimary: true })
  public id: string;

  @column()
  public name: string;

  @column()
  public email: string;

  @column()
  public password: string;

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime;

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime;

  constructor() {
    super();

    if (!this.id) {
      this.id = uuid();
    }
  }

  public emailVerification(email: string) {
    if (this.email === email) {
      throw new Error('Email já cadastrado!');
    }
  }
}
