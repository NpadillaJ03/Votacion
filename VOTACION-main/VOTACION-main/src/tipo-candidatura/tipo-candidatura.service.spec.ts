import { Test, TestingModule } from '@nestjs/testing';
import { TipoCandidaturaService } from './tipo-candidatura.service';

describe('TipoCandidaturaService', () => {
  let service: TipoCandidaturaService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TipoCandidaturaService],
    }).compile();

    service = module.get<TipoCandidaturaService>(TipoCandidaturaService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
