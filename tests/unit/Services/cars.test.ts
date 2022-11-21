import { expect } from 'chai';
import sinon from 'sinon';
import { Model } from 'mongoose';
import { carInput, carOutput, carUpdated, updateCar } from './mocks/mockCar';
import CarService from '../../../src/Services/CarService';

describe('Verifica rotas de carros', function () {
  afterEach(function () { sinon.restore(); });

  it('Carro é cadastrado com SUCESSO na rota POST /cars', async function () {
    sinon.stub(Model, 'create').resolves(carOutput);

    const service = new CarService();
    const result = await service.create(carInput);

    expect(result).to.be.deep.equal(carOutput);
  });

  it('Verifica se busca todos os carros na rota GET /cars', async function () {
    sinon.stub(Model, 'find').resolves([]);

    const service = new CarService();
    const result = await service.findAll();

    expect(result).to.be.deep.equal([]);
  });

  it('Verifica se busca o carro pelo ID na rota GET /cars/:id', async function () {
    sinon.stub(Model, 'findOne').resolves(carOutput);

    const service = new CarService();
    const result = await service.findById('634852326b35b59438fbea2f');

    expect(result).to.be.deep.equal(carOutput);
  });

  it('Verifica se é possível atualizar o carro pelo ID na rota PUT /cars/:id', async function () {
    sinon.stub(Model, 'findByIdAndUpdate').resolves(carUpdated);

    const service = new CarService();
    const result = await service.update('634852326b35b59438fbea2f', updateCar);

    expect(result).to.be.deep.equal(carUpdated);
  });
});
