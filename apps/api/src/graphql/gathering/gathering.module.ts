import { Module } from '@nestjs/common';
import { GatheringResolver } from './gathering.resolver';

@Module({ providers: [GatheringResolver] })
export class GatheringModule {}
