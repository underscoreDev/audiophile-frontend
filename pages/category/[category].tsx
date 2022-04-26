import { useRouter } from "next/router";
import { colors } from "utils/theme";
import { h2 } from "utils/typography";
import { useAppSelector } from "redux/store/store";
import CategoryProduct from "components/categoryProduct/categoryProduct";
import CategoryGroup from "components/categoryType/categoryGroup";
import BestAudio from "components/bestAudio";
import { ProductsProps } from "interfaces/interfaces";
import { css } from "styled-components/macro";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";

export const categoryPageCss = css``;

export const categoryHeaderCss = css`
  height: ${33.6 - 9.7 + "rem"};
  background-color: ${colors.colorBlack};
  color: ${colors.colorWhite};
  text-transform: uppercase;
  display: flex;
  align-items: center;
  justify-content: center;
  h1 {
    ${h2}
  }
`;

const Category = () => {
  const router = useRouter();
  const routeName = router?.query?.category;

  const { products } = useAppSelector(({ productsReducer }) => productsReducer);

  const category = products.filter((product: ProductsProps) => product.category === routeName);

  return (
    <Box css={categoryPageCss}>
      <Box css={categoryHeaderCss}>
        <h1>{routeName}</h1>
      </Box>

      <Container>
        <Box>
          {category.map((cat, idx) => (
            <Box key={cat.slug}>
              <CategoryProduct idx={idx} cat={cat} />
            </Box>
          ))}
        </Box>

        <Box>
          <CategoryGroup />
          <Box style={{ marginBottom: "15rem" }}>
            <BestAudio />
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Category;
