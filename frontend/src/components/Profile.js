const Profile = ({src}) => (
  <div>
    <h1>{src.name}</h1>
    <div className="weatherBox">
      <div className="Card">
        <h1>Yesterday</h1>
        <h3>{Math.round(src.yesterday.min_temp)}{src.unit}</h3>
        <h3>{Math.round(src.yesterday.max_temp)}{src.unit}</h3>
      </div>
      <div className="Card">
        <h1>Today</h1>
        <h2>{`temp ${src.today.temp}`}{src.unit}</h2>
        <p>{src.today.date.slice(-5)}</p>
        <h3>{Math.round(src.today.min_temp)}{src.unit}</h3>
        <h3>{Math.round(src.today.max_temp)}{src.unit}</h3>
        <h4>{`${src.today.wind_speed} kmh`}</h4>
      </div>
      <div className="Card">
        <h1>Tomorrow</h1>
        <h3>{Math.round(src.tomorrow.min_temp)}{src.unit}</h3>
        <h3>{Math.round(src.tomorrow.max_temp)}{src.unit}</h3>
      </div>
    </div>
  </div>
);

export default Profile;
