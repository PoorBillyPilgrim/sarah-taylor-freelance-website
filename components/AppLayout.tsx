"use client";

import { ActionIcon, Affix, AppShell, Transition } from "@mantine/core";
import Header from "./Header";
import Footer from "./footer/Footer";
import { useWindowScroll } from "@mantine/hooks";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";

const AppLayout = ({ children }: { children: React.ReactNode }) => {
  const [scroll, scrollTo] = useWindowScroll();
  return (
    <AppShell>
      <Header />
      <AppShell.Main pt="var(--header-height)">{children}</AppShell.Main>
      <Footer />
      <Affix position={{ bottom: 20, right: 20 }}>
        <Transition transition="slide-up" mounted={scroll.y > 0}>
          {transitionStyles => (
            <ActionIcon
              size="xl"
              radius="xl"
              style={transitionStyles}
              onClick={() => scrollTo({ y: 0 })}
            >
              <FontAwesomeIcon icon={faArrowUp} />
            </ActionIcon>
          )}
        </Transition>
      </Affix>
    </AppShell>
  );
};

export default AppLayout;
