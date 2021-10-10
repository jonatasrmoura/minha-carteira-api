import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext';

import { CreateUserService } from 'App/services/UserService/User.service';

export default class UsersController {
  public async create({ request, response }: HttpContextContract) {
    try {
      const createUser = new CreateUserService();

      const user = request.only(['name', 'email', 'password']);

      const result = await createUser.execute(user);

      console.log(result);
      if (result.err) throw new Error(result.err);

      return response.status(201).json(result);
    } catch(err) {
      return response.status(400).json({ err: err.message });
    }
  }
}
