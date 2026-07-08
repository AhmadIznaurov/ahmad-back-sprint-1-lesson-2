import { inMemoryDb } from "../../db/in-memory.db";
import { CreateBlogInput, UpdateBlogInput } from "../dto/driver.input";
import { BlogEntity } from "../types/driver";

// Экспортируем сразу готовый экземпляр объекта
export const DriversRepository = {
    getAll() {
        return inMemoryDb.getBlogs();
    },

    findById(id: string) {
        return inMemoryDb.findBlogById(id);
    },

    create(data: CreateBlogInput): BlogEntity {
        const blog: BlogEntity = {
            id: crypto.randomUUID(),
            ...data
        };
        inMemoryDb.addBlog(blog);
        return blog;
    },

    update(id: string, data: UpdateBlogInput): boolean {
        return inMemoryDb.updateBlog(id, data);
    },

    delete(id: string): boolean {
        return inMemoryDb.deleteBlog(id);
    },

    truncate(): void {
        inMemoryDb.clearAll();
    }
};