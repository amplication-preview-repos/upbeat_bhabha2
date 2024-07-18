import { Comment } from "../comment/Comment";
import { Author } from "../author/Author";

export type BlogPost = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  content: string | null;
  publishedDate: Date | null;
  title: string | null;
  comments?: Array<Comment>;
  author?: Author | null;
};
