import {
  ArticleCardContainer,
  ArticleDate,
  ArticleTitle,
  ArticleExcerpt,
  ArticleTagsContainer,
  ArticleTag,
  ArticleFooter,
  ArticleFooterSeperator,
} from "./styles/ArticleCard.styles";

type ArticleCardProps = {
  title: string;
  excerpt: string;
  date: string;
  dateTime: string;
  tags: string[];
};

export const ArticleCard = ({
  title,
  excerpt,
  date,
  dateTime,
  tags,
}: ArticleCardProps) => {
  return (
    <ArticleCardContainer>
      <ArticleTitle>{title}</ArticleTitle>
      <ArticleExcerpt>{excerpt}</ArticleExcerpt>
      <ArticleFooter>
        <ArticleDate dateTime={dateTime}>{date}</ArticleDate>
        <ArticleTagsContainer>
          {tags.map((tag) => (
            <ArticleTag key={tag}>{tag}</ArticleTag>
          ))}
        </ArticleTagsContainer>
      </ArticleFooter>
    </ArticleCardContainer>
  );
};
