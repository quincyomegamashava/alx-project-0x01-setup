import Head from "next/head";
import PostCard from "@/components/common/PostCard";
import Header from "@/components/layout/Header";

const PostsIndex: React.FC = () => {
  return (
    <>
      <Header />
      <main className="max-w-6xl mx-auto px-4 py-8">
        <Head>
          <title>Posts</title>
        </Head>
        <h1 className="text-2xl font-semibold mb-4">Posts</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {[1, 2, 3, 4, 5, 6].map((n) => (
            <PostCard key={n} title={`Post ${n}`} excerpt="This is a sample post card." />
          ))}
        </div>
      </main>
    </>
  );
};

export default PostsIndex;
