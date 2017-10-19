import { Test } from '@nestjs/testing';
import { LectureLabsService } from './lecture-lab.service';
import { Observable } from 'rxjs';
describe('Workteach Bachelor Teach Service', () => {
  let lectureLabsService: LectureLabsService;
  beforeEach(() => {
    lectureLabsService = new LectureLabsService();
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