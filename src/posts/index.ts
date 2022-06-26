import { Base } from "src/base";
import { NewPost, Post } from "./types";

const resource = 'posts'

export class Posts extends Base {
    
    getPostById(id: number): Promise<Post> {
       return this.invoke(`/${resource}/${id}`);
    }

    getPosts(): Promise<Post[]> {
        return this.invoke(`/${resource}`);
    }

    createPost(newPost: NewPost): Promise<Post> {
        return this.invoke(`/${resource}`, {
            method: "POST",
            body: JSON.stringify(newPost)
        })
    }

}