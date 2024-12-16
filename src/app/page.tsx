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
          <p className="my-6 text-pretty">I love building things.</p>
          <p className="mt-6 text-pretty">
            mostly AI Agents and other AI / ML Apps
          </p>
          <p className="text-pretty">sometimes Full Stack Web Apps</p>
          <p className="text-pretty">rarely Mobile Apps</p>
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
            <Link href="https://eduardoserda.com/">
              <div className="flex h-14 w-14 items-center justify-center rounded border-2 border-gray-200">
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth="0"
                  viewBox="0 0 24 24"
                  height="40px"
                  width="40px"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path fill="none" d="M0 0h24v24H0V0z"></path>
                  <path d="m14.12 4 1.83 2H20v12H4V6h4.05l1.83-2h4.24M15 2H9L7.17 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2h-3.17L15 2zm-3 7c1.65 0 3 1.35 3 3s-1.35 3-3 3-3-1.35-3-3 1.35-3 3-3m0-2c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5z"></path>
                </svg>
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
