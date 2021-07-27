import { useState } from "react";
import axios from "axios";
const useSignUpForm = () => {
  const [inputs, setInputs] = useState({
    name: "",
    email: "",
    mobile: "",
    address: "",
    gender: "",
    aadhar: ""
  });
  const [hobbies, setHobbies] = useState({
    cricket: false,
    hockey: false,
    badminton: false,
    tennis: false
  });
  const handleSubmit = (event) => {
    if (event) {
      event.preventDefault();
      let tempArray = [];
      for (const key in hobbies) {
        if (hobbies[key] === true) tempArray.push(key);
      }
      let resultArray = {
        name: inputs.name,
        email: inputs.email,
        mobile: inputs.mobile,
        address: inputs.address,
        gender: inputs.gender,
        aadhar: inputs.aadhar,
        hobbies: tempArray
      };
      console.log(resultArray);
      axios({
        url: "/postdata/save",
        method: "post",
        data: resultArray
      })
        .then((response) => {
          console.log(response);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };
  const handleInputChange = (event) => {
    setInputs({ ...inputs, [event.target.name]: event.target.value });
  };
  const checkboxHandler = (event) => {
    let name = event.target.value;
    event.target.checked
      ? setHobbies({ ...hobbies, [name]: true })
      : setHobbies({ ...hobbies, [name]: false });
  };
  return {
    handleInputChange,
    handleSubmit,
    checkboxHandler,
    inputs,
    hobbies
  };
};

export default useSignUpForm;
