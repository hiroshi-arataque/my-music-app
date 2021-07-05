import './Style.css';
import Table from '../sharedComponents/table/Table';

function MyList() {
  const records: Array<Object> = [{
    song: 'xmbrexa x',
    artist: 'RIHANNA',
    songReleaseDate: '01/03/2013',
    playCount: 8165,
    metricA: 81,
    metricB: 67,
    metricC: 66,
    metricD: 55,
    metricE: 92,
    metricF: 44,
    metricG: 58,
    metricH: 53,
    metricI: 65,
    metricJ: 77,
    metricK: 36,
    metricL: 59,
    metricM: 20,
    metricN: 42,
    metricO: 1,
    metricP: 58
  },
  {
    song: "What's I b? x",
    artist: "RIHANNA",
    songReleaseDate: "01/10/900",
    playCount: 3135,
    metricA: 38,
    metricB: 30,
    metricC: 50,
    metricD: 18,
    metricE: 50,
    metricF: 93,
    metricG: 69,
    metricH: 42,
    metricI: 18,
    metricJ: 94,
    metricK: 17,
    metricL: 23,
    metricM: 37,
    metricN: 17,
    metricO: 41,
    metricP: 87
  },];
  return (
    <div className="MyList">
      <h1>My Play List</h1>
      <Table
        rows={records}
        headerColumns={['song','artist','songReleaseDate','playCount','metricA','metricB','metricC','metricD','metricE','metricF','metricG','metricH','metricI','metricJ','metricK','metricL','metricM','metricN','metricO','metricP']} />
    </div>
  );
}

export default MyList;
