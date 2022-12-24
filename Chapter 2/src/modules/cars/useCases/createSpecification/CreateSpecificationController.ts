import { Response, Request } from "express";
import { CreateSpecificationUseCase } from "./CreateSpecificationUseCase";

class CreateSpecificationController {
  constructor(private createCategoryUseCases: CreateSpecificationUseCase) {}

  handle(request: Request, response: Response) {
    const { name, description } = request.body;

    this.createCategoryUseCases.execute({ name, description });

    return response.status(201).send();
  }
}

export { CreateSpecificationController };
