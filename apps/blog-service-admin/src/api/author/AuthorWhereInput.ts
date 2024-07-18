import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { CommentListRelationFilter } from "../comment/CommentListRelationFilter";
import { BlogPostListRelationFilter } from "../blogPost/BlogPostListRelationFilter";

export type AuthorWhereInput = {
  id?: StringFilter;
  email?: StringNullableFilter;
  bio?: StringNullableFilter;
  name?: StringNullableFilter;
  comments?: CommentListRelationFilter;
  blogPosts?: BlogPostListRelationFilter;
};
