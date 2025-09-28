const Footer: React.FC = () => {
  return (
    <footer className="w-full border-t bg-gray-50 mt-10">
      <div className="max-w-6xl mx-auto px-4 py-6 text-sm text-gray-600 flex items-center justify-between">
        <p>© {new Date().getFullYear()} alx-project-0x01</p>
        <p>Built with Next.js + Tailwind CSS</p>
      </div>
    </footer>
  );
};

export default Footer;
