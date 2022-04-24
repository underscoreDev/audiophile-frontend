import { useRouter } from "next/router";
import styled from "styled-components";
import { colors } from "utils/theme";
import { h2 } from "utils/typography";
import { useAppSelector } from "redux/store/store";
import CategoryProduct from "components/categoryProduct/categoryProduct";
import CategoryGroup from "components/categoryType/categoryGroup";
import BestAudio from "components/bestAudio";
import { ProductsProps } from "interfaces/interfaces";

const Category = () => {
  const router = useRouter();
  const routeName = router?.query?.category;

  const { products } = useAppSelector(({ productsReducer }) => productsReducer);

  const category = products.filter(
    (product: ProductsProps) => product.category === routeName
  );

  return (
    <CategoryStyles>
      <div className="category__header">
        <h1>{routeName}</h1>
      </div>

      <div className="category__products">
        {category.map((cat: ProductsProps) => (
          <div key={cat.slug}>
            <CategoryProduct cat={cat} />
          </div>
        ))}
      </div>

      <div>
        <CategoryGroup />
        <BestAudio />
      </div>
    </CategoryStyles>
  );
};

export default Category;

const CategoryStyles = styled.div`
  .category {
    &__header {
      height: ${33.6 - 9.7 + "rem"};
      background-color: ${colors.colorBlack};
      color: ${colors.colorWhite};
      text-transform: uppercase;
      display: flex;
      align-items: center;
      justify-content: center;
      h1 {
        ${h2}
      }
    }
  }
`;
