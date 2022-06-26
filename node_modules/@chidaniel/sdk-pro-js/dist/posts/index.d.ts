import { Base } from "src/base";
import { NewPost, Post } from "./types";
export declare class Posts extends Base {
    getPostById(id: number): Promise<Post>;
    getPosts(): Promise<Post[]>;
    createPost(newPost: NewPost): Promise<Post>;
}
