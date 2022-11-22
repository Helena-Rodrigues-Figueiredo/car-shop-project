import { isValidObjectId } from 'mongoose';
import Motorcycle from '../Domains/Motorcycle';
import IMotorcycle from '../Interfaces/IMotorcycle';
import MotorcycleODM from '../Models/MotorcycleODM';
import HttpException from '../Middlewares/HttpException';

const invalidMongoId = 'Invalid mongo id';
const motorcycleNotFound = 'Motorcycle not found';

export default class MotorcycleService {
  private createMotorcycleDomain(motorcycle: IMotorcycle | null): Motorcycle | null {
    if (motorcycle) {
      return new Motorcycle(motorcycle);
    }
    return null;
  }

  public async create(motorcycle: IMotorcycle) {
    const motorcycleODM = new MotorcycleODM();
    const newCar = await motorcycleODM.create(motorcycle);
    return this.createMotorcycleDomain(newCar);
  }

  public async findAll() {
    const motorcycleODM = new MotorcycleODM();
    const findMotorcycles = await motorcycleODM.findAll();
    const allMotorcycles = findMotorcycles.map((mot) => this.createMotorcycleDomain(mot));
    return allMotorcycles;
  }

  public async findById(id: string) {
    const motorcycleODM = new MotorcycleODM();

    if (!isValidObjectId(id)) {        
      throw new HttpException(422, invalidMongoId);
    }

    const findMotorcycle = await motorcycleODM.findById(id);

    if (!findMotorcycle) {
      throw new HttpException(404, motorcycleNotFound);
    }

    return this.createMotorcycleDomain(findMotorcycle);
  }

  public async update(id: string, motorcycle: IMotorcycle) {
    const motorcyclesODM = new MotorcycleODM();

    if (!isValidObjectId(id)) {        
      throw new HttpException(422, invalidMongoId);
    }

    const updateMotorcycles = await motorcyclesODM.update(id, motorcycle);

    if (!updateMotorcycles) {
      throw new HttpException(404, motorcycleNotFound);
    }
    return this.createMotorcycleDomain(updateMotorcycles);
  }

  public async delete(id: string) {
    const motorcycleODM = new MotorcycleODM();

    if (!isValidObjectId(id)) {        
      throw new HttpException(422, invalidMongoId);
    }

    const deleteMotorcycle = await motorcycleODM.delete(id);

    if (!deleteMotorcycle) {
      throw new HttpException(404, motorcycleNotFound);
    }
  }
}