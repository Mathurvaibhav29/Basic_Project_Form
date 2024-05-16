import { useState } from "react";
import "./App.css";
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
function App() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [url, setUrl] = useState("");
  const [about, setAbout] = useState("");
  const [gender, setGender] = useState("Male");
  const [branch, setBranch] = useState("CSE");
  const [selectedOption, setSelectedOption] = useState("");

  return (
    <div className={styleSheet.mainDiv}>
      <h1 className={styleSheet.heading}>Form Submission</h1>
      <form>
        <label htmlFor="firstName" className={styleSheet.label}>
          {" "}
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
      </form>
      <form>
        <label htmlFor="lastName" className={styleSheet.label}>
          {" "}
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
      </form>
      <form>
        <label htmlFor="Email" className={styleSheet.label}>
          {" "}
          Email:{" "}
        </label>
        <input
          type="email"
          id="Email"
          className={styleSheet.input}
          value={email}
          placeholder="Enter Email Address"
          onChange={(event) => setEmail(event.target.value)}
        />
      </form>
      <form>
        <label htmlFor="Contact" className={styleSheet.label}>
          {" "}
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
      </form>
      <div>
        <label className={styleSheet.label}>Gender:</label>
        <input
          type="radio"
          name="gender"
          id="Male"
          value={gender}
          checked={gender === "Male"}
          className={styleSheet.radioAndCheckBox}
          onChange={() => setGender("Male")}
        />
        Male
        <input
          type="radio"
          name="gender"
          id="Female"
          value={gender}
          checked={gender === "Female"}
          className={styleSheet.radioAndCheckBox}
          onChange={() => setGender("Female")}
        />
        Female
      </div>

      <div className={styleSheet.radioAndCheckBox}>
        <label htmlFor="Branch" >
          CSE
          <input
            type="radio"
            name="Branch"
            id="CSE"
            value={branch}
            checked={branch === "CSE"}
            onChange={() => setBranch("CSE")}
            className={styleSheet.radioAndCheckBox}
          />
        </label>
        <label htmlFor="Branch">
          ECE
          <input
            type="radio"
            name="Branch"
            id="ECE"
            value={branch}
            checked={branch === "ECE"}
            onChange={() => setBranch("ECE")}
            className={styleSheet.radioAndCheckBox}
          />
        </label>
        <label htmlFor="Branch">
          EE
          <input
            type="radio"
            name="Branch"
            id="EE"
            value={branch}
            checked={branch === "EE"}
            onChange={() => setBranch("EE")}
            className={styleSheet.radioAndCheckBox}
          />
        </label>
      </div>
      <form>
        <label htmlFor="URL"> URL </label>
        <input
          type="url"
          className={styleSheet.input}
          name="URL"
          id="URL"
          placeholder="Enter URL"
          value={url}
          onChange={(event) => setUrl(event.target.value)}
        />
      </form>
      <div>
        <label className={styleSheet.label}>Choose Tech Stack:</label>
        <select
          name="TechStack"
          id="TechStack"
          placeholder="Choose Below"
          value={selectedOption}
        >
          <option value="" disabled selected={selectedOption === ""}>
            Choose Below
          </option>

          <option value="1">MERN</option>
          <option value="2">MEAN</option>
          <option value="3">Data Science</option>
        </select>
      </div>

      <div>
        <label htmlFor="" className={styleSheet.label}>
          About Yourself:
        </label>
        <textarea
          className={styleSheet.input}
          placeholder="Write About yourself"
          value={about}
          onChange={(event) => setAbout(event.target.value)}
        ></textarea>
      </div>

      <button className={styleSheet.button}>Submit</button>
      <button className={styleSheet.button}>RESET</button>
    </div>
  );
}

export default App;
