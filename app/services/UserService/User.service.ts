import { CreateUserDtos } from "App/dtos/User-dtos/create-user.dtos";
import User from "App/Models/User";
import { ServiceResponse } from "shared/utils/service-response";
import { createUserValidation } from "App/validation/create-validation";

export class CreateUserService {
  public async execute(userDto: CreateUserDtos): Promise<ServiceResponse<boolean | null>> {
    try {
      console.log(userDto);
      const valid = createUserValidation.isValidSync(userDto);

      if (!valid) throw new Error('Dados inválidos');

      // ver se email já existe

      // const user = await User.query().whereHas('user', (userDto) => {

      // });

      return { result: true, err: null };
    } catch(err) {
      throw new Error(`[Error create user] ${err}`);
    }
  }
}
