import styled from "@emotion/styled";

export const ArticleCardContainer = styled("a")`
  display: block;
  background: #efa35d;
  padding: 40px;
  color: #fff;
  border-radius: 10px;
  color: #1f2937;
`;

export const ArticleTitle = styled("h2")``;

export const ArticleExcerpt = styled("h3")`
  font-size: 1rem;
  margin-bottom: 20px;
`;

export const ArticleFooter = styled("div")`
  display: flex;
  align-items: center;
  gap: 20px;
`;

export const ArticleDate = styled("time")`
  display: flex;
  align-items: center;
  font-weight: 500;

  &:not(:last-child) {
    margin-bottom: 15px;
  }
`;

export const ArticleTagsContainer = styled("div")`
  display: flex;
  flex-wrap: wrap;
  gap: 5px;
`;

export const ArticleTag = styled("div")`
  width: fit-content;
  padding: 8px;
  background: #1f2937;
  font-size: 13px;
  color: #fff;
  border-radius: 10px;
`;
