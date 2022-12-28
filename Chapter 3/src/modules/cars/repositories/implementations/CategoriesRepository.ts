import { getRepository, Repository } from "typeorm";
import { Category } from "../../entities/Category";
import {
  ICategoriesRepository,
  ICreateCategoryDTO,
} from "../ICategoriesRepository";

class CategoriesRepository implements ICategoriesRepository {
  private repository: Repository<Category>;

  constructor() {
    this.repository = getRepository(Category);
  }

  async create({ name, description }: ICreateCategoryDTO): Promise<void> {
    const category = this.repository.create({
      description,
      name,
    });
    await this.repository.save(category);
  }

  list(): Promise<Category[]> {
    const categories = this.repository.find();
    return categories;
  }

  findByName(name: string): Promise<Category | undefined> {
    const category = this.repository.findOne({ name });

    return category;
  }
}

export { CategoriesRepository };
