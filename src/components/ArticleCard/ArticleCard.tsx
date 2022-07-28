import Link from "next/link";
import {
  ArticleCardContainer,
  ArticleDate,
  ArticleTitle,
  ArticleExcerpt,
  ArticleTagsContainer,
  ArticleTag,
  ArticleFooter,
} from "./styles/ArticleCard.styles";

type ArticleCardProps = {
  title: string;
  excerpt: string;
  date: string;
  dateTime: string;
  tags: string[];
  slug: string;
};

export const ArticleCard = ({
  title,
  excerpt,
  date,
  dateTime,
  tags,
  slug,
}: ArticleCardProps) => {
  return (
    <Link href={`/posts/${slug}`} passHref={true}>
      <ArticleCardContainer>
        <ArticleTitle>{title}</ArticleTitle>
        <ArticleDate dateTime={dateTime}>{date}</ArticleDate>
        <ArticleExcerpt>{excerpt}</ArticleExcerpt>
        <ArticleFooter>
          <ArticleTagsContainer>
            {tags.map((tag) => (
              <ArticleTag key={tag}>{tag}</ArticleTag>
            ))}
          </ArticleTagsContainer>
        </ArticleFooter>
      </ArticleCardContainer>
    </Link>
  );
};
