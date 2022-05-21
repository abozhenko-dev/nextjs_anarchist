import Link from "next/link";

import { IFaq } from "@/types";

export const faq: IFaq[] = [
  {
    title: "What are Anarchists on Terra?",
    body: [
      "Anarchists On Terra is a collection of 1,720 NFTs on the Terra Blockchain that was created by 3 Co-Founders, sharing a vision of financial freedom and autonomy for all.",
    ],
  },
  {
    title: "How can I mint?",
    body: [
      <>
        The Season 1 collection has already minted and can be purchased off of
        the secondary market. As of right now, you can find available Anarchists
        on{" "}
        <a
          href="https://randomearth.io/collections/terra1my4sy2gt5suu9fgt8wdkm7ywrd5jzg86692as2"
          target="_blank"
        >
          RandomEarth
        </a>{" "}
        or{" "}
        <a
          href="https://knowhere.art/collections/terra1my4sy2gt5suu9fgt8wdkm7ywrd5jzg86692as2"
          target="_blank"
        >
          Knowhere
        </a>
        ).
      </>,
      "The Season 2 Renegade drop details are TBT.",
    ],
  },
  {
    title: "Mint Price",
    body: ["Season 2 Renegade mint price is TBD."],
  },
  {
    title: "Is there a Whitelist?",
    body: [
      "There is a Whitelist available for the Season 2 collection drop. As of right now, you can join by holding 1 of each S1 Anarchist character or simply by holding 5 Anarchists total.",
      "Future Whitelist opportunities will be available soon, more details to come in our official Discord.",
    ],
  },
  {
    title: "Benefits of buying an Anarchist NFT?",
    body: [
      <>
        When you purchase and hold an Anarchist, you will receive many perks.
        Comic Book drops, playable Metaverse characters, holder Snapshots for
        giveaways, and becoming a part of the AnarchistDAO. More details on our
        Roadmap{" "}
        <Link href="/roadmap">
          <a>here</a>
        </Link>
      </>,
    ],
  },
];
