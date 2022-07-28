import { GetStaticProps, GetStaticPaths } from "next";
import Head from "next/head";
import Image from "next/image";
import { MDXRemote, MDXRemoteSerializeResult } from "next-mdx-remote";
import { serialize } from "next-mdx-remote/serialize";
import rehypeSlug from "rehype-slug";
import rehypeHighlight from "rehype-highlight";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import { getPostFromSlug, getSlugs, PostMeta } from "../../src/api";
import "highlight.js/styles/atom-one-dark.css";
import {
  MainContainer,
  SectionContainer,
  HeaderContainer,
} from "../../pages/index";
import { Icon } from "../../src/components/Icon/Icon";
import DamianLogo from "../../src/icons/logo.svg";
import GithubLogo from "../../src/icons/github-brands.svg";

export type MDXPost = {
  source: MDXRemoteSerializeResult<
    Record<string, unknown>,
    Record<string, string>
  >;
  meta: PostMeta;
};

export default function PostPage({ post }: { post: MDXPost }) {
  console.log(post);
  const { source, meta } = post;
  const { title } = meta;
  console.log(title);
  return (
    <>
      <Head>
        <title>{title}</title>
        {/* <meta */}
        {/*   name="description" */}
        {/*   content="Webdeveloper blog of Damian Veltkamp" */}
        {/* /> */}
      </Head>
      <HeaderContainer>
        <a
          aria-label="Damian Veltkamp logo"
          href="https://blog.damianveltkamp.tech/"
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
          <h1>{title}</h1>
          <MDXRemote components={{ Image }} {...source} />
        </SectionContainer>
      </MainContainer>
    </>
  );
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { slug } = params as { slug: string };
  const { content, meta } = getPostFromSlug(slug);
  const mdxSource = await serialize(content, {
    mdxOptions: {
      rehypePlugins: [
        rehypeSlug,
        [rehypeAutolinkHeadings, { behavior: "wrap" }],
        rehypeHighlight,
      ],
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
