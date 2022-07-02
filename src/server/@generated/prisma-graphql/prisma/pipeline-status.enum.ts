import { registerEnumType } from '@nestjs/graphql';

export enum PipelineStatus {
    Completed = "Completed",
    InProgress = "InProgress",
    Future = "Future"
}


registerEnumType(PipelineStatus, { name: 'PipelineStatus', description: undefined })
