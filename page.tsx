import Navbar from "../components/Navbar";

export default function Home() {
  return (
    <main>
      <Navbar />

      <section className="p-20">
        <h1 className="text-6xl font-bold mb-8">
          Legal Intelligence Engine
        </h1>

        <p className="text-xl max-w-3xl">
          Upload judgments, map precedent relationships,
          extract ratio decidendi, and analyze legal influence.
        </p>
      </section>
    </main>
  );
}
