import { Test } from '@nestjs/testing';
import { Observable } from 'rxjs/Rx';
import { DatabaseModule } from '../../common/database/database.module';
import { InternCalculate } from '../calculates/intern.calculate';
import { InternService } from './intern.service';
import { InternProviders } from '../providers/intern.providers';

describe('Intern Service', () => {
  let internService: InternService;

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      components: [
        InternService,
        InternCalculate,
        ...InternProviders,
      ],
      modules: [
        DatabaseModule,
      ],
    }).compile();
    internService = module.get<InternService>(InternService);
  });
  describe('findAll', () => {
    it('should return an array of Intern', async () => {
      const want = [];
      internService.findAll().subscribe((result) => {
        expect(result).toEqual(want);
      });
    });
  });
  describe('create',() => {
    it('should create Intern', async () => {
      const want = {
        countStudent:50,
        type:'supervisor',
        courseType:'internShip',
        teachers:[
          {},
          {}
        ]
      };
      internService.create(want).subscribe((result) => {
        expect(result).toEqual({});
      });
    });
  });
});
