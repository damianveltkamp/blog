import {
  ArticleCardContainer,
  ArticleDate,
  ArticleTitle,
} from "./styles/ArticleCard.styles";

type ArticleCardProps = {
  title: string;
  date: string;
};

export const ArticleCard = ({ title, date }: ArticleCardProps) => {
  return (
    <ArticleCardContainer>
      <ArticleTitle>{title}</ArticleTitle>
      <ArticleDate>{date}</ArticleDate>
    </ArticleCardContainer>
  );
};
