import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import AppFrame from './../components/AppFrame';
import CustomersList from './../components/CustomersList';
import CustomersActions from './../components/CustomersActions';
import { fetchCustomers } from '../actions/fetchCustomers';

const customers = [
  {
    "dni": "52003344A",
    "name": "Sergio",
    "age": 36
  },
  {
    "dni": "33220023G",
    "name": "Paco",
    "age": 55
  },
  {
    "dni": "76440092W",
    "name": "Pepe",
    "age": 44
  }
];

class CustomersContainer extends Component {

  componentDidMount() {
    this.props.fetchCustomers();
  }

  handleAddNew = () => {
    this.props.history.push('/customers/new')
  }

  renderBody = (customers) => (
    <div>
      <CustomersList customers={customers}
        urlPath={'customer/'}>
      </CustomersList>
      <CustomersActions>
        <button onClick={this.handleAddNew}>Nuevo Cliente</button>
      </CustomersActions>
    </div>
  )

  render() {
    return (
      <div>
        <AppFrame header={'Listado de clientes'}
          body={this.renderBody(customers)}></AppFrame>
      </div>
    )
  }
}

CustomersContainer.protoTypes = {
  fetchCustomers: PropTypes.func.isRequired,
};

// const mapDispatchToProps = dispatch => (
//   {
//     fetchCustomers: () => dispatch(fetchCustomers())
//   }
// )

// const mapDispatchToProps = { fetchCustomers } // Es una forma simplificada de la funcion que esta comentada 

export default withRouter(connect(null, { fetchCustomers })(CustomersContainer));