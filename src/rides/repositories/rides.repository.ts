import { inMemoryDb } from '../../db/in-memory.db';
import { PostEntity } from '../types/ride';
import { CreateRideInput } from '../dto/ride.input';
import { BlogEntity } from '../../drivers/types/driver';


const driversRepo = {
    findById: (id: string): BlogEntity | undefined => inMemoryDb.findBlogById(id)
};

export const RidesRepository = {
    create(data: CreateRideInput): PostEntity | null {
        const blog = driversRepo.findById(data.blogId);
        if (!blog) return null;

        const post: PostEntity = {
            id: crypto.randomUUID(),
            ...data,
            blogName: blog.name
        };
        inMemoryDb.addPost(post);
        return post;
    },

    getAll() { return inMemoryDb.getPosts(); },
    findById(id: string) { return inMemoryDb.findPostById(id); },
    update(id: string, data: Partial<PostEntity>) { return inMemoryDb.updatePost(id, data); },
    delete(id: string) { return inMemoryDb.deletePost(id); },
    truncate() { inMemoryDb.clearAll(); }
};