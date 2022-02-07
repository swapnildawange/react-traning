import { Card, CardBody, CardImg, CardText, CardTitle } from "reactstrap";

function MyCard({ name, description, image_url }) {
  return (
    <div>
      <Card
        style={{
          width: "400px",
          height: "fit-content",
          margin: "20px 0",
        }}
      >
        <CardBody>
          <CardTitle tag="h5">{name}</CardTitle>
          <CardImg alt={name} src={image_url} height="2 00px" width="100px" />

          <CardText>{description}</CardText>
        </CardBody>
      </Card>
    </div>
  );
}

export default MyCard;
