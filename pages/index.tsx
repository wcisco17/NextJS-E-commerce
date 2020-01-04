import { NextPage } from "next";
import * as React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Container, Row } from "shards-react";
import PageTitle from "../components/PageTitle";
import { StoreState } from "../store/combine";
import { get } from "../store/products";

// interface ProductVariables {
//   products: ProductConnection;
// }

const IndexPage: NextPage = () => {
  const { products } = useSelector((store: StoreState) => store);
  const dispatch = useDispatch();

  React.useEffect(() => {
    get(dispatch);
  }, [products]);

  console.log("Yes Data", products);
  return (
    <Container fluid className="main-content-container px-4">
      <Row noGutters className="page-header py-4">
        <PageTitle
          title={`Dream Tree Shop`}
          subtitle="Shop Mindfully,"
          className="text-sm-left"
        />
      </Row>
      <Row>
        {/* {products.map(
          ({ node: { images, title, description, priceRange, id } }, key) => {
            return (
              <Col key={`${id}-${key}`}>
                <Cards
                  src={images.edges[0].node.transformedSrc}
                  title={title}
                  description={description}
                  price={priceRange.maxVariantPrice.amount}
                  onClick={() => ""}
                />
              </Col>
            );
          }
        )} */}
      </Row>
    </Container>
  );
};

export default IndexPage;
