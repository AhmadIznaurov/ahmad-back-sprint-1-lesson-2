import { BlogEntity } from '../drivers/types/driver';
import { PostEntity } from '../rides/types/ride';

let blogs: BlogEntity[] = [];
let posts: PostEntity[] = [];

export const inMemoryDb = {
    getBlogs: () => [...blogs],
    findBlogById: (id: string) => blogs.find(b => b.id === id),
    addBlog: (blog: BlogEntity) => blogs.push(blog),
    updateBlog: (id: string, data: Partial<BlogEntity>) => {
        const idx = blogs.findIndex(b => b.id === id);
        if(idx !== -1) {
            blogs[idx] = { ...blogs[idx], ...data };
            return true;
        }
        return false;
    },
    deleteBlog: (id: string) => {
        const lenBefore = blogs.length;
        blogs = blogs.filter(b => b.id !== id);
        posts = posts.filter(p => p.blogId !== id);
        return lenBefore > blogs.length;
    },
    clearAll: () => {
        blogs = [];
        posts = [];
    },
    getPosts: () => [...posts],
    findPostById: (id: string) => posts.find(p => p.id === id),
    addPost: (post: PostEntity) => posts.push(post),
    updatePost: (id: string, data: Partial<PostEntity>) => {
        const idx = posts.findIndex(p => p.id === id);
        if(idx !== -1) {
            posts[idx] = { ...posts[idx], ...data };
            return true;
        }
        return false;
    },
    deletePost: (id: string) => {
        const lenBefore = posts.length;
        posts = posts.filter(p => p.id !== id);
        return lenBefore > posts.length;
    }
};












