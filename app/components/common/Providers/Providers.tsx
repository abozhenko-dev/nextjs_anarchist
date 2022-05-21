import { FC, ReactNode, useState } from "react";

import Head from "next/head";

import { Player } from "@lottiefiles/react-lottie-player";

import { AppLayout } from "@/layout";

import loaderData from "../../../../data/loader.json";

interface ProvidersProps {
  children: ReactNode;
}

export const Providers: FC<ProvidersProps> = (props) => {
  // **Props
  const { children } = props;

  // **Local state
  const [isLoaderPlayed, setIsLoaderPlayed] = useState(false);

  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=1.0"
        />

        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/favicon/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon/favicon-16x16.png"
        />
        <link rel="manifest" href="/favicon/site.webmanifest" />
        <link
          rel="mask-icon"
          href="/favicon/safari-pinned-tab.svg"
          color="#5bbad5"
        />
        <meta name="msapplication-TileColor" content="#000000" />
        <meta name="theme-color" content="#000000"></meta>
      </Head>
      {!isLoaderPlayed && (
        <div className="loader">
          <Player
            src={loaderData}
            autoplay={true}
            loop={false}
            style={{ width: 700, height: 700 }}
            onEvent={(event) => {
              const body = document.querySelector("body") as HTMLBodyElement;
              const loader = document.querySelector(
                ".loader"
              ) as HTMLDivElement;
              const paddingOffset = `${window.innerWidth - body.offsetWidth}px`;

              if (event === "load" || event === "play") {
                body.style.paddingRight = paddingOffset;
                body.classList.add("lock");
              }

              if (event === "complete") {
                loader.style.opacity = "0";
                loader.style.visibility = "hidden";

                body.classList.remove("lock");
                body.style.paddingRight = "";

                setTimeout(() => {
                  setIsLoaderPlayed(true);
                }, 300);
              }
            }}
          />
        </div>
      )}
      <AppLayout>{children}</AppLayout>
    </>
  );
};
