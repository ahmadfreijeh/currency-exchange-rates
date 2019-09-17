import React from 'react';
import { SelectMenu, Button, Table, Spinner, Heading } from 'evergreen-ui';
import DatePicker from "react-datepicker";
import axios from 'axios';
import currencies  from './assets/currencies.json';
import "react-datepicker/dist/react-datepicker.css";

class App extends React.Component{

  constructor(props){
    super(props)
    this.state = {
      data:{},
      loading:false,
      selected:'USD', // Initial currency
      dateFilter:null,
      yesterday:null
    }
  }

  componentDidMount(){
    var dt = new Date();
    dt.setDate( dt.getDate() - 1 );
    this.setState({
      yesterday:dt
    })
    
    this.fetchRates()
  }

  fetchRates = () => {
    this.setState({loading:true})

    const {selected, dateFilter} =  this.state

    let url = `https://api.exchangeratesapi.io/latest?base=${selected}`
    if(dateFilter != null){
      let reformatedDate = dateFilter.getFullYear() + '-' + ("0" + (dateFilter.getMonth() + 1)).slice(-2) + '-' + dateFilter.getDate()
      url = `https://api.exchangeratesapi.io/${reformatedDate}?base=${selected}`
    }

    axios.get(url)
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
  handleCurrencySelect = (currency) => {
    this.setState({ 
      selected: currency,
    },() => {
      this.fetchRates();
    })
  }

  /**
   * This function will filter the current currency rates based on teh selected date
   * @param {*} date 
   */
  handleDateFilter = (date) => {
    this.setState({ 
      dateFilter: date 
    },() => {
      this.fetchRates();
    })
  }

  /**
   * This function will clear date filter and reset teh data table to teh latest rates without date
   */
  clearFilter = () => {
    this.setState({ 
      dateFilter: null 
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
    const {data, loading, dateFilter, yesterday} = this.state
    return (
            <div className="container">

              {loading && <div className="spinner">
                <Spinner />
              </div>}

              {!loading && <div>
                
                <div>
                  <SelectMenu
                    title="Select Currency"
                    options={currencies.all.map(label => ({ label, value: label }))}
                    selected={this.state.selected}
                    closeOnSelect={true}
                    onSelect={item => this.handleCurrencySelect(item.value)}>
                    <Button>{this.state.selected || 'Select name...'}</Button>
                  </SelectMenu>
                  {dateFilter != null && <Button marginLeft={4} appearance="primary" intent="warning" iconBefore="filter-remove" onClick={() => this.clearFilter()}>Reset Filter</Button>}
                </div>

                <div>
                  <DatePicker
                    selected={dateFilter}
                    onChange={this.handleDateFilter}
                    maxDate={yesterday}
                    placeholderText="Date Filter"
                  />
                </div>

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
