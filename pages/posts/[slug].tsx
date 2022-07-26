import { GetStaticProps, GetStaticPaths } from "next";
import Head from "next/head";
import { MDXRemote, MDXRemoteSerializeResult } from "next-mdx-remote";
import { serialize } from "next-mdx-remote/serialize";
import rehypeSlug from "rehype-slug";
import rehypeHighlight from "rehype-highlight";
import { getPostFromSlug, getSlugs, PostMeta } from "../../src/api";
import "highlight.js/styles/atom-one-dark.css";
import {
  Image,
  ContentBlock,
  Heading,
  Paragraph,
  List,
  Link,
  DateLabel,
  Article,
} from "@damianveltkamp/dvds";
import { MDXProvider } from "@mdx-js/react";

export type MDXPost = {
  source: MDXRemoteSerializeResult<
    Record<string, unknown>,
    Record<string, string>
  >;
  meta: PostMeta;
};

export default function PostPage({ post }: { post: MDXPost }) {
  const { source, meta } = post;
  const { title, date, dateTime } = meta;

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={`Blog post about ${title}`} />
      </Head>
      <Article>
        <ContentBlock>
          <Heading lvl="h1">{title}</Heading>
          <DateLabel dateTime={dateTime}>{date}</DateLabel>
        </ContentBlock>
        <MDXProvider
          components={{
            h1({ children, id }) {
              return (
                <Heading id={id} lvl="h1">
                  {children}
                </Heading>
              );
            },
            h2({ children, id }) {
              return (
                <Heading id={id} lvl="h2">
                  {children}
                </Heading>
              );
            },
            h3({ children, id }) {
              return (
                <Heading id={id} lvl="h3">
                  {children}
                </Heading>
              );
            },
            h4({ children, id }) {
              return (
                <Heading id={id} lvl="h4">
                  {children}
                </Heading>
              );
            },
            p({ children }) {
              return <Paragraph>{children}</Paragraph>;
            },
            a({ children, href }) {
              /* TODO add logic to determine if href isExternal or not */
              return (
                <Link text={(children as string) ?? ""} href={href ?? ""} />
              );
            },
            ul({ children }) {
              if (!children) return null;
              if (!Array.isArray(children)) return null;

              const listItems = children.reduce((acc, child) => {
                if (typeof child === "string") return acc;
                acc.push(child.props.children);
                return acc;
              }, []);

              return <List items={listItems} />;
            },
            ol({ children }) {
              if (!children) return null;
              if (!Array.isArray(children)) return null;

              const listItems = children.reduce((acc, child) => {
                if (typeof child === "string") return acc;
                acc.push(child.props.children);
                return acc;
              }, []);

              return <List items={listItems} />;
            },
          }}
        >
          <MDXRemote components={{ ContentBlock, Image }} {...source} />
        </MDXProvider>
      </Article>
    </>
  );
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { slug } = params as { slug: string };
  const { content, meta } = getPostFromSlug(slug);
  const mdxSource = await serialize(content, {
    mdxOptions: {
      rehypePlugins: [rehypeSlug, rehypeHighlight],
    },
  });

  return {
    props: {
      post: { source: mdxSource, meta },
    },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = getSlugs().map((slug) => ({ params: { slug } }));

  return {
    paths,
    fallback: false,
  };
};
