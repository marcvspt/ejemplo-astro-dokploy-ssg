export interface BlogPostData {
    title: string;
    excerpt: string;
    date: Date;
    updated?: Date;
    readTime: string;
    category: string;
    tags: string[];
    image: string;
    draft?: boolean;
    featured?: boolean;
}

export interface BlogCardData extends BlogPostData {
    slug: string;
}
