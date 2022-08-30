import Image from "next/image";
import { useRouter } from "next/router";
import Box from "@mui/material/Box";
import { css } from "styled-components/macro";
import Button from "components/buttons";
import { ProductsProps } from "interfaces/interfaces";
import { body, h1, lightText } from "utils/typography";
import Grid from "@mui/material/Unstable_Grid2";

interface categoryProp {
  cat: ProductsProps;
  idx: number;
}

export const categoryProductDescCss = css`
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
    padding-right: 5rem;
  }
`;

const CategoryProduct = ({ cat, idx }: categoryProp) => {
  const router = useRouter();
  return (
    <Grid
      container
      flexDirection={idx % 2 === 0 ? "row" : "row-reverse"}
      alignItems="center"
      justifyContent="space-between"
      sx={{ margin: { xs: "7rem 0", sm: "13rem 0" } }}
    >
      <Grid xs={12} sm={6} sx={{ margin: { xs: "5rem 0", sm: 0 } }}>
        <Image width={540} height={560} src={cat.categoryImage.desktop} alt={`${cat.name} image`} />
      </Grid>

      <Grid sx={{ paddingLeft: { xs: 0, sm: "3rem" } }} xs={12} sm={6} css={categoryProductDescCss}>
        {cat.new && <h3>NEW PRODUCT</h3>}

        <h1>{cat.name}</h1>

        <p>{cat.description}</p>

        <Button
          onClick={() => router.push(`/product/${cat.slug}`)}
          text="see product"
          variant="PINK_DARK"
        />
      </Grid>
    </Grid>
  );
};

export default CategoryProduct;
