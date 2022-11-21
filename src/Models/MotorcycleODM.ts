import { Model, Schema, model, models } from 'mongoose';
import IMotorcycle from '../Interfaces/IMotorcycle';

export default class MotorcycleODM {
  private schema: Schema;
  private model: Model<IMotorcycle>;

  constructor() {
    this.schema = new Schema<IMotorcycle>({
      model: { type: String, required: true },
      year: { type: Number, required: true },
      color: { type: String, required: true },
      status: { type: Boolean, required: false },
      buyValue: { type: Number, required: true },
      category: { type: String, required: true },
      engineCapacity: { type: Number, required: true },
    });
    this.model = models.Motorcycle || model('Motorcycle', this.schema);
  }

  public async create(motorcycle: IMotorcycle): Promise<IMotorcycle> {
    return this.model.create({ ...motorcycle });
  }

  //   public async findAll(): Promise<ICar[]> {
  //     return this.model.find({});
  //   }

  //   public async findById(id: string): Promise<ICar | null> {
  //     return this.model.findOne({ _id: id });
  //   }

//   public async update(id: string, car: ICar): Promise<ICar | null> {
//     return this.model.findByIdAndUpdate({ _id: id }, { ...car }, { new: true });
//   }
}