import Link from "next/link";

export const metadata = { title: "404 · Rodrigo" };

export default function NotFound() {
  return (
    <main className="mx-auto flex min-h-screen max-w-3xl flex-col justify-center px-6">
      <p className="mb-3 text-sm text-muted">
        <span className="text-a">rodrigo@porto</span>:<span className="text-g">~</span>$ cd /this-page
      </p>
      <h1 className="text-4xl font-extrabold tracking-tighter sm:text-5xl">
        404<span className="cursor" aria-hidden="true" />
      </h1>
      <p className="mt-4 text-lg text-t">bash: cd: /this-page: No such file or directory</p>
      <p className="mt-2 text-muted"># the page you were looking for doesn&apos;t exist.</p>
      <Link href="/" className="mt-8 w-fit rounded border border-a px-4 py-1 text-a transition-colors hover:bg-a hover:text-bg">
        cd ~
      </Link>
    </main>
  );
}
