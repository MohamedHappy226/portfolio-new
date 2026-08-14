import { Link } from "react-router-dom";
import { FaArrowLeft, FaFolderOpen } from "react-icons/fa";

export default function NotFound() {
  return (
    <main className="mx-auto flex min-h-[60vh] max-w-3xl flex-col items-center justify-center px-6 py-20 text-center">
      <p className="bg-gradient-to-r from-cyan-300 via-emerald-300 to-pink-400 bg-clip-text text-7xl font-black text-transparent sm:text-8xl">
        404
      </p>

      <div className="mx-auto mt-4 h-[4px] w-20 rounded-full bg-gradient-to-r from-cyan-400 to-emerald-400"></div>

      <h1 className="mt-6 text-2xl font-black text-white sm:text-3xl">
        This page doesn&apos;t exist
      </h1>

      <p className="mt-4 max-w-xl leading-8 text-slate-400">
        The link may be out of date, or the page may have moved. Everything is still
        reachable from the menu above.
      </p>

      <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
        <Link
          to="/"
          className="flex items-center gap-2 rounded-xl bg-cyan-400 px-6 py-3 font-bold text-slate-950 shadow-lg transition hover:scale-105 hover:bg-cyan-300"
        >
          <FaArrowLeft />
          Back home
        </Link>

        <Link
          to="/projects"
          className="flex items-center gap-2 rounded-xl bg-white/10 px-6 py-3 font-semibold text-white shadow-md transition hover:scale-105 hover:bg-white/20"
        >
          <FaFolderOpen />
          View projects
        </Link>
      </div>
    </main>
  );
}
