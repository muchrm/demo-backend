import { Test } from '@nestjs/testing';
import { Observable } from 'rxjs/Rx';
import { DatabaseModule } from '../../common/database/database.module';
import { ProjectAndSpecialProblemProviders } from '../providers/project-and-special-problem.providers';
import { ProjectAndSpecialProblemService } from '../services/project-and-special-problem.service';

describe('Workteach Bachelor Teach Service', () => {
  let ProjectAndSpecialProblemService: ProjectAndSpecialProblemService;

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      components: [
        ProjectAndSpecialProblemService,
        ...ProjectAndSpecialProblemProviders,
      ],
      modules: [
        DatabaseModule,
      ],
    }).compile();
    ProjectAndSpecialProblemService = module.get<ProjectAndSpecialProblemService>(ProjectAndSpecialProblemService);
  });
  describe('findAll', () => {
    it('should return an array of Workteach Bachelor Teach', async () => {
      const want = [];
      ProjectAndSpecialProblemService.findAll().subscribe((result) => {
        expect(result).toEqual(want);
      });
    });
  });
  describe('create', () => {
    it('should create Workteach Bachelor Teach', async () => {
      const want = {};
      ProjectAndSpecialProblemService.create(want).subscribe((result) => {
        expect(result).toEqual(want);
      });
    });
  });
});
