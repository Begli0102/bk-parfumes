import { useState, useEffect } from "react";
import axios from "axios";
import { Link, useHistory } from "react-router-dom";

import {
  Container,
  Wrapper,
  Title,
  Form,
  Input,
  Button,
  Li,
  Error,
  Loading,
} from "../styled-components/loginPage";

const LoginPage = () => {
  const initialValues = { email: "", password: "" };
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);
  const [loading, setLoading] = useState(false);
  const history = useHistory();


  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .post("https://bk-parfumes.herokuapp.com/users/login", {
        email: formValues.email,
        password: formValues.password,
      })
      .then(
        (response) => {
          const data = response.data;
          console.log(data);

          localStorage.setItem("userInfo", JSON.stringify(data.token));
        },
        setLoading(true),
        history.push("/home")
      )
      .catch((error) => {
        if (error.response) {
          console.log(error.response.data);
        }
      });
    setFormErrors(validate(formValues));
    setIsSubmit(true);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  useEffect(() => {
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      console.log(formValues);
    }
  }, [formErrors]);

  const validate = (values) => {
    const errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    if (!values.email) {
      errors.email = "Email is required!";
    } else if (!regex.test(values.email)) {
      errors.email = "This is not a valid email format!";
    }
    if (!values.password) {
      errors.password = "Password is required";
    } else if (values.password.length < 4) {
      errors.password = "Password must be more than 4 characters";
    } else if (values.password.length > 10) {
      errors.password = "Password cannot exceed more than 10 characters";
    } else if (formValues) return errors;
  };

  return (
    <Container>
      <Wrapper>
        {loading ? <Loading>Loading...</Loading> : ""}

        <Title>Sign in</Title>
        <Form>
          <Input
            name="email"
            placeholder="email"
            value={formValues.email}
            onChange={handleChange}
          ></Input>
          <Error>{formErrors.email}</Error>
          <Input
            name="password"
            type="password"
            placeholder="password"
            value={formValues.password}
            onChange={handleChange}
          ></Input>
          <Error>{formErrors.password}</Error>
          <Button onClick={handleSubmit}>Log in</Button>
          <Li>FORGOT THE PASSWORD?</Li>
          <Link
            style={{
              textDecoration: "none",
              color: "white",
              fontWeight: "bold",
            }}
            to="/register"
          >
            CREATE A NEW ACCOUNT
          </Link>
        </Form>
      </Wrapper>
    </Container>
  );
};
export default LoginPage;
