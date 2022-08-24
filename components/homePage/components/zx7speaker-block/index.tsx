import Image from "next/image";
import Box from "@mui/material/Box";
import { useRouter } from "next/router";
import Button from "components/buttons";
import {
  zx7DescriptionCss,
  zx7ImageCss,
  zx7SpeakerCss,
} from "components/homePage/components/zx7speaker-block/style";
import Zx7SpeakerImage from "components/homePage/components/zx7speaker-block/images/image-speaker-zx7.jpg";

const Zx7Speaker = () => {
  const router = useRouter();
  return (
    <Box css={zx7SpeakerCss}>
      <Box css={zx7ImageCss}>
        <Image src={Zx7SpeakerImage} alt="Zx7Speaker" />
      </Box>

      <Box css={zx7DescriptionCss}>
        <h1>ZX7 SPEAKER</h1>

        <Button
          onClick={() => router.push("/product/zx7-speaker")}
          text="see product"
          variant="BORDERED"
        />
      </Box>
    </Box>
  );
};

export default Zx7Speaker;
