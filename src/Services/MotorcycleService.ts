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

  //   public async findAll() {
  //     const carODM = new CarODM();
  //     const findCars = await carODM.findAll();
  //     const allCars = findCars.map((car) => this.createCarDomain(car));
  //     return allCars;
  //   }

  //   public async findById(id: string) {
  //     const carODM = new CarODM();
  //     const findCar = await carODM.findById(id);
  //     return this.createCarDomain(findCar);
  //   }

//   public async update(id: string, car: ICar) {
//     const carODM = new CarODM();
//     const updateCar = await carODM.update(id, car);
//     return this.createCarDomain(updateCar);
//   }
}