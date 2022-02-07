import axios from "axios";
import { useState } from "react";
import { useQueryClient } from "react-query";
import { Button, Form, FormGroup, Input } from "reactstrap";
export default function LoginForm({ onLoginSuccess }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const queryClient = useQueryClient();
  const onSubmit = (event) => {
    event.preventDefault();

    const isLongEnough = password.length >= 8;
    const hasNoSpace = !password.includes(" ");
    let isValidated = isLongEnough && hasNoSpace;

    if (isValidated) {
      axios
        .post(`https://reqres.in/api/login`, {
          email,
          password,
        })
        .then(({ data }) => {
          onLoginSuccess(data.token);
        })
        .catch((err) => {
          console.log("err", err);
        });
    } else {
      alert("Login Failed!");
    }
  };
  const clearEmail = (event) => {
    event.preventDefault();
    setEmail("");
  };

  return (
    <Form onSubmit={onSubmit}>
      <FormGroup
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Input
          bsSize="lg"
          name="email"
          placeholder="Email"
          type="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />
        <Button style={{ margin: "0 5px" }} close onClick={clearEmail} />
      </FormGroup>
      <FormGroup>
        <Input
          bsSize="lg"
          name="password"
          placeholder="Password"
          type="password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />
      </FormGroup>
      <div
        style={{
          display: "flex",
          justifyContent: "flex-start",
          gap: "30px",
        }}
      >
        <Button color="danger" outline type="reset">
          Reset
        </Button>
        <Button color="success" type="submit">
          Submit
        </Button>
      </div>
    </Form>
  );
}
/* return (
    <form
      style={{
        width,
        height,
      }}
      onSubmit={onSubmit}
    >
      <div
        style={{
          margin: "10px 0",
        }}
      >
        <Input
          name="email"
          type="email"
          placeholder="email"
          value={email}
          onChangeHandler={(event) => setEmail(event.target.value)}
          children={<Button onClick={clearEmail} title="&times;" />}
        />
        <Input
          name="password"
          type="password"
          placeholder="password"
          value={password}
          onChangeHandler={(event) => setPassword(event.target.value)}
          children={<Button onClick={clearEmail} title="&times;" />}
        />
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Button
          type="reset"
          title="reset"
          background="white"
          border="red"
          color="red"
        />
        <Button type="submit" title="submit" background="green" color="white" />
      </div>
    </form>
  ); */
