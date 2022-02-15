import { useState, useEffect } from "react";
import axios from "axios";
import {
  Container,
  Wrapper,
  Title,
  Form,
  Input,
  Agreement,
  Button,
  Error,
  Success,
  Loading,
} from "../styled-components/registerPage";

const RegisterPage = () => {
  const initialValues = { name: "", surname: "", email: "", password: "" };
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .post("http://localhost:8080/users/register", {
        name: formValues.name,
        surname: formValues.surname,
        email: formValues.email,
        password: formValues.password,
      })
      .then((response) => {
        const data = response.data;
        console.log(data);
        setFormValues("");

        window.open("/login", "_self"); // the second argument '_self' is necessary so that the page will open in the current tab
      }, setLoading(true))
      .catch((error) => {
        if (error.response) {
          console.log(error.response.data);
          // setFormErrors(error.response.data);
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
    console.log(formErrors);
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      console.log(formValues);
    }
  }, [formErrors]);

  const validate = (values) => {
    const errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;

    if (!values.name) {
      errors.name = "Name is required!";
    } else if (!values.surname) {
      errors.surname = "Surname is required!";
    } else if (!values.email) {
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
    }
    return errors;
  };

  return (
    <Container>
      <Wrapper>
        {loading ? <Loading>Loading...</Loading> : ""}

        {Object.keys(formErrors).length === 0 && isSubmit ? (
          <Success>You have registered sucessfully! </Success>
        ) : (
          ""
        )}
        <Title>Create an account</Title>
        <Form>
          <Input
            name="name"
            placeholder="name"
            value={formValues.name}
            onChange={handleChange}
          ></Input>
          <Error>{formErrors.name}</Error>
          <Input
            name="surname"
            placeholder="surname"
            value={formValues.surname}
            onChange={handleChange}
          ></Input>
          <Error>{formErrors.surname}</Error>
          <Input
            name="email"
            placeholder="email"
            type="email"
            value={formValues.email}
            onChange={handleChange}
          ></Input>
          <Error>{formErrors.email}</Error>
          <Input
            name="password"
            placeholder="password"
            type="password"
            value={formValues.password}
            onChange={handleChange}
          ></Input>
          <Error>{formErrors.password}</Error>
          <Agreement>
            By creating an account, I consent to the processing of my personal
            data in accordance with the <b>PRIVACY POLICY</b>
          </Agreement>
          <Button onClick={handleSubmit} value="submit">
            Create
          </Button>
        </Form>
      </Wrapper>
    </Container>
  );
};
export default RegisterPage;

// import { useState, useEffect } from "react";
// import axios from "axios";
// import {
//   Container,
//   Wrapper,
//   Title,
//   Form,
//   Input,
//   Agreement,
//   Button,
//   Error,
//   Success,
// } from "../styled-components/registerPage";

// const RegisterPage = () => {
//   const initialValues = { name: "", surname: "", email: "", password: "" };
//   const [formValues, setFormValues] = useState(initialValues);
//   const [formErrors, setFormErrors] = useState({});
//   const [isSubmit, setIsSubmit] = useState(false);

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     axios
//       .post("http://localhost:8080/users/register", {
//         name: formValues.name,
//         surname: formValues.surname,
//         email: formValues.email,
//         password: formValues.password,
//       })
//       .then((response) => {

//         const data = response.data;
//         console.log(data);
//         setFormValues("");

//         window.open("/login", "_self"); // the second argument '_self' is necessary so that the page will open in the current tab
//       })
//       .catch((error) => {
//         if (error.response) {
//           // console.log(error.response.data);
//           setFormErrors( error.response.data );
//         }
//       });
//     setFormErrors(validate(formValues));
//     setIsSubmit(true);
//   };

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormValues({ ...formValues, [name]: value });
//   };

//   useEffect(() => {
//     console.log(formErrors);
//     if (Object.keys(formErrors).length === 0 && isSubmit) {
//       console.log(formValues);
//     }
//   }, [formErrors]);

//   const validate = (values) => {
//     const errors = {};
//     const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;

//     if (!values.name) {
//       errors.name = "Name is required!";
//     } else if (!values.surname) {
//       errors.surname = "Surname is required!";
//     } else if (!values.email) {
//       errors.email = "Email is required!";
//     } else if (!regex.test(values.email)) {
//       errors.email = "This is not a valid email format!";
//     }
//     if (!values.password) {
//       errors.password = "Password is required";
//     } else if (values.password.length < 4) {
//       errors.password = "Password must be more than 4 characters";
//     } else if (values.password.length > 10) {
//       errors.password = "Password cannot exceed more than 10 characters";
//     }
//     return errors;
//   };

//   return (
//     <Container>
//       <Wrapper>
//         {Object.keys(formErrors).length === 0 && isSubmit ? (
//           <Success>You have registered sucessfully! </Success>
//         ) : (
//           ""
//         )}

//         <Title>Create an account</Title>
//         <Form>
//           <Input
//             name="name"
//             placeholder="name"
//             value={formValues.name}
//             onChange={handleChange}
//           ></Input>
//           <Error>{formErrors.name}</Error>
//           <Input
//             name="surname"
//             placeholder="surname"
//             value={formValues.surname}
//             onChange={handleChange}
//           ></Input>
//           <Error>{formErrors.surname}</Error>
//           <Input
//             name="email"
//             placeholder="email"
//             type="email"
//             value={formValues.email}
//             onChange={handleChange}
//           ></Input>
//           <Error>{formErrors.email}</Error>
//           <Input
//             name="password"
//             placeholder="password"
//             type="password"
//             value={formValues.password}
//             onChange={handleChange}
//           ></Input>
//           <Error>{formErrors.password}</Error>
//           <Agreement>
//             By creating an account, I consent to the processing of my personal
//             data in accordance with the <b>PRIVACY POLICY</b>
//           </Agreement>
//           <Button onClick={handleSubmit} value="submit">
//             Create
//           </Button>
//         </Form>
//       </Wrapper>
//     </Container>
//   );
// };
// export default RegisterPage;
