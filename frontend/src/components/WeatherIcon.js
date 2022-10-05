import 'font-awesome/css/font-awesome.min.css';

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faSnowflake} from '@fortawesome/fontawesome-free-solid';
import {
  faSun,
  faCloudSun,
  faSmog,
  faCloudRain,
  faCloudShowersHeavy,
  faCloudBolt,
} from '@fortawesome/free-solid-svg-icons';

// every other way to make the app display the correct icon
// given the weather code has failed.
// This piece of code will be changed once I figure how to write it
// in line with good practices.
// @rxfa

const iconSwitch = (code) => {
  console.log(`code - ${code}`);
  switch (code) {
    case 0:
      return <FontAwesomeIcon icon={faSun} size='4x' mt={3} />;
    case 1:
      return <FontAwesomeIcon icon={faCloudSun} size='4x' mt={3} />;
    case 2:
      return <FontAwesomeIcon icon={faCloudSun} size='4x' mt={3} />;
    case 3:
      return <FontAwesomeIcon icon={faCloudSun} size='4x' mt={3} />;
    case 45:
      return <FontAwesomeIcon icon={faSmog} size='4x' mt={3} />;
    case 48:
      return <FontAwesomeIcon icon={faSmog} size='4x' mt={3} />;
    case 51:
      return <FontAwesomeIcon icon={faCloudRain} size='4x' mt={3} />;
    case 53:
      return <FontAwesomeIcon icon={faCloudRain} size='4x' mt={3} />;
    case 55:
      return <FontAwesomeIcon icon={faCloudRain} size='4x' mt={3} />;
    case 56:
      return <FontAwesomeIcon icon={faCloudRain} size='4x' mt={3} />;
    case 57:
      return <FontAwesomeIcon icon={faCloudRain} size='4x' mt={3} />;
    case 61:
      return <FontAwesomeIcon icon={faCloudShowersHeavy} size='4x' mt={3} />;
    case 63:
      return <FontAwesomeIcon icon={faCloudShowersHeavy} size='4x' mt={3} />;
    case 65:
      return <FontAwesomeIcon icon={faCloudShowersHeavy} size='4x' mt={3} />;
    case 66:
      return <FontAwesomeIcon icon={faCloudShowersHeavy} size='4x' mt={3} />;
    case 67:
      return <FontAwesomeIcon icon={faCloudShowersHeavy} size='4x' mt={3} />;
    case 80:
      return <FontAwesomeIcon icon={faCloudShowersHeavy} size='4x' mt={3} />;
    case 81:
      return <FontAwesomeIcon icon={faCloudShowersHeavy} size='4x' mt={3} />;
    case 82:
      return <FontAwesomeIcon icon={faCloudShowersHeavy} size='4x' mt={3} />;
    case 71:
      return <FontAwesomeIcon icon={faSnowflake} size='4x' mt={3} />;
    case 73:
      return <FontAwesomeIcon icon={faSnowflake} size='4x' mt={3} />;
    case 75:
      return <FontAwesomeIcon icon={faSnowflake} size='4x' mt={3} />;
    case 77:
      return <FontAwesomeIcon icon={faSnowflake} size='4x' mt={3} />;
    case 85:
      return <FontAwesomeIcon icon={faSnowflake} size='4x' mt={3} />;
    case 86:
      return <FontAwesomeIcon icon={faSnowflake} size='4x' mt={3} />;
    case 95:
      return <FontAwesomeIcon icon={faCloudBolt} size='4x' mt={3} />;
    case 96:
      return <FontAwesomeIcon icon={faCloudBolt} size='4x' mt={3} />;
    case 99:
      return <FontAwesomeIcon icon={faCloudBolt} size='4x' mt={3} />;
    default:
      return <FontAwesomeIcon icon={faSun} size='4x' mt={3} />;
  }
};

export default iconSwitch;
