import React from "react";
import Split from "../Split";
import { Formik, Form, Field } from "formik";
import axios from "axios";

const ContactSection = () => {
  const messageRef = React.useRef(null);
  function validateEmail(value) {
    let error;
    if (!value) {
      error = "Required";
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
      error = "Invalid email address";
    }
    return error;
  }
  const sendMessage = (ms) => new Promise((r) => setTimeout(r, ms));
  return (
    <section className="contact-sec section-padding" id="contact">
      <div className="container">
        <div className="sec-head custom-font text-center">
          <h6 className="wow fadeIn" data-wow-delay=".5s">
            Get In Touch
          </h6>
          <Split>
            <h3 className="wow words chars splitting" data-splitting>
              Contact Us.
            </h3>
          </Split>
          <span className="tbg">Contact</span>
        </div>
        <div className="row justify-content-center">
          <div className="col-lg-10">
            <div className="form wow fadeInUp" data-wow-delay=".5s">
              <Formik
                initialValues={{
                  name: "",
                  email: "",
                  message: "",
                }}
                onSubmit={async (values, { setSubmitting }) => {
                  setSubmitting(true);
                  await sendMessage(500);
                  // alert(JSON.stringify(values, null, 2));
                  // show message
                  const formData = new FormData();

                  formData.append("name", values.name);
                  formData.append("email", values.email);
                  formData.append("message", values.message);

                  try {
                    const res = await axios.post(
                      "https://formspree.io/f/xbjnpvek",
                      formData
                    );
                    if (res.status === 200) {
                      messageRef.current.innerText =
                        "Your Message has been successfully sent. I will contact you soon.";
                      // Reset the values
                      values.name = "";
                      values.email = "";
                      values.message = "";
                      // clear message
                      setTimeout(() => {
                        messageRef.current.innerText = "";
                      }, 2000);
                    }
                  } catch (error) {
                    console.error("Error submitting form:", error);
                    messageRef.current.innerText =
                      "There was an error submitting your message. Please try again later.";
                  } finally {
                    setSubmitting(false);
                  }
                }}
              >
                {({ errors, touched, isSubmitting }) => (
                  <Form id="contact-form">
                    <div className="messages" ref={messageRef}></div>

                    <div className="controls">
                      <div className="row">
                        <div className="col-lg-6">
                          <div className="form-group">
                            <Field
                              id="form_name"
                              type="text"
                              name="name"
                              placeholder="Name"
                              required="required"
                            />
                          </div>
                        </div>
                        <div className="col-lg-6">
                          <div className="form-group">
                            <Field
                              id="form_email"
                              type="email"
                              name="email"
                              validate={validateEmail}
                              placeholder="Email"
                              required="required"
                            />
                            {errors.email && touched.email && (
                              <div>{errors.email}</div>
                            )}
                          </div>
                        </div>
                        <div className="col-12">
                          <div className="form-group">
                            <Field
                              as="textarea"
                              id="form_message"
                              name="message"
                              placeholder="Message"
                              rows="4"
                              required="required"
                            />
                          </div>
                        </div>
                        <div className="col-12">
                          <div className="text-center">
                            <button
                              type="submit"
                              className="simple-btn custom-font cursor-pointer"
                              disabled={isSubmitting}
                            >
                              <span>Send Message</span>
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Form>
                )}
              </Formik>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
