import Head from "next/head";
import styled from "@emotion/styled";
import { getAllPosts, PostMeta } from "../src/api";
import { ArticleCard } from "../src/components/ArticleCard/ArticleCard";

export const SectionContainer = styled("section")`
  position: relative;
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
            slug={post.slug}
            key={post.slug}
          />
        ))}
      </SectionContainer>
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
