import { Test } from '@nestjs/testing';
import { WorkteachBachelorTeachService } from './workteach-bachelor-teach.service';
import { Observable } from 'rxjs';
describe('Workteach Bachelor Teach Service', () => {
  let workteachBachelorTeachService: WorkteachBachelorTeachService;
  beforeEach(() => {
    workteachBachelorTeachService = new WorkteachBachelorTeachService();
  });
  describe('findAll', () => {
    it('should return an array of Workteach Bachelor Teach', async () => {
      const want = [];
      workteachBachelorTeachService.findAll().subscribe((result) => {
        expect(result).toEqual(want);
      });
    });
  });
  describe('create', () => {
    it('should create Workteach Bachelor Teach', async () => {
      const want = {};
      workteachBachelorTeachService.create(want).subscribe((result) => {
        expect(result).toEqual(want);
      });
    });
  });
});