import React, { PropTypes } from 'react';
import { connect } from 'react-redux';

//import your action creators
import {  } from '../actions';

//import your components
import { TypeList } from '../components';

//App Entry
class App extends React.Component {
  render () {
  	const { dispatch } = this.props;

    return (
    	<div>
    		<TypeList
    			showTypeIndex={1}
    			types={['Hee', 'Hee']}
    			showTypeList={false}
    		/>
	    	
    	</div>
    );
  }
}

App.propTypes = {
};

function select (state) {
	return {
	};
}

export default connect(select)(App);