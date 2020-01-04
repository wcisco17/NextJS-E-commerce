import * as React from "react";
import { Button, Card, CardBody, CardImg, CardTitle } from "shards-react";

interface ICards {
  src: string;
  title: string;
  description: string;
  price: number | any;
  onClick: () => void;
}

const Cards: React.FunctionComponent<ICards> = ({
  src,
  title,
  description,
  price,
  onClick
}) => {
  return (
    <Card small className="card-post card-post--1">
      <CardImg className="rounded-lg" src={src} />
      <CardBody>
        <CardTitle>{title}</CardTitle>
        <p>{description}</p>
        <p className="font-weight-bold text-success">${price}</p>
        <Button onClick={onClick} size="sm" className="mr-3">
          View &#x2192;
        </Button>
      </CardBody>
    </Card>
  );
};
export default Cards;
