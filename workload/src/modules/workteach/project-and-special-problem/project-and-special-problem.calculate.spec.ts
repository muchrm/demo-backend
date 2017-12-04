import { Test } from '@nestjs/testing';
import { ProjectAndSpecialProblemCalculate } from './project-and-special-problem.calculate';
describe('Project And Special Problem Calculate', () => {
  let projectAndSpecialProblemCalculate: ProjectAndSpecialProblemCalculate;
  beforeEach(async () => {
    const module = await Test.createTestingModule({
      components: [
        ProjectAndSpecialProblemCalculate,
      ],
    }).compile();
    projectAndSpecialProblemCalculate = module.get<ProjectAndSpecialProblemCalculate>(ProjectAndSpecialProblemCalculate);
  });
  describe('calculate', () => {
    it('should return result of seminar without jude', () => {
      const input = {
        credit: 3,
        teachers: [
          { appointment: 'chairman' },
          { appointment: 'advisor' },
          { appointment: 'coAdvisor' },
          { appointment: 'coAdvisor' },
        ],
      };
      const want = {
        credit: 3,
        teachers: [
          { appointment: 'chairman', point: 3 },
          { appointment: 'advisor', point: 3 },
          { appointment: 'coAdvisor', point: 0.75 },
          { appointment: 'coAdvisor', point: 0.75 },
        ],
      };
      expect(projectAndSpecialProblemCalculate.calculate(input)).toEqual(want);
    });
  });
});
