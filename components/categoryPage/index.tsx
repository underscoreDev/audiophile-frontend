import Box from "@mui/material/Box";
import BestAudio from "components/bestAudio";
import Container from "@mui/material/Container";
import { useAppSelector } from "redux/store/store";
import { ProductsProps } from "interfaces/interfaces";
import CategoryProduct from "components/categoryProduct/categoryProduct";
import { categoryPageCss, categoryHeaderCss } from "components/categoryPage/style";
import CategoryGroup from "components/categoryGroup";
import { useLocation, useTitle } from "react-use";

const Category = () => {
  const location = useLocation();
  const routeName = location?.pathname?.slice(1)
  useTitle(`AUDIOPHILE | ${routeName.toUpperCase()}`)
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
