import React, {Component} from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { TextField, Button } from '@material-ui/core';
import './SearchBar.css';
import { fetchWeather } from '../actions';


class SearchBar extends Component{
    constructor(props){
        super(props);
        this.state ={ term: ''}
        this.onInputChange = this.onInputChange.bind(this)
        this.onFormSubmit = this.onFormSubmit.bind(this)
    }
    onInputChange(e){
        this.setState({term:e.target.value})
    }

    onFormSubmit(e){
        e.preventDefault();
        this.props.fetchWeather(this.state.term);
        this.setState({term:''})
    }

    render(){
        return(
            <div className="search-bar">
            <form onSubmit={this.onFormSubmit}>
               <TextField 
               className="search-input" 
               placeholder="e.g. Sydney"
               value={this.state.term}
               onChange={this.onInputChange}
               />
               <Button type="submit" variant="contained" color="primary">Search</Button>
            </form>
            </div>
        )
    }
}
function mapDispatchToProps(dispatch){
    return bindActionCreators({fetchWeather},dispatch);
}
export default connect(null, mapDispatchToProps)(SearchBar);