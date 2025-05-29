import React from 'react';
import Link from 'next/link';

interface BlogCardProps {
  title: string;
  excerpt: string;
  link: string;
}

const BlogCard: React.FC<BlogCardProps> = ({ title, excerpt, link }) => {
  return (
    <div className="rounded-xl shadow-md border p-4 transition hover:shadow-lg">
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-200 text-sm mb-3">{excerpt}</p>
      <Link href={link} className="text-blue-600 hover:underline text-sm font-medium">
        Read more →
      </Link>
    </div>
  );
};

export default BlogCard;
