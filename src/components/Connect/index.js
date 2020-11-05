import React, { useState, useRef } from "react";
import { Wrapper, HeadingH2, Form, Button } from "./connect.css.js";
import { TextArea, Textbox } from "../Form";

export const Connect = () => {
  const [nameInvalid, setNameInvalid] = useState(false);
  const [emailInvalid, setEmailInvalid] = useState(false);
  const [messageInvalid, setMessageInvalid] = useState(false);

  const nameRef = useRef(null);
  const emailRef = useRef(null);
  const messageRef = useRef(null);

  const validateEmail = () => {
    const re = /^(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])$/;
    const result = re.test(emailRef.current.value);
    setEmailInvalid(!result);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    setNameInvalid(nameRef.current.value === "" ? true : false);
    setMessageInvalid(messageRef.current.value === "" ? true : false);
    validateEmail();
  };

  return (
    <Wrapper>
      <HeadingH2 size="H2">Connect with us</HeadingH2>
      <Form action="POST" submit={submitHandler}>
        <Textbox name="name" error={nameInvalid} inputRef={nameRef} />
        <Textbox
          name="email"
          error={emailInvalid}
          errMsg="Must be a valid Email"
          inputRef={emailRef}
        />
        <TextArea name="message" error={messageInvalid} inputRef={messageRef} />
        <Button text={""} type="submit" />
      </Form>
    </Wrapper>
  );
};
