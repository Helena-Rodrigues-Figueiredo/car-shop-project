import IVehicle from '../Interfaces/IVehicle';

export default class Car {
  protected id: string | undefined;
  protected model: string;
  protected year: number;
  protected color: string;
  protected status: boolean;
  protected buyValue: number;
  
  constructor(vehObj: IVehicle) {
    this.id = vehObj.id;
    this.model = vehObj.model;
    this.year = vehObj.year;
    this.color = vehObj.color;
    this.status = vehObj.status || false;
    this.buyValue = vehObj.buyValue;
  }
  
  public setId(id: string) {
    this.id = id;
  }
  
  public getId() {
    return this.id;
  }
  
  public setModel(model: string) {
    this.model = model;
  }
  
  public getModel() {
    return this.model;
  }
  
  public setYear(year: number) {
    this.year = year;
  }
  
  public getYear() {
    return this.year;
  }
  
  public setColor(color: string) {
    this.color = color;
  }
  
  public getColor() {
    return this.color;
  }
  
  public setStatus(status: boolean) {
    this.status = status;
  }
  
  public getStatus() {
    return this.status;
  }
}
