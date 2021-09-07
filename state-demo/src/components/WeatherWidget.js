const WeatherWidget = (props) => {
  let temperature = props.celcius;
  let unitIsFarenheit = props.unit === 'F';

  if (unitIsFarenheit) {
    temperature = Math.round(props.celcius * 1.8 + 32);
  }

  return (
    <div className="WeatherWidget">
      <span>{props.icon}</span>
      <h3>{props.city}</h3>
      <h2>{temperature} °{props.unit}</h2>
    </div>
  )
}

export default WeatherWidget;