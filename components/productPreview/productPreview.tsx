import Image from "next/image";
import styled from "styled-components";
import { h5 } from "utils/typography";
import Button from "components/buttons/button";
import { useRouter } from "next/router";

interface ProductPreviewProps {
  text: string;
  image: any;
  slug: string;
}

const ProductPreview = ({ text, image, slug }: ProductPreviewProps) => {
  const router = useRouter();

  return (
    <ProductPreviewStyles>
      <div className="product">
        <span className="product__img">
          <Image width={350} height={318} alt={text} src={image} />
        </span>
        <span className="product__description">
          <h1>{text.toUpperCase()}</h1>
          <span onClick={() => router.push(`/product/${slug}`)}>
            <Button text="see product" variant="PINK_DARK" />
          </span>
        </span>
      </div>
    </ProductPreviewStyles>
  );
};

export default ProductPreview;

const ProductPreviewStyles = styled.div`
  .product {
    width: 35rem;
    height: 47rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    &__img {
      overflow: hidden;
      border-radius: 0.8rem;
      box-shadow: 0.1rem 0rem 0.1rem rgba(0, 0, 0, 0.1);
    }

    &__description {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: space-between;

      h1 {
        ${h5}
        margin-bottom: 3rem;
      }
    }
  }
`;
