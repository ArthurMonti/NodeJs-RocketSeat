import { Response, Request } from "express";
import { container } from "tsyringe";
import { CreateUserUseCase } from "./CreateUserUseCase";

class CreateUserController {
  async handle(request: Request, response: Response) {
    const { name, password, email, driver_licence } = request.body;

    const createUserUseCase = container.resolve(CreateUserUseCase);
    await createUserUseCase.execute({
      name,
      password,
      email,
      driver_licence,
    });

    return response.status(201).send();
  }
}

export { CreateUserController };
