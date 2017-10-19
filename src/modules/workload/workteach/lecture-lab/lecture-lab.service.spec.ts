import { Test } from '@nestjs/testing';
import { LectureLabsService } from './lecture-lab.service';
import { Observable } from 'rxjs';
import { LectureLabsProviders } from './lecture-lab.providers';
import { DatabaseModule } from '../../common/database/database.module';

describe('Workteach Bachelor Teach Service', () => {
  let lectureLabsService: LectureLabsService;

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      components: [
        LectureLabsService,
        ...LectureLabsProviders,
      ],
      modules: [
        DatabaseModule,
      ],
    }).compile();
    lectureLabsService = module.get<LectureLabsService>(LectureLabsService);
  });
  describe('findAll', () => {
    it('should return an array of Workteach Bachelor Teach', async () => {
      const want = [];
      lectureLabsService.findAll().subscribe((result) => {
        expect(result).toEqual(want);
      });
    });
  });
  describe('create', () => {
    it('should create Workteach Bachelor Teach', async () => {
      const want = {};
      lectureLabsService.create(want).subscribe((result) => {
        expect(result).toEqual(want);
      });
    });
  });
});