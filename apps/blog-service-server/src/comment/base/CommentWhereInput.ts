/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { StringFilter } from "../../util/StringFilter";
import { Type } from "class-transformer";
import { IsOptional, ValidateNested } from "class-validator";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { AuthorWhereUniqueInput } from "../../author/base/AuthorWhereUniqueInput";
import { BlogPostWhereUniqueInput } from "../../blogPost/base/BlogPostWhereUniqueInput";

@InputType()
class CommentWhereInput {
  @ApiProperty({
    required: false,
    type: StringFilter,
  })
  @Type(() => StringFilter)
  @IsOptional()
  @Field(() => StringFilter, {
    nullable: true,
  })
  id?: StringFilter;

  @ApiProperty({
    required: false,
    type: StringNullableFilter,
  })
  @Type(() => StringNullableFilter)
  @IsOptional()
  @Field(() => StringNullableFilter, {
    nullable: true,
  })
  content?: StringNullableFilter;

  @ApiProperty({
    required: false,
    type: () => AuthorWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => AuthorWhereUniqueInput)
  @IsOptional()
  @Field(() => AuthorWhereUniqueInput, {
    nullable: true,
  })
  author?: AuthorWhereUniqueInput;

  @ApiProperty({
    required: false,
    type: () => BlogPostWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => BlogPostWhereUniqueInput)
  @IsOptional()
  @Field(() => BlogPostWhereUniqueInput, {
    nullable: true,
  })
  blogPost?: BlogPostWhereUniqueInput;
}

export { CommentWhereInput as CommentWhereInput };
