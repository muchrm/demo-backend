import { Test } from '@nestjs/testing';
import { Observable } from 'rxjs/Rx';
import { DatabaseModule } from '../../common/database/database.module';
import { LectureLabProviders } from '../providers/lecture-lab.providers';
import { LectureLabService } from '../services/lecture-lab.service';

describe('Workteach Bachelor Teach Service', () => {
  let lectureLabService: LectureLabService;

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      components: [
        LectureLabService,
        ...LectureLabProviders,
      ],
      modules: [
        DatabaseModule,
      ],
    }).compile();
    lectureLabService = module.get<LectureLabService>(LectureLabService);
  });
  describe('findAll', () => {
    it('should return an array of Workteach Bachelor Teach', async () => {
      const want = [];
      lectureLabService.findAll().subscribe((result) => {
        expect(result).toEqual(want);
      });
    });
  });
  describe('create', () => {
    it('should create Workteach Bachelor Teach', async () => {
      const want = {};
      lectureLabService.create(want).subscribe((result) => {
        expect(result).toEqual(want);
      });
    });
  });
});
