import Motorcycle from '../Domains/Motorcycle';
import IMotorcycle from '../Interfaces/IMotorcycle';
import MotorcycleODM from '../Models/MotorcycleODM';

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
    const findMotorcycle = await motorcycleODM.findById(id);
    return this.createMotorcycleDomain(findMotorcycle);
  }

  // public async update(id: string, car: ICar) {
  //   const carODM = new CarODM();
  //   const updateCar = await carODM.update(id, car);
  //   return this.createCarDomain(updateCar);
  // }
}