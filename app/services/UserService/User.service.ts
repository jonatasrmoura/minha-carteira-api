import { CreateUserDtos } from "App/dtos/User-dtos/create-user.dtos";
import User from "App/Models/User";
import { ServiceResponse } from "shared/utils/service-response";

export class CreateUserService {
  public async execute(userDto: CreateUserDtos): Promise<ServiceResponse<boolean | null>> {
    try {
      await User.create(userDto);

      return { result: true, err: null };
    } catch(err) {
      throw new Error(`[Error create user] ${err}`);
    }
  }
}
