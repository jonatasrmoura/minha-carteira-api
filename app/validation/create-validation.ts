import { schema, rules } from '@ioc:Adonis/Core/Validator';

export const createUserValidation = schema.create({
  name: schema.string({ trim: true }),
  email: schema.string({trim: true}, [
    rules.email({
      sanitize: true,
      ignoreMaxLength: true,
      domainSpecificValidation: true,
    })
  ]),
  password: schema.string({ trim: true }),
});
