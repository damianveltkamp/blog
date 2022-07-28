import styled from "@emotion/styled";
import DamianLogo from "../icons/logo.svg";
import GithubLogo from "../icons/github-brands.svg";
import { Icon } from "../components/Icon/Icon";

export const HeaderContainer = styled("header")`
  display: flex;
  padding: 20px 20px;
  align-items: center;
  justify-content: space-between;
`;

export const MainContainer = styled("main")`
  max-width: 680px;
  margin: 0 auto;
`;

type BaseLayoutProps = {
  children: React.ReactNode;
};

export const BaseLayout = ({ children }: BaseLayoutProps) => {
  return (
    <>
      <HeaderContainer>
        <a
          aria-label="Damian Veltkamp logo"
          href="https://www.damianveltkamp.tech/"
        >
          <Icon width="45px" icon={DamianLogo} />
        </a>
        <a
          aria-label="Github logo"
          href="https://github.com/damianveltkamp"
          target="_blank"
          rel="noreferrer"
        >
          <Icon icon={GithubLogo} />
        </a>
      </HeaderContainer>
      <MainContainer>{children}</MainContainer>
      <footer></footer>
    </>
  );
};
