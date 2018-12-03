class DivTable extends Component {
  // Setting our component's initial state
  state = {
  };




  render() {
    return (

      <tr className="event-card">
        <td>
          <div className="card-div">
            <div className="columns">
            <div className="column is-1 date">
              <p>Aug 15</p>
            </div>
            <div className="column is-1 time">
              <p>7pm</p>
            </div>
              <div className="column is-4 bands">
                <p>Betty Rage, Scattered Fall, Thought Riot</p>
              </div>
              <div className="column is-5 location">
                <p>Seifert Center</p>
                <p>128 W Benjamin Holt Dr, Stockton, CA</p>
              </div>
              <div className="column is-1 genre">
                <Tag>Punk</Tag>
              </div>
            </div>
          </div>
        </td>
      </tr>

      <tr className="event-card">
        <td>
          <p>Aug 15</p>
        </td>
        <td>
          <p>7pm</p>
        </td>
        <td>
          <p>Betty Rage, Scattered Fall, Thought Riot</p>
        </td>
        <td>
          <p>Seifert Center</p>
        </td>
        <td>
          <Tag>Punk</Tag>
        </td>
      </tr>

      <thead>
        <tr>
          <th>Date</th>
          <th>Time</th>
          <th>Bands</th>
          <th>Location</th>
          <th>Genres</th>

        </tr>
      </thead>

    );
  }
}
