import Link from "next/link";
import { blogs } from "@/lib/source";

export default function Page() {
  const posts = [...blogs.getPages()].sort(
    (a, b) => new Date(b.data.date).getTime() - new Date(a.data.date).getTime(),
  );

  return (
    <main className="mx-auto w-full max-w-page px-4 p-24 md:p-24">
      <div className="mb-8">
        <h1 className="mb-4 text-3xl font-bold">Blog</h1>
        <p className="text-fd-muted-foreground">
          Latest updates and announcements.
        </p>
      </div>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        {posts.map((post) => (
          <Link
            key={post.url}
            href={post.url}
            className="flex flex-col rounded-lg border bg-fd-card p-6 shadow-sm transition-colors hover:bg-fd-accent hover:text-fd-accent-foreground"
          >
            <h2 className="mb-2 text-xl font-semibold">{post.data.title}</h2>
            <p className="mb-4 text-sm text-fd-muted-foreground">
              {post.data.description}
            </p>
            <div className="mt-auto flex items-center justify-between pt-4 text-xs text-fd-muted-foreground">
              <span>{post.data.author}</span>
              <span>{new Date(post.data.date).toLocaleDateString()}</span>
            </div>
          </Link>
        ))}
      </div>
    </main>
  );
}
