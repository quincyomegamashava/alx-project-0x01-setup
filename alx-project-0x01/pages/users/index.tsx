import Head from "next/head";
import Header from "@/components/layout/Header";

const UsersIndex: React.FC = () => {
  return (
    <>
      <Header />
      <main className="max-w-6xl mx-auto px-4 py-8">
        <Head>
          <title>Users</title>
        </Head>
        <h1 className="text-2xl font-semibold mb-4">Users</h1>
        <p className="text-gray-700">This is a placeholder page for users.</p>
      </main>
    </>
  );
};

export default UsersIndex;
