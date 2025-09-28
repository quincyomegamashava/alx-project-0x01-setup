import Link from "next/link";

const Header: React.FC = () => {
  return (
    <header className="w-full border-b bg-white">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        <Link href="/" className="font-bold text-xl">alx-project-0x01</Link>
        <nav className="flex gap-4 text-sm">
          <Link className="hover:underline" href="/">Home</Link>
          <Link className="hover:underline" href="/posts">Posts</Link>
          <Link className="hover:underline" href="/users">Users</Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
