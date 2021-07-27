import "./form.css";
import useSignUpForm from "./useSignUpForm";

const Heading = () => {
  return (
    <>
      <div className="head">
        <h1>Contact Form</h1>
      </div>
    </>
  );
};

const Form = () => {
  const { hobbies, inputs, handleInputChange, handleSubmit, checkboxHandler } =
    useSignUpForm();
  console.log(inputs, hobbies);
  return (
    <>
      <Heading />
      <form onSubmit={handleSubmit}>
        <div className="form-container">
          <div className="name mr">
            <label htmlFor="name">Name : </label>
            <input
              type="text"
              name="name"
              className="name"
              placeholder="Enter Name"
              value={inputs.name}
              onChange={handleInputChange}
            />
          </div>
          <div className="email mr">
            <label htmlFor="email">Email ID : </label>
            <input
              type="text"
              name="email"
              className="email"
              placeholder="Enter Email"
              value={inputs.email}
              onChange={handleInputChange}
            />
          </div>
          <div className="mobile mr">
            <label htmlFor="mobile">Mobile : </label>
            <input
              type="tel"
              name="mobile"
              className="mobile"
              placeholder="Enter Mobile no."
              value={inputs.mobile}
              onChange={handleInputChange}
            />
          </div>
          <div className="address mr">
            <label htmlFor="address">Address : </label>
            <input
              type="text"
              name="address"
              className="address"
              placeholder="Enter Address"
              value={inputs.address}
              onChange={handleInputChange}
            />
          </div>
          <div className="gender mr">
            <label htmlFor="gender">Gender : </label>
            <input
              type="radio"
              name="gender"
              className="male"
              value="male"
              onChange={handleInputChange}
            />
            <span>Male</span>
            <input
              type="radio"
              name="gender"
              className="female"
              value="female"
              onChange={handleInputChange}
            />
            <span>Female</span>
          </div>
          <div className="aadhar mr">
            <label htmlFor="aadhar">Aadhar Number : </label>
            <input
              type="tel"
              name="aadhar"
              className="aadhar"
              value={inputs.aadhar}
              onChange={handleInputChange}
            />
          </div>
          <div className="Hobbies mr">
            <label htmlFor="hobbies">HOBBIES : </label>
            <input
              type="checkbox"
              name="hobbies"
              className="cricket"
              value="cricket"
              index="0"
              checked={hobbies.cricket}
              onChange={checkboxHandler}
            />
            <span>Cricket</span>
            <input
              type="checkbox"
              name="hobbies"
              className="hockey"
              value="hockey"
              index="1"
              checked={hobbies.hockey}
              onChange={checkboxHandler}
            />
            <span>Hockey</span>
            <input
              type="checkbox"
              name="hobbies"
              className="badminton"
              value="badminton"
              index="2"
              checked={hobbies.badminton}
              onChange={checkboxHandler}
            />
            <span>Badminton</span>
            <input
              type="checkbox"
              name="hobbies"
              className="tennis"
              value="tennis"
              index="3"
              checked={hobbies.tennis}
              onChange={checkboxHandler}
            />
            <span>tennis</span>
          </div>
        </div>
        <div className="submit-btn mr">
          <input
            type="submit"
            name="submit"
            className="submit"
            value="submit"
          />
        </div>
      </form>
    </>
  );
};

export default Form;
