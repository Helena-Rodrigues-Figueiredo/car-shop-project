import { expect } from 'chai';
import sinon from 'sinon';
import { Model } from 'mongoose';
import { motorcycleInput, motorcycleOutput } from './mocks/mockMotorcycle';
import MotorcycleService from '../../../src/Services/MotorcycleService';

describe('Verifica se é possível cadastrar uma motocicleta', function () {
  it('Motocicleta é cadastrada com SUCESSO', async function () {
    sinon.stub(Model, 'create').resolves(motorcycleOutput);

    const service = new MotorcycleService();
    const result = await service.create(motorcycleInput);    

    expect(result).to.be.deep.equal(motorcycleOutput);
  });
});
