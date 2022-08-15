import Head from "next/head";
import styled from "@emotion/styled";
import { getAllPosts, PostMeta } from "../src/api";
import { ArticleCard, ContentBlock, Heading } from "@damianveltkamp/dvds";

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

      <ContentBlock>
        <Heading lvl="h1">
          Greetings, my name is Damian Veltkamp, and this is my web developer
          blog.
        </Heading>
      </ContentBlock>
      <ContentBlock>
        {postsMeta.map((post) => (
          <ArticleCard
            title={post.title}
            excerpt={post.excerpt}
            date={post.date}
            dateTime={post.dateTime}
            tags={post.tags}
            slug={`posts/${post.slug}`}
            key={post.slug}
          />
        ))}
      </ContentBlock>
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
