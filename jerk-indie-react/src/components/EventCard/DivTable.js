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

    );
  }
}
