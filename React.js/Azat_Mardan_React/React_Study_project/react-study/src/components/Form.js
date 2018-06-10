import React from "react";

const Form = props => {
  return (
    <form onSubmit={props.getWeather}>
      <input type="text" name="country" placeholder="country.." />
      <input type="text" name="city" placeholder="city.." />
      <button>날씨 알아보기</button>
    </form>
  );
};

export default Form;
