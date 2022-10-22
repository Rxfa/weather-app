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

const iconSwitch = (code) => {
  switch (code) {
    case 1:
    case 2:
    case 3:
      return <FontAwesomeIcon icon={faCloudSun} size='4x' mt={3} />;
    case 45:
    case 48:
      return <FontAwesomeIcon icon={faSmog} size='4x' mt={3} />;
    case 51:
    case 53:
    case 55:
    case 56:
    case 57:
      return <FontAwesomeIcon icon={faCloudRain} size='4x' mt={3} />;
    case 61:
    case 63:
    case 65:
    case 66:
    case 67:
    case 80:
    case 81:
    case 82:
      return <FontAwesomeIcon icon={faCloudShowersHeavy} size='4x' mt={3} />;
    case 71:
    case 73:
    case 75:
    case 77:
    case 85:
    case 86:
      return <FontAwesomeIcon icon={faSnowflake} size='4x' mt={3} />;
    case 95:
    case 96:
    case 99:
      return <FontAwesomeIcon icon={faCloudBolt} size='4x' mt={3} />;
    case 0:
    default:
      return <FontAwesomeIcon icon={faSun} size='4x' mt={3} />;
  }
};

export default iconSwitch;
