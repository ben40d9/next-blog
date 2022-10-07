import Link from "next/link";

export default function Layout({ children }) {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="bg-fuchsia-100 mb-8 py-4">
        <div className="container mx-auto flex justify-center">
          <Link href="/">
            <a>Home</a>
          </Link>
          <span className="mx-auto">Welcome to paleyBlog</span>{" "}
        </div>
      </header>
      <main className="container mx-auto flex-1">{children}</main>
      <footer className="bg-fuchsia-100 mt-8 py-4">
        <div className="container mx-auto flex justify-center">
          &copy; 2022 paleyBlogs
        </div>
      </footer>
    </div>
  );
}
