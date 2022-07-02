import { registerEnumType } from '@nestjs/graphql';

export enum PluginStatus {
    Verified = "Verified",
    Unverified = "Unverified",
    Passing = "Passing",
    Failing = "Failing"
}


registerEnumType(PluginStatus, { name: 'PluginStatus', description: undefined })
