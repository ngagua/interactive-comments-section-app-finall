export interface Comments {
  id?: number;
  content: string;
  createdAt: string;
  score: number;
  user: User;
  replyingTo?: string;
  replies: Comments[];
}

export interface User {
  image: Image;
  username: string;
}

export interface Image {
  png: string;
  webp: string;
}

export interface Data {
  currentUser: User;
  comments: Comments[];
}

export interface ScoresEvent {
  id: number;
  type: string
}