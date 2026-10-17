
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <section className="flex min-h-[70vh] items-center justify-center bg-[#faf9f3] px-6 text-center">
          <div>
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-[#789044]">
              Discover the wild
            </p>

            <h1 className="max-w-4xl font-serif text-5xl leading-tight text-[#244b35] md:text-7xl">
              Where nature becomes your next adventure.
            </h1>

            <p className="mx-auto mt-6 max-w-xl text-base leading-7 text-[#626b5d] md:text-lg">
              Explore breathtaking national parks, unforgettable safaris,
              and extraordinary stays in the heart of nature.
            </p>

            <a
              href="#national-parks"
              className="mt-8 inline-block rounded-full bg-[#244b35] px-7 py-4 font-semibold text-white transition-colors hover:bg-[#356447]"
            >
              Explore National Parks ↗
            </a>
          </div>
        </section>

        <section
          id="national-parks"
          className="min-h-[40vh] bg-[#eef0e4] px-6 py-20 text-center"
        >
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#789044]">
            Into the wilderness
          </p>
          <h2 className="mt-3 font-serif text-4xl text-[#244b35]">
            Explore National Parks
          </h2>
          <p className="mt-4 text-[#626b5d]">
            Your next wild adventure starts here.
          </p>
        </section>
      </main>
    </>
  );
}
