import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CommentCreateManyParentInput } from './comment-create-many-parent.input';

@InputType()
export class CommentCreateManyParentInputEnvelope {

    @Field(() => [CommentCreateManyParentInput], {nullable:false})
    data!: Array<CommentCreateManyParentInput>;
}
