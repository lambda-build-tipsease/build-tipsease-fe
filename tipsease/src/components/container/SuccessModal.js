import React from "react";
import { Button, Header, Image, Modal } from "semantic-ui-react";

export default props => {
  console.log(props);
  return (
    <>
      <Modal.Content image>
        <Image wrapped size="medium" src={props.photoUrl} />
        <Modal.Description>
          <Header>Thanks for the ${props.tipAmount} tip!</Header>
          <Button primary onClick={() => (window.location = "/Home")}>
            Home
          </Button>
        </Modal.Description>
      </Modal.Content>
    </>
  );
};
