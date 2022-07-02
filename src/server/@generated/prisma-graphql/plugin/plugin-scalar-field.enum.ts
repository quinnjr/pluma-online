import { registerEnumType } from '@nestjs/graphql';

export enum PluginScalarFieldEnum {
    id = "id",
    name = "name",
    categoryId = "categoryId",
    description = "description",
    githubUrl = "githubUrl",
    languageId = "languageId",
    rating = "rating",
    authorId = "authorId",
    verification = "verification",
    tags = "tags",
    createdAt = "createdAt",
    updatedAt = "updatedAt"
}


registerEnumType(PluginScalarFieldEnum, { name: 'PluginScalarFieldEnum', description: undefined })
