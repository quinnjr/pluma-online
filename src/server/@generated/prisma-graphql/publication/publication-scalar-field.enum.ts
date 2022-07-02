import { registerEnumType } from '@nestjs/graphql';

export enum PublicationScalarFieldEnum {
    id = "id",
    authors = "authors",
    publishedYear = "publishedYear",
    title = "title",
    journal = "journal",
    journalVolume = "journalVolume",
    journalIssue = "journalIssue",
    pageRange = "pageRange",
    url = "url",
    doi = "doi",
    isNew = "isNew"
}


registerEnumType(PublicationScalarFieldEnum, { name: 'PublicationScalarFieldEnum', description: undefined })
