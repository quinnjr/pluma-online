import { registerEnumType } from '@nestjs/graphql';

export enum PipelineScalarFieldEnum {
    id = "id",
    name = "name",
    description = "description",
    githubUrl = "githubUrl",
    status = "status",
    rating = "rating",
    createdAt = "createdAt",
    updatedAt = "updatedAt",
    userId = "userId"
}


registerEnumType(PipelineScalarFieldEnum, { name: 'PipelineScalarFieldEnum', description: undefined })
