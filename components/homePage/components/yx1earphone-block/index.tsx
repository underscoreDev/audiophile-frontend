import Image from "next/image";
import Box from "@mui/material/Box";
import { useRouter } from "next/router";
import Button from "components/buttons";
import {
  yx1Css,
  yx1DecsriptionCss,
  yx1ImageCss,
} from "components/homePage/components/yx1earphone-block/style";
import yx1 from "assets/home/desktop/image-earphones-yx1.jpg";

const Yx1Earphone = () => {
  const router = useRouter();
  return (
    <Box css={yx1Css}>
      <Image css={yx1ImageCss} src={yx1} alt="YX1 earphones" />

      <Box css={yx1DecsriptionCss}>
        <h1>YX1 EARPHONES</h1>

        <Button
          onClick={() => router.push("/product/yx1-earphones")}
          text="see product"
          variant="BORDERED"
        />
      </Box>
    </Box>
  );
};

export default Yx1Earphone;
