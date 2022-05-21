import { FC } from "react";

import Image from "next/image";
import Link from "next/link";

import { networks } from "@/constants";

interface NetworksProps {
  showTitle?: boolean;
}

export const Networks: FC<NetworksProps> = (props) => {
  // **Props
  const { showTitle = true } = props;

  return (
    <ul className="networks">
      {networks.map((network) => (
        <li key={network.route} className="networks__item">
          <Link href={network.route}>
            <a className="networks__link" target="_blank">
              <span>
                <Image
                  src={network.imgPath}
                  width={24}
                  height={24}
                  alt={network.title}
                  draggable={false}
                />
              </span>
              {showTitle && <p>{network.title}</p>}
            </a>
          </Link>
        </li>
      ))}
    </ul>
  );
};
