import { Plugin } from '@nestjs/apollo';
import {
  ApolloServerPlugin,
  GraphQLRequestListener,
  GraphQLRequestContext
} from 'apollo-server-plugin-base';

@Plugin()
export class LoggingPlugin implements ApolloServerPlugin {
  public async requestDidStart(
    requestContext: GraphQLRequestContext
  ): Promise<GraphQLRequestListener> {
    console.log(requestContext.request.variables);
    return {
      async willSendResponse() {
        console.log('will send response');
      }
    };
  }
}
