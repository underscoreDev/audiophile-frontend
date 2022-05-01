import Box from "@mui/material/Box";
import { useRouter } from "next/router";
import BestAudio from "components/bestAudio";
import Container from "@mui/material/Container";
import { useAppSelector } from "redux/store/store";
import { ProductsProps } from "interfaces/interfaces";
import CategoryGroup from "components/categoryType/categoryGroup";
import CategoryProduct from "components/categoryProduct/categoryProduct";
import { categoryPageCss, categoryHeaderCss } from "components/categoryPage/style";

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

      <Container maxWidth="lg">
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
