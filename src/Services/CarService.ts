import { isValidObjectId } from 'mongoose';
import Car from '../Domains/Car';
import ICar from '../Interfaces/ICar';
import CarODM from '../Models/CarODM';
import HttpException from '../Middlewares/HttpException';

export default class CarService {
  private createCarDomain(car: ICar | null): Car | null {
    if (car) {
      return new Car(car);
    }
    return null;
  }

  public async create(car: ICar) {
    const carODM = new CarODM();
    const newCar = await carODM.create(car);
    return this.createCarDomain(newCar);
  }

  public async findAll() {
    const carODM = new CarODM();
    const findCars = await carODM.findAll();
    const allCars = findCars.map((car) => this.createCarDomain(car));
    return allCars;
  }

  public async findById(id: string) {
    const carODM = new CarODM();

    if (!isValidObjectId(id)) {        
      throw new HttpException(422, 'Invalid mongo id');
    }

    const findCar = await carODM.findById(id);

    if (!findCar) {
      throw new HttpException(404, 'Car not found');
    }

    return this.createCarDomain(findCar);
  }

  public async update(id: string, car: ICar) {
    const carODM = new CarODM();

    if (!isValidObjectId(id)) {        
      throw new HttpException(422, 'Invalid mongo id');
    }

    const updateCar = await carODM.update(id, car);

    if (!updateCar) {
      throw new HttpException(404, 'Car not found');
    }
    return this.createCarDomain(updateCar);
  }
}