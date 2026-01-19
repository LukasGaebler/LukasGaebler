"use client";
import Image from "next/image";
import Link from "next/link";
import { useMemo } from "react";
import { GitHubCalendar } from "react-github-calendar";

export default function Home() {
  const currentYear = useMemo(() => new Date().getFullYear(), []);

  const tooltips = useMemo(
    () => ({
      activity: {
        text: (activity: { date: string; count: number }) => {
          const date = new Date(activity.date).toLocaleDateString("en-US", {
            weekday: "short",
            month: "short",
            day: "numeric",
            year: "numeric",
          });
          return `${activity.count} contribution${activity.count !== 1 ? "s" : ""} on ${date}`;
        },
      },
    }),
    [],
  );

  return (
    <>
      <div className="mx-auto w-full max-w-xl px-4">
        <div className="my-10 flex gap-4 sm:my-12 lg:my-16">
          <h1 className="flex flex-row items-center gap-3 text-2xl">
            <Image
              className="rounded-full"
              src={"/cio_talk.jpg"}
              width={60}
              height={60}
              alt="Lukas Gäbler"
            />
            <div className="flex flex-col gap-1">
              <div className="font-medium">Lukas Gäbler</div>
              <Link
                href="mailto:lukas.gaebler@gmail.com"
                className="text-gray-400 transition-colors hover:text-gray-600"
                aria-label="Email"
              >
                <svg
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={1.5}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                  />
                </svg>
              </Link>
            </div>
          </h1>
        </div>

        <div role="main">
          <div className="text-3xl font-normal text-gray-500">
            Software Engineer
          </div>
        </div>

        {/* GitHub Activity Section */}
        <div className="mb-8 mt-8">
          <div className="text-gray-500">
            <GitHubCalendar
              username="lukasgaebler"
              theme={{
                light: ["#ebedf0", "#9be9a8", "#40c463", "#30a14e", "#216e39"],
              }}
              colorScheme="light"
              blockSize={12}
              blockMargin={4}
              fontSize={14}
              showMonthLabels={true}
              year={currentYear}
              tooltips={{
                activity: {
                  text: (activity) => {
                    const date = new Date(activity.date).toLocaleDateString(
                      "en-US",
                      {
                        weekday: "short",
                        month: "short",
                        day: "numeric",
                        year: "numeric",
                      },
                    );
                    return `${activity.count} contribution${activity.count !== 1 ? "s" : ""} on ${date}`;
                  },
                },
              }}
            />
          </div>
        </div>
      </div>
    </>
  );
}
