import { AppError } from "../../../errors/AppError";
import { ISpecificationsRepository } from "../repositories/ISpecificationsRepository";

interface IRequest {
  name: string;
  description: string;
}

class CreateSpecificationService {
  constructor(private specificationsRepository: ISpecificationsRepository) {}
  execute({ name, description }: IRequest) {
    const specificationAlreadyExists =
      this.specificationsRepository.findByName(name);

    if (specificationAlreadyExists) {
      throw new AppError("Specification alread exists!");
    }
    this.specificationsRepository.create({ name, description });
  }
}

export { CreateSpecificationService };
