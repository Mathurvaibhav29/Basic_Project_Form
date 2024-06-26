import { useState } from "react";
import "./App.css";

import ModalAdvance from "./ModalAdvance.js";
const styleSheet = {
  mainDiv:
    "bg-white rounded-2xl shadow-2xl py-2.5 px-5 transition-transform duration-200 w-96 text-center mx-auto mt-5",
  heading: "text-center text-2xl",
  input:
    "block w-full p-2 box-border border border-solid border-black rounded text-xs",
  radioAndCheckBox: "inline w-1/6",
  label:
    "block text-base w-full font-medium mt-2 mb-1.5 text-left text-gray-700",
  button:
    "p-4 rounded-2xl m-4 border-none text-white bg-sky-700 w-3/12 text-base",
};
let missingEntry;
let missingData;
function App() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [url, setUrl] = useState("");
  const [about, setAbout] = useState("");
  const [gender, setGender] = useState("Male");
  const [branch, setBranch] = useState("CSE");
  const [stack, setStack] = useState("");
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const missingDataFinder = (user) => {
    const userLength = Object.keys(user).length;
    const values = Object.values(user);
    const keys = Object.keys(user);
   
    for (let i = 0; i < userLength; i++) {
      if (
        values[i] === "" ||
        values[i] === " " ||
        values[i] === null ||
        values[i] === undefined
      ) {
        missingData = keys[i];
      }
    }
    console.log(missingData + " " + "is not entered by user");
    return missingData;
  };

  const openModal = () => {
    setModalIsOpen(true);
  };
  const closeModal = () => {
    setModalIsOpen(false);
  };
  let handleSubmit = (event) => {
    event.preventDefault();

    const user = {
      firstName: firstName,
      lastName: lastName,
      email: email,
      mobile: mobile,
      url: url,
      about: about,
      gender: gender,
      branch: branch,
      stack:stack
    };
    missingEntry = missingDataFinder(user);
    if (missingEntry) {
      openModal();
      return;
    }
    localStorage.setItem("user", JSON.stringify(user));

    handleReset();
  };

  let handleReset = () => {
    setFirstName("");
    setLastName("");
    setEmail("");
    setMobile("");
    setUrl("");
    setAbout("");
    setGender("Male");
    setBranch("CSE");
    setStack("");
  };

  return (
    <div className={styleSheet.mainDiv}>
      <h1 className={styleSheet.heading}>Form Submission</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="firstName" className={styleSheet.label}>
          First Name:
        </label>
        <input
          className={styleSheet.input}
          type="text"
          id="firstName"
          value={firstName}
          onChange={(event) => setFirstName(event.target.value)}
          placeholder="Enter first name"
        />

        <label htmlFor="lastName" className={styleSheet.label}>
          Last Name:
        </label>
        <input
          type="text"
          className={styleSheet.input}
          id="lastName"
          placeholder="Enter last name"
          onChange={(event) => setLastName(event.target.value)}
          value={lastName}
        />

        <label htmlFor="Email" className={styleSheet.label}>
          Email:
        </label>
        <input
          type="email"
          id="Email"
          className={styleSheet.input}
          value={email}
          placeholder="Enter Email Address"
          onChange={(event) => setEmail(event.target.value)}
        />

        <label htmlFor="Contact" className={styleSheet.label}>
          Mobile:
        </label>
        <input
          type="tel"
          className={styleSheet.input}
          id="Contact"
          placeholder="Telephone number"
          value={mobile}
          onChange={(event) => setMobile(event.target.value)}
        />

        <div>
          <label className={styleSheet.label}>Gender:</label>
          <input
            type="radio"
            name="gender"
            id="Male"
            value="Male"
            checked={gender === "Male"}
            className={styleSheet.radioAndCheckBox}
            onChange={() => setGender("Male")}
          />
          Male
          <input
            type="radio"
            name="gender"
            id="Female"
            value="Female"
            checked={gender === "Female"}
            className={styleSheet.radioAndCheckBox}
            onChange={() => setGender("Female")}
          />
          Female
        </div>

        <div>
          <label htmlFor="Branch" className={styleSheet.label}>
            Branch:
          </label>
          CSE
          <input
            type="radio"
            name="Branch"
            id="CSE"
            value="CSE"
            checked={branch === "CSE"}
            onChange={() => setBranch("CSE")}
            className={styleSheet.radioAndCheckBox}
          />
          ECE
          <input
            type="radio"
            name="Branch"
            id="ECE"
            value="ECE"
            checked={branch === "ECE"}
            onChange={() => setBranch("ECE")}
            className={styleSheet.radioAndCheckBox}
          />
          EE
          <input
            type="radio"
            name="Branch"
            id="EE"
            value="EE"
            checked={branch === "EE"}
            onChange={() => setBranch("EE")}
            className={styleSheet.radioAndCheckBox}
          />
        </div>

        <label htmlFor="URL" className={styleSheet.label}>
          URL:
        </label>
        <input
          type="url"
          className={styleSheet.input}
          name="URL"
          id="URL"
          placeholder="Enter URL"
          value={url}
          onChange={(event) => setUrl(event.target.value)}
        />

<div>
          <label className={styleSheet.label}>Choose Tech Stack:</label>
          <select
            name="TechStack"
            id="TechStack"
            value={setStack}
            onChange={(event) => setStack(event.target.value)}
            className={styleSheet.input}
          >
            <option value="" disabled>
              Choose Below
            </option>
            <option value="MERN">MERN</option>
            <option value="MEAN">MEAN</option>
            <option value="DSC">Data Science</option>
          </select>
        </div>

        <label htmlFor="about" className={styleSheet.label}>
          About Yourself:
        </label>
        <textarea
          id="about"
          className={styleSheet.input}
          placeholder="Write About yourself"
          value={about}
          onChange={(event) => setAbout(event.target.value)}
        ></textarea>

        <button type="submit" className={styleSheet.button}>
          Submit
        </button>
        <button
          type="button"
          className={styleSheet.button}
          onClick={handleReset}
        >
          RESET
        </button>
      </form>
      <ModalAdvance
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        missingEntry={missingEntry}
      />
    </div>
  );
}

export default App;
