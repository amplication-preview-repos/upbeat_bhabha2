import { Author } from "../author/Author";
import { BlogPost } from "../blogPost/BlogPost";

export type Comment = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  content: string | null;
  author?: Author | null;
  blogPost?: BlogPost | null;
};
