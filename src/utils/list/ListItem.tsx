import React from "react";

import Button from "react-bootstrap/Button";

import Card from "react-bootstrap/Card";

function openInNewTab(link: string) {
  window.open(link, "_blank", "noopener,noreferrer");
}

function ListItem(props: any) {
  let link = `${props.link}`;

  return (
    <>
      <Card style={{ width: "40rem" }}>
        <Card.Body>
          <Card.Title> {`${props.title}`} </Card.Title>
          <Card.Subtitle>
            {" "}
            {`${props.subtitle}`}
            {/* 8:00 - 14:00 | 29.10.2022 | AWS Zurich Office{" "} */}
          </Card.Subtitle>
          <Card.Text>
            {" "}
            {`${props.description}`}
            {/* Some quick example text to build on the card title and make up the
        bulk of the card's content. */}
          </Card.Text>
          <Button variant="primary" onClick={() => openInNewTab(link)}>
            Register
          </Button>
        </Card.Body>
      </Card>
    </>
  );
}

export default ListItem;
