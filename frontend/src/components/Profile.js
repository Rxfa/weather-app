const Profile = ({src}) => (
  <div>
    <h1>
      {src.city}
    </h1>
    <h2>
      {`temp ${src.temp}`}
    </h2>
    <h2>
      {`feelslike ${src.feelslike}`}
    </h2>
    <img src={src.icon} alt={src.description} />
    <p>
      {`desc ${src.description}`}
    </p>
  </div>
);

export default Profile;
