import React from 'react';
import { SelectMenu, Button, Table, Spinner, Heading } from 'evergreen-ui';
import axios from 'axios';
import currencies  from './assets/currencies.json';
class App extends React.Component{

  constructor(props){
    super(props)
    this.state = {
      data:{},
      loading:false,
      selected:'USD', // Initial currency
    }
  }

  componentDidMount(){
    this.fetchRates()
  }

  fetchRates = () => {
    this.setState({loading:true})
    const {selected} =  this.state
    axios.get(`https://api.exchangeratesapi.io/latest?base=${selected}`)
    .then((response) => {
      this.setState({data:response.data})
    })
    .catch((error) => {
      console.log(error);
    })
    .finally(() => {
      this.setState({loading:false})
    });
  }

  /**
   * This function will handle selecting currencies from the dropdown menu
   * @param {*} currency 
   */
  handleCurrencySelect(currency){
    this.setState({ 
      selected: currency 
    },() => {
      this.fetchRates();
    })
  }


  /**
   * This function will be responsible of checking any object if it empty or not
   * @param {*} obj 
   */
  isEmpty(obj) {
    for(var key in obj) {
        if(obj.hasOwnProperty(key))
            return false;
    }
    return true;
  }


  render(){
    const {data, loading} = this.state
    return (
            <div className="container">

              {loading && <div className="spinner">
                <Spinner />
              </div>}

              {!loading && <div>
                <SelectMenu
                  title="Select Currency"
                  options={currencies.all.map(label => ({ label, value: label }))}
                  selected={this.state.selected}
                  closeOnSelect={true}
                  onSelect={item => this.handleCurrencySelect(item.value)}>
                  <Button>{this.state.selected || 'Select name...'}</Button>
                </SelectMenu>
                <Heading is="h3" className="heading">Available Results</Heading>
                <Table>
                  <Table.Head>
                    <Table.TextHeaderCell>
                      Currency 
                    </Table.TextHeaderCell>
                    <Table.TextHeaderCell>
                      Rate
                    </Table.TextHeaderCell>
                  </Table.Head>
                  <Table.Body height={440}>
                    {!this.isEmpty(data) && Object.keys(data.rates).map((keyName, i) => (
                        <Table.Row key={i} isSelectable onSelect={() => alert(keyName)}>
                          <Table.TextCell>{keyName}</Table.TextCell>
                          <Table.TextCell isNumber>{data.rates[keyName]}</Table.TextCell>
                        </Table.Row>))}
                  </Table.Body>
                </Table>
              </div>}
             
            </div>
    );
  }

}

export default App;
