import { Test } from '@nestjs/testing';
import { ThesisCalculate } from './thesis.calculate';

describe('Thesis Calculate', () => {
  let thesisCalculate: ThesisCalculate;
  beforeEach(async () => {
    const module = await Test.createTestingModule({
      components: [
        ThesisCalculate,
      ],
    }).compile();
    thesisCalculate = module.get<ThesisCalculate>(ThesisCalculate);
  });
  describe('calculate', () => {
    it('should return result of thesis', () => {
      const input = {
        type: 'thesis',
        credit: 6,
        teachers: [
          { appointment: 'advisor' },
          { appointment: 'coAdvisor' },
          { appointment: 'coAdvisor' },
        ],
      };
      const want = {
        type: 'thesis',
        credit: 6,
        teachers: [
          { appointment: 'advisor', point: 6 },
          { appointment: 'coAdvisor', point: 1 },
          { appointment: 'coAdvisor', point: 1 },
        ],
      };
      expect(thesisCalculate.calculate(input)).toEqual(want);
    });
    it('should return result of theses', () => {
      const input = {
        type: 'theses',
        credit: 3,
        teachers: [
          { appointment: 'advisor' },
          { appointment: 'coAdvisor' },
          { appointment: 'coAdvisor' },
        ],
      };
      const want = {
        type: 'theses',
        credit: 3,
        teachers: [
          { appointment: 'advisor', point: 3 },
          { appointment: 'coAdvisor', point: 1 },
          { appointment: 'coAdvisor', point: 1 },
        ],
      };
      expect(thesisCalculate.calculate(input)).toEqual(want);
    });
  });
});
