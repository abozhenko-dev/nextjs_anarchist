import { FC } from "react";

import Image from "next/image";
import Link from "next/link";

import { Pagination } from "@/common";

import { IAgent } from "@/types";

import { shimmer } from "@/helpers";

interface AgentsListProps {
  agents: IAgent[];
  currentPage: number;
  pageSize: number;
  pageHandler: (page: number) => void;
}

export const AgentsList: FC<AgentsListProps> = (props) => {
  // **Props
  const { agents, currentPage, pageHandler, pageSize } = props;

  return (
    <div className="agents__content">
      <ul className="agents__list">
        {agents
          .slice((currentPage - 1) * pageSize, currentPage * pageSize)
          .map((agent) => (
            <li key={agent.id} className="agents__item">
              <div className="agents__item-image">
                <Link href={`/agents/${agent.id}`}>
                  <a>
                    <Image
                      src={`${process.env.NEXT_PUBLIC_IMAGE_URL}${agent.image}`}
                      width={272}
                      height={300}
                      layout="responsive"
                      objectFit="cover"
                      objectPosition="center"
                      quality={30}
                      placeholder="blur"
                      blurDataURL={shimmer(272, 300)}
                    />
                  </a>
                </Link>
                {agent.terminated && (
                  <div className="agents__item-terminated">
                    <Image
                      src="/ui/terminated.png"
                      width={239}
                      height={119}
                      draggable={false}
                      quality={15}
                    />
                  </div>
                )}
              </div>
              <h2 className="agents__item-name">
                <Link href={`/agents/${agent.id}`}>
                  <a>{agent.name}</a>
                </Link>
              </h2>
            </li>
          ))}
      </ul>
      <Pagination
        totalPages={agents.length / pageSize}
        currentPage={currentPage}
        onPageChange={pageHandler}
        hideOnSinglePage
      />
    </div>
  );
};
