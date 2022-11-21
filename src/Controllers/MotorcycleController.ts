import { NextFunction, Request, Response } from 'express';
import { isValidObjectId } from 'mongoose';
import IMotorcycle from '../Interfaces/IMotorcycle';
import MotorcycleService from '../Services/MotorcycleService';

export default class MotorcycleController {
  private req: Request;
  private res: Response;
  private next: NextFunction;
  private service: MotorcycleService;

  constructor(req: Request, res: Response, next: NextFunction) {
    this.req = req;
    this.res = res;
    this.next = next;
    this.service = new MotorcycleService();
  }

  public async create() {
    const motorcycle: IMotorcycle = {
      model: this.req.body.model,
      year: this.req.body.year,
      color: this.req.body.color,
      status: this.req.body.status,
      buyValue: this.req.body.buyValue,
      category: this.req.body.category,
      engineCapacity: this.req.body.engineCapacity,
    };

    try {
      const newMotorcycle = await this.service.create(motorcycle);
      return this.res.status(201).json(newMotorcycle);
    } catch (error) {
      this.next(error);
    }
  }

  public async findAll() {
    try {
      const findMotorcycles = await this.service.findAll();
      return this.res.status(200).json(findMotorcycles);
    } catch (error) {
      this.next(error);
    }
  }

  public async findById() {
    const { id } = this.req.params;
    try {
      if (!isValidObjectId(id)) {
        return this.res.status(422).json({ message: 'Invalid mongo id' });
      }

      const findMotorcycle = await this.service.findById(id);

      if (!findMotorcycle) {
        return this.res.status(404).json({ message: 'Motorcycle not found' });
      }

      return this.res.status(200).json(findMotorcycle);
    } catch (error) {
      this.next(error);
    }
  }

  //   public async update() {
  //     const { id } = this.req.params;
  //     try {
  //       if (!isValidObjectId(id)) {
  //         return this.res.status(422).json({ message: 'Invalid mongo id' });
  //       }

  //       const car: ICar = { ...this.req.body }; 
  //       const updateCar = await this.service.update(id, car);

  //       if (!updateCar) {
  //         return this.res.status(404).json({ message: 'Car not found' });
  //       }

  //     return this.res.status(200).json(updateCar);
  //   } catch (error) {
  //     this.next(error);
  //   }
  // }
}