import { useEffect, useState } from "react";
import "./Contact.scss";

const Contact = () => {
  const [alertMess, setAlertMess] = useState(false);
  const [input, setInput] = useState({ email: "", message: "" });
  const [userData, setUserData] = useState(
    JSON.parse(localStorage.getItem("userData")) || []
  );
  // *** HandleChange function...
  const handleChange = (e) => {
    const { name, value } = e.target;
    setInput((pervValue) => ({ ...pervValue, [name]: value }));
    console.log(name, value);
  };
  console.log(input.email, input.message);

  const handleSubmit = (e) => {
    e.preventDefault();
    setAlertMess(true);
    if (input.email && input.message) {
      const id = new Date().getTime(0).toString();
      const newPerson = { ...input, id };
      setUserData([...userData, newPerson]);
      setInput({ email: "", message: "" });
    } else {
      alert("Please enter some value");
    }
  };
  // *** Removing User from the dom
  const removeUser = (id) => {
    const currentPerson = userData.filter((person) => person.id !== id);
    setUserData(currentPerson);
  };

  // *** Using LocalStorage to store the data.
  useEffect(() => {
    localStorage.setItem("userData", JSON.stringify(userData));
  }, [userData]);

  // *** Vanising the success message.
  useEffect(() => {
    setTimeout(() => {
      console.log("hello");
    }, 3000);
  }, [alertMess]);
  return (
    <>
      <div className="C_contact flex" id="contact">
        <h2>{alertMess}</h2>
        <div className="form_container">
          <div className="form_content">
            <div className="col col1">
              <div className="image_container">
                <img
                  className="contact_image"
                  src="http://unsplash.it/1000/1000?image=341"
                  alt=""
                />
              </div>
            </div>
            <div className="col col2">
              <div className="form_container1">
                <h2 className="form_title">contact</h2>
                <form action="" onSubmit={handleSubmit}>
                  <input
                    type="email"
                    placeholder="Email"
                    id="email"
                    name="email"
                    onChange={handleChange}
                    value={input.email}
                  />
                  <textarea
                    name="message"
                    placeholder="Message"
                    type="text"
                    onChange={handleChange}
                    value={input.message}
                    id="message"
                    rows="10"
                    cols="30"
                  ></textarea>
                  <div className="btn_container">
                    <button className="btn" type="submit">
                      Send
                    </button>
                  </div>
                  {alertMess && <span>Successfully Submited 👍</span>}
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="personData">
        <h2 className="form_title">Form Data</h2>
        {userData.map((data) => {
          const { id, email, message } = data;
          return (
            <div key={id} className="person">
              <p>{email}</p>
              <p>{message}</p>
              <button
                type="button"
                className="btn"
                onClick={() => removeUser(id)}
              >
                remove
              </button>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Contact;
