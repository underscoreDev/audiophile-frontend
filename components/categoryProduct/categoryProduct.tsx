import Image from "next/image";
import { ProductsProps } from "interfaces/interfaces";
import Button from "components/buttons/button";
import Router from "next/router";

type categoryProp = {
  cat: ProductsProps;
};

const CategoryProduct = ({ cat }: categoryProp) => {
  return (
    <div>
      <div>
        <Image src={cat.image.desktop} alt={`${cat.name} image`} />
      </div>
      <div>
        {cat.new && <h3>New Product</h3>}
        <h1>{cat.name}</h1>
        <p>{cat.description}</p>
        <span onClick={() => Router.push(`/product/${cat.slug}`)}>
          <Button text="see product" variant="PINK_DARK" />
        </span>
      </div>
    </div>
  );
};

export default CategoryProduct;
