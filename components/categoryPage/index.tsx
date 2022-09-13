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
  const routeName = location?.pathname?.slice(1);
  useTitle(`${routeName?.toUpperCase()} | AUDIOPHILE`);
  const { products } = useAppSelector(({ productsReducer }) => productsReducer);
  const category = products.filter((product: ProductsProps) => product.category === routeName);

  return (
    <Box css={categoryPageCss}>
      <Box css={categoryHeaderCss}>
        <h1>{routeName}</h1>
      </Box>

      <Container sx={{ maxWidth: { xs: "lg", xl: "xl" } }}>
        <Box>
          {category.map((cat, idx) => (
            <Box key={cat.slug}>
              <CategoryProduct idx={idx} cat={cat} />
            </Box>
          ))}
        </Box>

        <Box sx={{ marginBottom: "12rem" }}>
          <Box sx={{ margin: { xs: "20rem 0 15rem 0", sm: "15rem 0" } }}>
            <CategoryGroup />
          </Box>
          <BestAudio />
        </Box>
      </Container>
    </Box>
  );
};

export default Category;
