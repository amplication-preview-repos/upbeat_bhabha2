import { CommentCreateNestedManyWithoutAuthorsInput } from "./CommentCreateNestedManyWithoutAuthorsInput";
import { BlogPostCreateNestedManyWithoutAuthorsInput } from "./BlogPostCreateNestedManyWithoutAuthorsInput";

export type AuthorCreateInput = {
  email?: string | null;
  bio?: string | null;
  name?: string | null;
  comments?: CommentCreateNestedManyWithoutAuthorsInput;
  blogPosts?: BlogPostCreateNestedManyWithoutAuthorsInput;
};
