import Head from "next/head";
import { getAllPosts, PostMeta } from "../src/api";
import { ArticleCard, Grid, ContentBlock, Heading } from "@damianveltkamp/dvds";

const Home = ({ postsMeta }: { postsMeta: PostMeta[] }) => {
  return (
    <>
      <Head>
        <title>Damian Veltkamp webdeveloper blog</title>
        <meta
          name="description"
          content="Webdeveloper blog of Damian Veltkamp"
        />
      </Head>

      <ContentBlock>
        <Heading lvl="h1">Writing about what interesets me.</Heading>
      </ContentBlock>
      <Grid columns={1}>
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
      </Grid>
    </>
  );
};

export async function getStaticProps() {
  const postsMeta = getAllPosts().map((post) => post.meta);

  return {
    props: { postsMeta },
  };
}

export default Home;
