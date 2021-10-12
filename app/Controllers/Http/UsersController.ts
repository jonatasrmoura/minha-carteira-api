import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext';

import { CreateUserService } from 'App/services/UserService/User.service';
import { createUserValidation  } from 'App/validation/create-validation';

export default class UsersController {
  public async create({ request, response }: HttpContextContract) {
    try {
      const createUser = new CreateUserService();

      await request.validate({ schema: createUserValidation });

      const user = request.only(['name', 'email', 'password']);

      const result = await createUser.execute(user);

      if (result.err) throw new Error(result.err);

      return response.status(201).json(result);
    } catch(err) {
      return response.status(400).json({ err: err.message });
    }
  }
}
