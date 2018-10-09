import pink from '@material-ui/core/colors/pink';
import blue from '@material-ui/core/colors/blue';
import orange from '@material-ui/core/colors/orange';
import purple from '@material-ui/core/colors/purple';
import red from '@material-ui/core/colors/red';
import green from '@material-ui/core/colors/green';
import indigo from '@material-ui/core/colors/indigo';
import blueGrey from '@material-ui/core/colors/blueGrey';
import teal from '@material-ui/core/colors/teal'
import amber from '@material-ui/core/colors/amber'

const colors = [pink, blue, amber, orange, purple, teal, red, green, indigo, blueGrey];

export default function getColor(string) {
  try {
    const index = string
      .toString()
      .split('')
      .map(char => char.charCodeAt())
      .reduce((sum, num) => sum + num, 0);

    const colorIndex = index % colors.length;

    return colors[colorIndex][500];
  } catch (e) {
    console.error(e);
    return blueGrey[500];
  }

}
