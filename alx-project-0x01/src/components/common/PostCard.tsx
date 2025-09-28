import React from "react";

interface PostCardProps {
  title: string;
  excerpt?: string;
}

const PostCard: React.FC<PostCardProps> = ({ title, excerpt }) => {
  return (
    <article className="border rounded-lg p-4 bg-white shadow-sm">
      <h3 className="text-lg font-semibold mb-1">{title}</h3>
      {excerpt && <p className="text-sm text-gray-600">{excerpt}</p>}
    </article>
  );
};

export default PostCard;
