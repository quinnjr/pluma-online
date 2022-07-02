import { registerEnumType } from '@nestjs/graphql';

export enum CommentScalarFieldEnum {
    id = "id",
    authorId = "authorId",
    content = "content",
    parentId = "parentId",
    pluginId = "pluginId",
    createdAt = "createdAt",
    updatedAt = "updatedAt"
}


registerEnumType(CommentScalarFieldEnum, { name: 'CommentScalarFieldEnum', description: undefined })
