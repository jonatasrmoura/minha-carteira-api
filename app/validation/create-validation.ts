/**
 * @fileoverview Criação do schema de validação para criação do cliente
 */

import { object, SchemaOf, string } from 'yup';

import { CreateUserDtos } from '../dtos/User-dtos/create-user.dtos';

const REQUIRED = 'Campo obrigatório';

const schema: SchemaOf<CreateUserDtos> = object ({
  name: string().required(REQUIRED),
  email: string().email().required(REQUIRED),
  password: string().required(REQUIRED),
});

export { schema as createUserValidation };
