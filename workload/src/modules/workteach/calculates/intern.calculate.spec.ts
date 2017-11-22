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
    it('should return result of internShip supervision', () => {
      const input = {
        countStudent: 50,
        type: 'supervision',
        courseType: 'วิชาฝึกงาน',
        teachers: [{}, {}],
      };
      const want = {
        countStudent: 50,
        type: 'supervision',
        courseType: 'วิชาฝึกงาน',
        teachers: [
          { point: 12.5 },
          { point: 12.5 },
        ],
      };
      expect(internCalculate.calculate(input)).toEqual(want);
    });
    it('should return result of internShip coordinator', () => {
      const input = {
        countStudent: 50,
        type: 'coordinator',
        courseType: 'วิชาฝึกงาน',
        teachers: [{}, {}],
      };
      const want = {
        countStudent: 50,
        type: 'coordinator',
        courseType: 'วิชาฝึกงาน',
        teachers: [
          { point: 1 },
          { point: 1 },
        ],
      };
      expect(internCalculate.calculate(input)).toEqual(want);
    });
    it('should return result of cooperative supervision', () => {
      const input = {
        countStudent: 50,
        type: 'supervision',
        courseType: 'วิชาสหกิจศึกษา',
        teachers: [{}, {}],
      };
      const want = {
        countStudent: 50,
        type: 'supervision',
        courseType: 'วิชาสหกิจศึกษา',
        teachers: [
          { point: 25 },
          { point: 25 },
        ],
      };
      expect(internCalculate.calculate(input)).toEqual(want);
    });
    it('should return result of cooperative coordinator', () => {
      const input = {
        countStudent: 50,
        type: 'coordinator',
        courseType: 'วิชาสหกิจศึกษา',
        teachers: [{}, {}],
      };
      const want = {
        countStudent: 50,
        type: 'coordinator',
        courseType: 'วิชาสหกิจศึกษา',
        teachers: [
          { point: 1 },
          { point: 1 },
        ],
      };
      expect(internCalculate.calculate(input)).toEqual(want);
    });
  });
});
