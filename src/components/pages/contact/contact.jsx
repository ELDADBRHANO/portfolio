import "./contact.css";
import { useFormik } from "formik";
import { Button, Container } from "react-bootstrap";
import { messageSuccess } from "../../../utils/tostifyNotify";
const initialValues = {
  name: "Please enter your full name.",
  email: "Please enter a valid Email.",
  text: "Now you can send me your message!",
};
const onSubmit = (values) => {
  console.log("Form data", values);
};
const validate = (values) => {
  let errors = {};
  if (!values.name) {
    errors.name = "required";
  }
  if (!values.lastName) {
    errors.lastName = "required";
  }
  if (!values.email) {
    errors.email = "required";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = "Invalid email format.";
  }

  if (!values.text) {
    errors.text = "required";
  }
  return errors;
};

const Contact = () => {
  const formik = useFormik({
    initialValues,
    onSubmit,
    validate,
  });

  const toastify =()=>{
    messageSuccess()
  }
  return (
    <Container>
      <div id="contact-div">
        <h2 className="project-heading">Contact Me</h2>
      </div>
      <Container className="form_fontainer">
        <form id="formm" onSubmit={formik.handleSubmit}>
          <div className="form-control">
            <label htmlFor="name">Full Name</label>
            <input
              type="text"
              id="name"
              name="name"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.name}
            />
            {formik.touched.name && formik.errors.name ? (
              <div className="error">{formik.errors.name}</div>
            ) : null}
          </div>

          <div className="form-control">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.email}
            />
            {formik.touched.email && formik.errors.email ? (
              <div className="error">{formik.errors.email}</div>
            ) : null}
          </div>

          <div className="form-control">
            <label htmlFor="channel">Message</label>
            <textarea
              type="text"
              id="text"
              name="text"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.text}
            />
            {formik.touched.channel && formik.errors.channel ? (
              <div className="error">{formik.errors.channel}</div>
            ) : null}
          </div>
          <div id="btn-contact-div">
          <Button onClick={toastify} style={{ color: "yellow" }} type="submit">
            Submit
          </Button>
          </div>
        </form>
      </Container>
    </Container>
  );
};
export default Contact;
