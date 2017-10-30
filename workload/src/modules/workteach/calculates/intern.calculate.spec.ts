import { Test } from '@nestjs/testing';
import { InternCalculate } from './intern.calculate';

describe('Thesis Calculate', () => {
  let internCalculate: InternCalculate;
  beforeEach(async () => {
    const module = await Test.createTestingModule({
      components: [
        InternCalculate,
      ],
    }).compile();
    internCalculate = module.get<InternCalculate>(InternCalculate);
  });
  describe('calculate', () => {
    it('should return result of internShip supervisor', () => {
      const input = {
        countStudent: 50,
        type: 'supervisor',
        courseType: 'internShip',
        teachers: [{}, {}],
      };
      const want = {
        countStudent: 50,
        type: 'supervisor',
        courseType: 'internShip',
        teachers: [
          { point: 12.5 },
          { point: 12.5 },
        ],
      };
      expect(internCalculate.calculate(input)).toEqual(want);
    });
    it('should return result of internShip instructor', () => {
      const input = {
        countStudent: 50,
        type: 'instructor',
        courseType: 'internShip',
        teachers: [{}, {}],
      };
      const want = {
        countStudent: 50,
        type: 'instructor',
        courseType: 'internShip',
        teachers: [
          { point: 1 },
          { point: 1 },
        ],
      };
      expect(internCalculate.calculate(input)).toEqual(want);
    });
    it('should return result of cooperative supervisor', () => {
      const input = {
        countStudent: 50,
        type: 'supervisor',
        courseType: 'cooperative',
        teachers: [{}, {}],
      };
      const want = {
        countStudent: 50,
        type: 'supervisor',
        courseType: 'cooperative',
        teachers: [
          { point: 25 },
          { point: 25 },
        ],
      };
      expect(internCalculate.calculate(input)).toEqual(want);
    });
    it('should return result of cooperative instructor', () => {
      const input = {
        countStudent: 50,
        type: 'instructor',
        courseType: 'cooperative',
        teachers: [{}, {}],
      };
      const want = {
        countStudent: 50,
        type: 'instructor',
        courseType: 'cooperative',
        teachers: [
          { point: 1 },
          { point: 1 },
        ],
      };
      expect(internCalculate.calculate(input)).toEqual(want);
    });
  });
});
