import { expect } from 'chai';
import sinon from 'sinon';
import { Model } from 'mongoose';
import { motorcycleInput, motorcycleOutput, updateMotorcycle,
  motorcycleUpdated } from './mocks/mockMotorcycle';
import MotorcycleService from '../../../src/Services/MotorcycleService';

describe('Verifica rotas de motocicletas', function () {
  const service = new MotorcycleService();
  afterEach(function () { sinon.restore(); });

  it('Motocicleta é cadastrada com SUCESSO na rota POST /motorcycles', async function () {
    sinon.stub(Model, 'create').resolves(motorcycleOutput);

    const result = await service.create(motorcycleInput);    

    expect(result).to.be.deep.equal(motorcycleOutput);
  });

  it('Verifica se busca todas as motocicletas na rota GET /motorcycles', async function () {
    sinon.stub(Model, 'find').resolves([]);

    const result = await service.findAll();

    expect(result).to.be.deep.equal([]);
  });

  it('Verifica se busca o carro pelo ID na rota GET /cars/:id', async function () {
    sinon.stub(Model, 'findOne').resolves(motorcycleOutput);

    const result = await service.findById('6348513f34c397abcad040b2');

    expect(result).to.be.deep.equal(motorcycleOutput);
  });

  it('Verifica se é possível atualizar o carro pelo ID na rota PUT /cars/:id', async function () {
    sinon.stub(Model, 'findByIdAndUpdate').resolves(motorcycleUpdated);

    const result = await service.update('634852326b35b59438fbea2f', updateMotorcycle);

    expect(result).to.be.deep.equal(motorcycleUpdated);
  });
});
