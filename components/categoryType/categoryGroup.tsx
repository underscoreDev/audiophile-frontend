import Box from "@mui/material/Box";
import CategoryType from "components/categoryType/categoryType";
import { categoryGroupCss, marginCss } from "components/categoryType/style";

const CategoryGroup = () => {
  return (
    <Box css={categoryGroupCss}>
      <CategoryType type="headphones" />
      <Box css={marginCss}>
        <CategoryType type="speakers" />
      </Box>
      <CategoryType type="earphones" />
    </Box>
  );
};

export default CategoryGroup;
