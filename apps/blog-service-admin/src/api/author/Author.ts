import { Comment } from "../comment/Comment";
import { BlogPost } from "../blogPost/BlogPost";

export type Author = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  email: string | null;
  bio: string | null;
  name: string | null;
  comments?: Array<Comment>;
  blogPosts?: Array<BlogPost>;
};
