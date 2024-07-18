import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { CommentListRelationFilter } from "../comment/CommentListRelationFilter";
import { AuthorWhereUniqueInput } from "../author/AuthorWhereUniqueInput";

export type BlogPostWhereInput = {
  id?: StringFilter;
  content?: StringNullableFilter;
  publishedDate?: DateTimeNullableFilter;
  title?: StringNullableFilter;
  comments?: CommentListRelationFilter;
  author?: AuthorWhereUniqueInput;
};
