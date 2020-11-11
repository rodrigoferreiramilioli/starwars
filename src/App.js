import React, { Component } from "react";
import "./style.css";
import "./components/Personagem/Personagem.scss";
import Personagem from "./components/Personagem/Personagem";

class App extends Component {
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
      personagens: [],
      next: data.next,
      previous: data.previous
    });
  }
  async componentDidMount() {
    const response = await Personagem.get("");
    this.setState({
      personagens: response.data.results,
      next: response.data.next,
      previous: response.data.previous
    });
  }
  render() {
    const { personagens } = this.state;
    return (
      <div>
        <h1>Listar Personagens</h1>
        <table border="1">
          <tr>
            <th>Nome</th>
            <th>Olhos</th>
          </tr>
          {personagens.map((personagem, i) => (
            <tr>
              <td key={i} infos={personagem.name} type={"personagem"}>
                <label class="Personagem">{personagem.name}</label>
              </td>
              <td key={i} infos={personagem.eye_color} type={"personagem"}>
                <label class="Personagem">{personagem.eye_color}</label>
              </td>
            </tr>
          ))}
        </table>
      </div>
    );
  }
}

export default App;
