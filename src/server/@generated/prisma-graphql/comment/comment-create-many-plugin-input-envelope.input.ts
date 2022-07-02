import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CommentCreateManyPluginInput } from './comment-create-many-plugin.input';

@InputType()
export class CommentCreateManyPluginInputEnvelope {

    @Field(() => [CommentCreateManyPluginInput], {nullable:false})
    data!: Array<CommentCreateManyPluginInput>;
}
