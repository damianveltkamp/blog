import Head from "next/head";
import styled from "@emotion/styled";
import DamianLogo from "../src/icons/logo.svg";
import GithubLogo from "../src/icons/github-brands.svg";
import { Icon } from "../src/components/Icon/Icon";
import { getAllPosts, PostMeta } from "../src/api";
import { ArticleCard } from "../src/components/ArticleCard/ArticleCard";

const MainContainer = styled("main")`
  max-width: 680px;
  margin: 0 auto;
`;

const SectionContainer = styled("section")`
  padding: 0 20px;
  &:not(:last-child) {
    margin-bottom: 60px;
  }

  > *:not(:last-child) {
    &:not(p) {
      margin-bottom: 25px;
    }
  }
`;

const HeaderContainer = styled("header")`
  display: flex;
  padding: 20px 20px;
  align-items: center;
  justify-content: space-between;
`;

const Home = ({ postsMeta }: { postsMeta: PostMeta[] }) => {
  return (
    <div>
      <Head>
        <title>Damian Veltkamp webdeveloper blog</title>
        <meta
          name="description"
          content="Webdeveloper blog of Damian Veltkamp"
        />
      </Head>

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
      <MainContainer>
        <SectionContainer>
          <h1>
            Greetings, my name is Damian Veltkamp and this is my webdeveloper
            blog.
          </h1>
        </SectionContainer>
        <SectionContainer>
          {postsMeta.map((post) => (
            <ArticleCard
              title={post.title}
              excerpt={post.excerpt}
              date={post.date}
              dateTime={post.dateTime}
              tags={post.tags}
              key={post.slug}
            />
          ))}
        </SectionContainer>
      </MainContainer>

      <footer></footer>
    </div>
  );
};

export async function getStaticProps() {
  const postsMeta = getAllPosts().map((post) => post.meta);

  return {
    props: { postsMeta },
  };
}

export default Home;
