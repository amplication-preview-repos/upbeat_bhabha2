import { CommentUpdateManyWithoutAuthorsInput } from "./CommentUpdateManyWithoutAuthorsInput";
import { BlogPostUpdateManyWithoutAuthorsInput } from "./BlogPostUpdateManyWithoutAuthorsInput";

export type AuthorUpdateInput = {
  email?: string | null;
  bio?: string | null;
  name?: string | null;
  comments?: CommentUpdateManyWithoutAuthorsInput;
  blogPosts?: BlogPostUpdateManyWithoutAuthorsInput;
};
