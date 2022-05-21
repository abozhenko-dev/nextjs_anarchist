import { FC } from "react";

import { Footer, Header } from "@/common";

interface AppLayoutProps {
  children: React.ReactNode;
}

export const AppLayout: FC<AppLayoutProps> = (props) => {
  // **Props
  const { children } = props;

  return (
    <div className="wrapper">
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
};
