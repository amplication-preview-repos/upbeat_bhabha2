import { CommentCreateNestedManyWithoutBlogPostsInput } from "./CommentCreateNestedManyWithoutBlogPostsInput";
import { AuthorWhereUniqueInput } from "../author/AuthorWhereUniqueInput";

export type BlogPostCreateInput = {
  content?: string | null;
  publishedDate?: Date | null;
  title?: string | null;
  comments?: CommentCreateNestedManyWithoutBlogPostsInput;
  author?: AuthorWhereUniqueInput | null;
};
