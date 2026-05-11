export default function Navbar() {
  return (
    <nav className="w-full p-4 border-b flex justify-between">
      <h1 className="text-2xl font-bold">LexGraph AI</h1>

      <div className="flex gap-6">
        <a href="/">Home</a>
        <a href="/search">Search</a>
        <a href="/upload">Upload</a>
        <a href="/graph">Graph</a>
      </div>
    </nav>
  );
}
