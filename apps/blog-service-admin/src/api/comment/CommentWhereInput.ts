import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { AuthorWhereUniqueInput } from "../author/AuthorWhereUniqueInput";
import { BlogPostWhereUniqueInput } from "../blogPost/BlogPostWhereUniqueInput";

export type CommentWhereInput = {
  id?: StringFilter;
  content?: StringNullableFilter;
  author?: AuthorWhereUniqueInput;
  blogPost?: BlogPostWhereUniqueInput;
};
