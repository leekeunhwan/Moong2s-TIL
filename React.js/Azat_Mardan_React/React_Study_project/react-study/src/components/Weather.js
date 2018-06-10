import React from "react";

const Weather = props => {
  return (
    <div>
      {props.city &&
        props.country && (
          <p className="weather__key">
            위치 :
            <span>
              {props.country}, {props.city}
            </span>
          </p>
        )}
      {props.temperature && (
        <p className="weather__key">
          온도 :
          <span>{props.temperature}</span>
        </p>
      )}
      {props.humidity && (
        <p className="weather__key">
          습도 :
          <span>{props.humidity}</span>
        </p>
      )}
      {props.description && (
        <p className="weather__key">
          날씨 상태 :
          <span>{props.description}</span>
        </p>
      )}
      {props.error && (
        <p className="weather__key">
          <span>{props.error}</span>
        </p>
      )}
    </div>
  );
};

export default Weather;
