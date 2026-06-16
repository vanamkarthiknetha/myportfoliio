import Head from "next/head";
import Link from "next/link";

export default function IntroPage() {
  return (
    <>
      <Head>
        <title>Intro — Karthik Vanam</title>
        <meta name="description" content="Watch a quick intro from Karthik Vanam." />
        <meta name="theme-color" content="#1B1F23" />
      </Head>

      <div className="dark relative min-h-screen bg-ln-bg text-ln-text antialiased">
        {/* Header */}
        <div className="sticky top-0 z-20 flex items-center gap-4 border-b border-white/10 bg-ln-bg/80 px-4 py-4 backdrop-blur sm:px-8">
          <Link
            href="/"
            className="group inline-flex items-center gap-2 rounded-full border border-white/15 bg-transparent px-4 py-2 text-sm font-semibold text-ln-text transition-colors hover:border-white/30 hover:bg-white/[0.04]"
          >
            <svg
              className="transition-transform group-hover:-translate-x-0.5"
              width="15"
              height="15"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M19 12H5M12 19l-7-7 7-7" />
            </svg>
            Back
          </Link>
          <span className="text-sm font-medium text-ln-muted">Karthik Vanam — Intro</span>
        </div>

        {/* Iframe */}
        <div className="flex min-h-[calc(100svh-57px)] items-center justify-center px-4 py-10 sm:px-8">
          <div className="w-full max-w-4xl overflow-hidden rounded-2xl border border-white/10 bg-ln-surface shadow-2xl shadow-black/30">
            <iframe
              src="https://drive.google.com/file/d/1iq8Z98Mv-sGJo-ijJdu4qgGw2N_rdjRC/preview"
              className="aspect-video w-full"
              allow="autoplay"
              allowFullScreen
              title="Karthik Vanam intro video"
            />
          </div>
        </div>
      </div>
    </>
  );
}
