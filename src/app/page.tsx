import Image from "next/image";
import Link from "next/link";

export default async function Home() {
  return (
    <>
      <div className="mx-auto w-full max-w-xl px-4">
        <a
          aria-label="Frontpage"
          className="my-16 flex gap-4 sm:my-20 lg:my-32"
          href="/"
        >
          <h1 className="flex flex-row items-center gap-3 text-2xl">
            <Image
              className="rounded-full"
              src={"/cio_talk.jpg"}
              width={70}
              height={70}
              alt="Lukas Gäbler"
            />
            <div className="flex flex-col gap-1">
              <div>Lukas Gäbler</div>
              <div>
                <Link
                  href="mailto:lukas.gaebler@gmail.com"
                  className="text-lg underline"
                >
                  E-Mail
                </Link>
              </div>
            </div>
          </h1>
        </a>

        <div role="main">
          <div
            className="text-title font-display display-settings wei text-pretty
        font-semibold leading-[1.1] tracking-[-0.02em] text-black"
          >
            Software Engineer / Consultant
          </div>
          <p className="my-6 text-pretty">I build things.</p>
          <p className="mt-6 text-pretty">Full Stack Web Apps</p>
          <p className="text-pretty">AI / ML Apps</p>
          <p className="text-pretty">Mobile Apps</p>
          <h2 className="text-md-plus relative mb-3 mt-8 text-balance font-bold text-black">
            Selection of Clients
          </h2>
          <div className="flex gap-3">
            <Link href="https://magic.dev">
              <div className="flex h-14 w-14 items-center justify-center rounded border-2 border-gray-200">
                <Image
                  src={"/magic-logo.svg"}
                  height={100}
                  width={40}
                  alt="Magic.dev Logo"
                />
              </div>
            </Link>

            <Link
              href="https://www.elio.earth/"
              className="flex items-center justify-center"
            >
              <div className="flex h-14 w-14 items-center justify-center rounded border-2 border-gray-200">
                <Image
                  src={"/elio.png"}
                  height={40}
                  width={40}
                  alt="Elio Logo"
                />
              </div>
            </Link>
          </div>
          <h2 className="text-md-plus relative mb-3 mt-8 text-balance font-bold text-black">
            Had lot&apos;s of fun building for charities
          </h2>
          <div className="flex gap-3">
            <Link href="https://climatescience.org/">
              <div className="flex h-14 w-14 items-center justify-center rounded border-2 border-gray-200">
                <Image
                  src={"/climatescience.png"}
                  height={100}
                  width={40}
                  alt="ClimateScience Logo"
                />
              </div>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
