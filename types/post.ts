export interface CommentDTO {
  id: string;
  content: string;
  createdAt: string;
  author: { id: string; name: string };
}

export interface PostDTO {
  id: string;
  title: string;
  slug: string;
  content: string;
  excerpt?: string | null;
  published?: boolean;
  author: { id: string; name: string };
  createdAt: string;
  updatedAt?: string;
  comments?: CommentDTO[];
}

export interface CreatePostDTO {
  title: string;
  content: string;
  slug?: string;
  excerpt?: string;
  published?: boolean;
}

export interface UpdatePostDTO {
  title?: string;
  content?: string;
  slug?: string;
  excerpt?: string;
  published?: boolean;
}
