import { AuthorWhereUniqueInput } from "../author/AuthorWhereUniqueInput";
import { BlogPostWhereUniqueInput } from "../blogPost/BlogPostWhereUniqueInput";

export type CommentUpdateInput = {
  content?: string | null;
  author?: AuthorWhereUniqueInput | null;
  blogPost?: BlogPostWhereUniqueInput | null;
};
