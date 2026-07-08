export interface CreateBlogInput {
    name: string;
    description?: string;
    websiteUrl: string;
}

export interface UpdateBlogInput extends Partial<Omit<CreateBlogInput, 'description'>> {}