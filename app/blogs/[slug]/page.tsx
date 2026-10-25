import React from 'react';
import { notFound } from 'next/navigation';
import { getAllBlogPosts, getBlogPostBySlug } from '@/data/tours';
import BlogPostDetail from '@/components/blog/BlogPostDetail';

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const blogs = getAllBlogPosts();
  const params = blogs.map((blog) => ({
    slug: blog.slug,
  }));
  params.push({ slug: 'bali-asri-tour-officially-recognized-as-an-asita-member' });
  return params;
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const blog = getBlogPostBySlug(slug);

  if (!blog) {
    return {
      title: 'Blog Article Not Found',
    };
  }

  return {
    title: blog.title,
    description: blog.excerpt,
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const blog = getBlogPostBySlug(slug);

  if (!blog) {
    notFound();
  }

  return <BlogPostDetail blog={blog} />;
}
