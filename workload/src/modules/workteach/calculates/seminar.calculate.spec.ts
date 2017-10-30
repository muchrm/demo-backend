import { Test } from '@nestjs/testing';
import { SeminarCalculate } from './seminar.calculate';

describe('Thesis Calculate', () => {
  let seminarCalculate: SeminarCalculate;
  beforeEach(async () => {
    const module = await Test.createTestingModule({
      components: [
        SeminarCalculate,
      ],
    }).compile();
    seminarCalculate = module.get<SeminarCalculate>(SeminarCalculate);
  });
  describe('calculate', () => {
    it('should return result of seminar without jude', () => {
      const input = {
        teachers: [
          { appointment: 'advisor' },
          { appointment: 'instructor' },
          { appointment: 'lecturer' },
        ],
      };
      const want = {
        teachers: [
          { appointment: 'advisor', point: 1 },
          { appointment: 'instructor', point: 1 },
          { appointment: 'lecturer', point: 0.2 },
        ],
      };
      expect(seminarCalculate.calculate(input)).toEqual(want);
    });

    it('should return result of seminar jude no exceed limit', () => {
      const input = {
        teachers: [
          { appointment: 'jude' },
          { appointment: 'jude' },
          { appointment: 'jude' },
          { appointment: 'jude' },
        ],
      };
      const want = {
        teachers: [
          { appointment: 'jude', point: 0.1 },
          { appointment: 'jude', point: 0.1 },
          { appointment: 'jude', point: 0.1 },
          { appointment: 'jude', point: 0.1 },
        ],
      };
      expect(seminarCalculate.calculate(input)).toEqual(want);
    });

    it('should return result of seminar jude  exceed limit', () => {
      const input = {
        teachers: [
          { appointment: 'jude' },
          { appointment: 'jude' },
          { appointment: 'jude' },
          { appointment: 'jude' },
          { appointment: 'jude' },
        ],
      };
      const want = {
        teachers: [
          { appointment: 'jude', point: 0.08 },
          { appointment: 'jude', point: 0.08 },
          { appointment: 'jude', point: 0.08 },
          { appointment: 'jude', point: 0.08 },
          { appointment: 'jude', point: 0.08 },
        ],
      };
      expect(seminarCalculate.calculate(input)).toEqual(want);
    });
  });
});
