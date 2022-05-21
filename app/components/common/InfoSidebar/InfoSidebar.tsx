import { FC, ReactNode } from "react";

import Link from "next/link";
import { useRouter } from "next/router";

import { Container } from "@/ui";

import { infoNavigation } from "@/constants";

interface InfoSidebarProps {
  children: ReactNode;
}

export const InfoSidebar: FC<InfoSidebarProps> = (props) => {
  // **Props
  const { children } = props;
  const { asPath } = useRouter();

  return (
    <section className="info">
      <Container>
        <div className="info__wrapper">
          <aside className="info__sidebar">
            <ul>
              {infoNavigation.map((navItem) => (
                <li
                  key={navItem.route}
                  className={navItem.route === asPath ? "active" : ""}
                >
                  <Link href={navItem.route}>
                    <a>{navItem.title}</a>
                  </Link>
                </li>
              ))}
            </ul>
          </aside>
          <div className="info__content">{children}</div>
        </div>
      </Container>
    </section>
  );
};
