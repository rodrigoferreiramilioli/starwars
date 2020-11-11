import axios from "axios";
class Personagem extends Component {
  constructor(props) {
    super(props);

    this.state = {
      personagens: [],
      next: "",
      previous: ""
    };

    this.updateData = this.updateData.bind(this);
  }

  updateData(data) {
    this.setState({
      personagens: data.results,
      next: data.next,
      previous: data.previous
    });
  }

  getPersonagem() {
    return axios
      .get("https://swapi.co/api/people/")
      .then(response => {
        this.setState({
          personagens: response.data.results,
          next: response.data.next,
          previous: response.data.previous
        });
      })
      .catch(error => {
        console.log(error);
      });
  }

  componentDidMount() {
    this.getPersonagem();
  }

  render() {
    const { personagens, next, previous } = this.state;

    return (
      <div className="People">
        <div className="People-grid">
          {people.map((personagens, i) => (
            <Card key={i} infos={personagens} type={"personagens"} />
          ))}
        </div>
        <NextAndPrevious
          updateData={this.updateData}
          next={next}
          previous={previous}
        />
      </div>
    );
  }
}

export default Personagem;
