import React from 'react';
import './App.css';
import SearchCity from './Weather/SearchCity';
import toastr from 'toastr'
import 'toastr/build/toastr.min.css'
import Forecast from './Weather/Forecast';

class App extends React.Component {

  state = {
    city: undefined,
    forecast: undefined
  }

  getCityWeather = async (e) => {
    e.preventDefault()
    const city = e.target.elements.city.value
    try {
      const response = await fetch(`http://localhost:2000/weather/find?city=${city}`);
      if (response.status !== 200) {
        this.handleExceptions(response)
        return;
      }
      const data = await response.json();
      this.setState({ city, forecast: data })
    } catch (e) {
      toastr.error('Ocorreu um problema com o servidor, por favor tente novamente mais tarde')
    }

  }

  handleExceptions(response) {
    const message = response.status === 400 ? 'Por favor informe o nome da cidade' : 'Cidade não encontrada'
    toastr.error(message)
    this.setState({city: null, forecast: null})
  }

  render() {

    return (
      <div className="wrapper">
        <div className="main">
          <div className="container">
            <h1 className="text-center mb-5">Previsão do tempo</h1>
            <div className="row">
              <div className="col-7 ">
                <Forecast forecast={this.state.forecast} city={this.state.city} />
              </div>
              <div className="col-5">
                <SearchCity getCity={this.getCityWeather} />
              </div>
            </div>
          </div>
        </div>

      </div>
    );
  }

}




export default App;
