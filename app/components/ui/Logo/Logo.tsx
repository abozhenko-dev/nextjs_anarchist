import { FC } from "react";

import Image from "next/image";
import Link from "next/link";

interface LogoProps {
  size?: "small" | "large";
}

export const Logo: FC<LogoProps> = (props) => {
  // **Props
  const { size = "large" } = props;

  return (
    <div className="logo">
      <Link href="/">
        <a>
          <Image
            src={size === "large" ? "/ui/logo-large.png" : "/ui/logo-small.png"}
            width={size === "large" ? 193 : 56}
            height={56}
            quality={100}
            draggable={false}
            alt="Anarchyst logotype"
          />
        </a>
      </Link>
    </div>
  );
};
