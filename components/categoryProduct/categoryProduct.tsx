import Image from "next/image";
import Router from "next/router";
import Box from "@mui/material/Box";
import { css } from "styled-components/macro";
import Button from "components/buttons/button";
import { ProductsProps } from "interfaces/interfaces";
import { body, h1, lightText } from "utils/typography";

type categoryProp = {
  cat: ProductsProps;
  idx: number;
};

export const categoryProductCss = (idx: number) => css`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: ${idx % 2 === 0 ? "row" : "row-reverse"};
  margin: 15rem 0;
  height: 100%;
`;

export const categoryProductImageCss = css`
  width: 50%;
  height: 56rem;
`;

export const categoryProductDescCss = css`
  width: 40%;
  h3 {
    ${lightText}
    margin-bottom: 2rem;
  }
  h1 {
    ${h1}
  }
  p {
    ${body}
    margin: 2rem 0;
  }
`;

const CategoryProduct = ({ cat, idx }: categoryProp) => {
  return (
    <Box css={categoryProductCss(idx)}>
      <Box css={categoryProductImageCss}>
        <Image width={540} height={560} src={cat.categoryImage.desktop} alt={`${cat.name} image`} />
      </Box>

      <Box css={categoryProductDescCss}>
        {cat.new && <h3>NEW PRODUCT</h3>}
        <h1>{cat.name}</h1>
        <p>{cat.description}</p>
        <span onClick={() => Router.push(`/product/${cat.slug}`)}>
          <Button text="see product" variant="PINK_DARK" />
        </span>
      </Box>
    </Box>
  );
};

export default CategoryProduct;
