import { CommentUpdateManyWithoutBlogPostsInput } from "./CommentUpdateManyWithoutBlogPostsInput";
import { AuthorWhereUniqueInput } from "../author/AuthorWhereUniqueInput";

export type BlogPostUpdateInput = {
  content?: string | null;
  publishedDate?: Date | null;
  title?: string | null;
  comments?: CommentUpdateManyWithoutBlogPostsInput;
  author?: AuthorWhereUniqueInput | null;
};
