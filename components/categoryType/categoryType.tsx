import Image from "next/image";
import Box from "@mui/material/Box";
import { useRouter } from "next/router";
import Button from "components/buttons";
import speaker from "assets/shared/desktop/image-category-thumbnail-speakers.png";
import earphones from "assets/shared/desktop/image-category-thumbnail-earphones.png";
import headphones from "assets/shared/desktop/image-category-thumbnail-headphones.png";
import { categoryTypeCss, categoryIconCss, categorydescCss } from "components/categoryType/style";

interface Type {
  type: "headphones" | "speakers" | "earphones";
}

const CategoryType = ({ type }: Type) => {
  const router = useRouter();
  let greg;

  switch (type) {
    case "headphones":
      greg = <Image width={146} height={146} alt={type} src={headphones} />;
      break;
    case "speakers":
      greg = <Image width={146} height={146} alt={type} src={speaker} />;
      break;
    case "earphones":
      greg = <Image width={146} height={146} alt={type} src={earphones} />;
      break;
    default:
      greg = <Image width={146} height={146} alt={type} src={headphones} />;
      break;
  }

  return (
    <Box css={categoryTypeCss}>
      <Box css={categoryIconCss}>{greg}</Box>
      <Box css={categorydescCss}>
        <h1>{type.toUpperCase()}</h1>
        <Box onClick={() => router.push(`/category/${type}`)}>
          <Button text="shop" variant="BORDER-LESS_BLACK" />
        </Box>
      </Box>
    </Box>
  );
};

export default CategoryType;
