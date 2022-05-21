import { FC } from "react";

import Image from "next/image";

import { Typography } from "@/ui";

import { ITeam } from "@/types";

interface TeamItemProps {
  person: ITeam;
}

export const TeamItem: FC<TeamItemProps> = (props) => {
  // **Props
  const { person } = props;

  return (
    <li key={person.imgPath} className="team__item">
      <div className="team__item-image">
        <Image
          src={person.imgPath}
          width={376}
          height={400}
          layout="responsive"
          objectFit="cover"
          quality={85}
        />
      </div>
      <div className="team__item-content">
        <div className="team__item-position">{person.position}</div>
        <div className="team__item-info">
          <Typography tag="h3">{person.name}</Typography>
          <ul className="team__item-networks">
            <li className="team__item-network">
              <a
                href={person.networks.twitter}
                target="_blank"
                aria-label={`Go to Twitter of ${person.name}`}
              >
                <svg width="19" height="15" xmlns="http://www.w3.org/2000/svg">
                  <path d="M19 1.776c-.7.301-1.45.505-2.238.596A3.818 3.818 0 0018.475.277 7.924 7.924 0 0116 1.196 3.945 3.945 0 0013.156 0C11.004 0 9.26 1.696 9.26 3.787c0 .297.034.585.101.863A11.176 11.176 0 011.327.693a3.687 3.687 0 00-.528 1.904c0 1.314.552 2.473 1.598 3.152-.639-.02-1.41-.19-1.9-.474v.048c0 1.835 1.478 3.365 3.261 3.713a3.503 3.503 0 01-.96.133c-.25 0-.46-.024-.699-.068.497 1.504 1.954 2.6 3.658 2.63a7.94 7.94 0 01-4.83 1.62c-.316 0-.621-.017-.927-.052A11.272 11.272 0 005.976 15c7.169 0 11.09-5.77 11.09-10.774 0-.164-.004-.328-.011-.49A7.789 7.789 0 0019 1.776z" />
                </svg>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </li>
  );
};
