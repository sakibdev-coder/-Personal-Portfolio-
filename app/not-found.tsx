import Link from "next/link";

export default function NotFound() {
  return <main className="flex min-h-screen items-center justify-center bg-[#080D1A] px-6 text-center text-slate-100"><div><p className="mb-4 text-sm uppercase tracking-[.25em] text-sky">404 / Lost in the source</p><h1 className="text-6xl font-bold">Page not found.</h1><p className="my-6 text-mist">The page you&apos;re looking for doesn&apos;t exist.</p><Link className="button-primary inline-flex" href="/">Back home</Link></div></main>;
}
