import { FC } from "react";

import Image from "next/image";
import Link from "next/link";

import Zoom from "react-medium-image-zoom";

import { IAgent } from "@/types";

import { shimmer } from "@/helpers";

export const AgentContent: FC<{ agent: IAgent }> = (props) => {
  // **Props
  const { agent } = props;

  return (
    <div className="agent">
      <div className="agent__preview">
        <div className="agent__preview-image">
          <Zoom
            overlayBgColorStart="rgba(13, 13, 13, 0)"
            overlayBgColorEnd="rgba(13, 13, 13, 0.8)"
          >
            <Image
              src={`${process.env.NEXT_PUBLIC_IMAGE_URL}${agent.image_hq}`}
              width={376}
              height={471}
              layout="responsive"
              draggable={false}
              quality={30}
              objectFit="cover"
              objectPosition="center"
              placeholder="blur"
              blurDataURL={shimmer(376, 471)}
              priority
            />
          </Zoom>

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
        {!agent.terminated && (
          <ul className="agent__total">
            <li className="agent__total-item agent__total-item--rank">
              <div className="agent__total-item-value">{agent.rank}</div>
              <div className="agent__total-item-title">Ranking</div>
            </li>
          </ul>
        )}
      </div>
      <div className="agent__content">
        <div className="agent__content-top">
          <h2>
            Anarchist <span>#{agent.id}</span>
          </h2>
          <ul className="networks">
            <li className="networks__item">
              <Link
                href={`https://marketplace.luart.io/collections/terra1my4sy2gt5suu9fgt8wdkm7ywrd5jzg86692as2/${agent.id}`}
              >
                <a className="networks__link" target="_blank">
                  <span>
                    <Image
                      src="/icons/luart.svg"
                      width={24}
                      height={24}
                      alt="Luart"
                      draggable={false}
                    />
                  </span>
                  Luart
                </a>
              </Link>
            </li>
          </ul>
        </div>
        <div className="agent__content-table">
          <table>
            <thead>
              <tr>
                <th></th>
                <th>Trait</th>
                {!agent.terminated && <th>Rarity</th>}
              </tr>
            </thead>
            <tbody>
              {agent.traits.map((trait) => (
                <tr key={trait.name}>
                  <td>{trait.name}</td>
                  <td>{trait.value}</td>
                  {!agent.terminated && <td>{trait.percent}%</td>}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
