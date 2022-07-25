import path from "path";
import fs from "fs";
import { sync } from "glob";
import matter from "gray-matter";

const POSTS_PATH = path.join(process.cwd(), "posts");

type Post = {
  meta: PostMeta;
  content: string;
};

export type PostMeta = {
  slug: string;
  title: string;
  excerpt: string;
  tags: string[];
  date: string;
  dateTime: string;
};

export const getSlugs = (): string[] => {
  const paths = sync(`${POSTS_PATH}/*.mdx`);

  if (!paths.length) return [];

  return paths.map((path) => {
    const splitPath = path.split("/");
    const fileName = splitPath[splitPath.length - 1];

    if (!fileName) return "";

    const [slug, _extension] = fileName.split(".");

    return slug ?? "";
  });
};

export const getAllPosts = () => {
  const posts = getSlugs()
    .map((slug) => getPostFromSlug(slug))
    .sort((a, b) => {
      if (a.meta.date > b.meta.date) return 1;
      if (a.meta.date < b.meta.date) return -1;
      return 0;
    })
    .reverse();

  return posts;
};

export const getPostFromSlug = (slug: string): Post => {
  const postPath = path.join(POSTS_PATH, `${slug}.mdx`);
  const postSource = fs.readFileSync(postPath);
  const { content, data } = matter(postSource);

  const year = data.date.getFullYear();
  const month = data.date.getMonth() + 1;
  const day = data.date.getDate();

  const date = [year, month, day].join("-");

  return {
    meta: {
      slug,
      title: data.title ?? slug,
      excerpt: data.excerpt ?? "",
      tags: data.tags.sort() ?? [],
      date: date.toString() ?? new Date().toString(),
      dateTime: data.date.toString(),
    },
    content,
  };
};
