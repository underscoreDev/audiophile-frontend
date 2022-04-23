import Image from "next/image";
import styled from "styled-components";
import headphones from "assets/shared/desktop/image-category-thumbnail-headphones.png";
import earphones from "assets/shared/desktop/image-category-thumbnail-earphones.png";
import speaker from "assets/shared/desktop/image-category-thumbnail-speakers.png";
import { colors } from "utils/theme";
import { h6 } from "utils/typography";
import Button from "components/buttons/button";
import { useRouter } from "next/router";

interface Type {
  type: "headphones" | "speakers" | "earphones";
}
const CategoryType = ({ type }: Type) => {
  const router = useRouter();
  let greg;
  if (type === "headphones") {
    greg = <Image width={146} height={146} alt={type} src={headphones} />;
  } else if (type === "speakers") {
    greg = <Image width={146} height={146} alt={type} src={speaker} />;
  } else if (type === "earphones") {
    greg = <Image width={146} height={146} alt={type} src={earphones} />;
  }
  return (
    <Category>
      <div className="category">
        <div className="category__icon">{greg}</div>
        <div className="category__description">
          <h1>{type.toUpperCase()}</h1>
          <span
            onClick={() =>
              router.push(`
            /category/${type}
          `)
            }
          >
            <Button text="shop" variant="BORDER-LESS_BLACK" />
          </span>
        </div>
      </div>
    </Category>
  );
};

export default CategoryType;

export const Category = styled.div`
  .category {
    /* height: 28.4rem; */
    width: 35rem;
    display: grid;
    grid-template-rows: 8rem 20.4rem;
    grid-template-columns: 1fr;
    box-shadow: 0rem 0.3rem 0rem rgba(0, 0, 0, 0.1);
    overflow: hidden;
    border-radius: 0.8rem;
    border: none;

    &__icon {
      position: relative;
      margin: 0 auto;
      top: 2rem;
    }

    &__description {
      border-radius: 0.8rem;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: end;
      background-color: ${colors.colorDarkWhite};
      padding-bottom: 3rem;
      h1 {
        ${h6}
      }
    }
  }
`;
