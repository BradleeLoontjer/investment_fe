import axios from 'axios';

// Change the API_URL to the correct location of the backend API before deploying the app
const API_URL = 'bloontjer.pythonanywhere.com'; // Adjust for your deployment environment

export class APIService {
  constructor() {
  }

  getUser() {
    const url = `${API_URL}/api/getUser/`; // Ensure this matches your Django URL mapping
    let jwtToken = localStorage.getItem('access');
    const headers = { Authorization: `JWT ${jwtToken}` };
    return axios.get(url, { headers: headers });
  }

  getCustomer(param_pk) {
    const url = `${API_URL}/api/customers/${param_pk}`;
    let jwtToken = localStorage.getItem('access');
    const headers = { Authorization: `JWT ${jwtToken}` };
    return axios.get(url, { headers: headers });
  }

  getCustomerList() {
    const url = `${API_URL}/api/customers/`;
    let jwtToken = localStorage.getItem('access');
    const headers = { Authorization: `JWT ${jwtToken}` };
    return axios.get(url, { headers: headers });
  }

  getMyCustomerList() {
    const url = `${API_URL}/api/mycustomers/`;
    let jwtToken = localStorage.getItem('access');
    const headers = { Authorization: `JWT ${jwtToken}` };
    return axios.get(url, { headers: headers });
  }
  
  addNewCustomer(customer) {
    const url = `${API_URL}/api/customers/`;
    let jwtToken = localStorage.getItem('access');
    const headers = { Authorization: `JWT ${jwtToken}` };
    return axios.post(url, customer, { headers: headers });
  }

  updateCustomer(customer) {
    const url = `${API_URL}/api/customers/${customer.pk}`;
    let jwtToken = localStorage.getItem('access');
    const headers = { Authorization: `JWT ${jwtToken}` };
    return axios.put(url, customer, { headers: headers });
  }

  deleteCustomer(customer_Pk) {
    const url = `${API_URL}/api/customers/${customer_Pk}`;
    let jwtToken = localStorage.getItem('access');
    const headers = { Authorization: `JWT ${jwtToken}` };
    return axios.delete(url, { headers: headers });
  }

  authenticateLogin(credentials) {
    const url = `${API_URL}/api/token/`;
    return axios.post(url, credentials);
  }
  getInvestment(param_pk) {
    const url = `${API_URL}/api/investments/${param_pk}`;
    let jwtToken = localStorage.getItem('access');
    const headers = { Authorization: `JWT ${jwtToken}` };
    return axios.get(url, { headers: headers });
  }
  
  getInvestmentList() {
    const url = `${API_URL}/api/investments`;
    let jwtToken = localStorage.getItem('access');
    const headers = { Authorization: `JWT ${jwtToken}` };
    return axios.get(url, { headers: headers });
  }
  
  addNewInvestment(investment) {
    const url = `${API_URL}/api/investments/`;
    let jwtToken = localStorage.getItem('access');
    const headers = { Authorization: `JWT ${jwtToken}` };
    return axios.post(url, investment, { headers: headers });
  }
  
  updateInvestment(investment) {
    const url = `${API_URL}/api/investments/${investment.pk}`;
    let jwtToken = localStorage.getItem('access');
    const headers = { Authorization: `JWT ${jwtToken}` };
    return axios.put(url, investment, { headers: headers });
  }
  
  deleteInvestment(investment_Pk) {
    const url = `${API_URL}/api/investments/${investment_Pk}`;
    let jwtToken = localStorage.getItem('access');
    const headers = { Authorization: `JWT ${jwtToken}` };
    return axios.delete(url, { headers: headers });
  }
    // Stock Methods
  getStock(pk) {
    const url = `${API_URL}/api/stocks/${pk}`;
    let jwtToken = localStorage.getItem('access');
    const headers = { Authorization: `JWT ${jwtToken}` };
    return axios.get(url, { headers });
  }

  getStockList() {
    const url = `${API_URL}/api/stocks`;
    let jwtToken = localStorage.getItem('access');
    const headers = { Authorization: `JWT ${jwtToken}` };
    return axios.get(url, { headers });
  }

  addNewStock(stock) {
    const url = `${API_URL}/api/stocks/`;
    let jwtToken = localStorage.getItem('access');
    const headers = { Authorization: `JWT ${jwtToken}` };
    return axios.post(url, stock, { headers });
  }

  updateStock(stock) {
    const url = `${API_URL}/api/stocks/${stock.pk}`;
    let jwtToken = localStorage.getItem('access');
    const headers = { Authorization: `JWT ${jwtToken}` };
    return axios.put(url, stock, { headers });
  }

  deleteStock(pk) {
    const url = `${API_URL}/api/stocks/${pk}`;
    let jwtToken = localStorage.getItem('access');
    const headers = { Authorization: `JWT ${jwtToken}` };
    return axios.delete(url, { headers });
  }  // Stock Methods
  getStock(pk) {
    const url = `${API_URL}/api/stocks/${pk}`;
    let jwtToken = localStorage.getItem('access');
    const headers = { Authorization: `JWT ${jwtToken}` };
    return axios.get(url, { headers });
  }

  getStockList() {
    const url = `${API_URL}/api/stocks`;
    let jwtToken = localStorage.getItem('access');
    const headers = { Authorization: `JWT ${jwtToken}` };
    return axios.get(url, { headers });
  }

  addNewStock(stock) {
    const url = `${API_URL}/api/stocks/`;
    let jwtToken = localStorage.getItem('access');
    const headers = { Authorization: `JWT ${jwtToken}` };
    return axios.post(url, stock, { headers });
  }

  updateStock(stock) {
    const url = `${API_URL}/api/stocks/${stock.pk}`;
    let jwtToken = localStorage.getItem('access');
    const headers = { Authorization: `JWT ${jwtToken}` };
    return axios.put(url, stock, { headers });
  }

  deleteStock(pk) {
    const url = `${API_URL}/api/stocks/${pk}`;
    let jwtToken = localStorage.getItem('access');
    const headers = { Authorization: `JWT ${jwtToken}` };
    return axios.delete(url, { headers });
  }
  // Stock Methods
  getStock(pk) {
    const url = `${API_URL}/api/stocks/${pk}`;
    let jwtToken = localStorage.getItem('access');
    const headers = { Authorization: `JWT ${jwtToken}` };
    return axios.get(url, { headers });
  }

  getStockList() {
    const url = `${API_URL}/api/stocks`;
    let jwtToken = localStorage.getItem('access');
    const headers = { Authorization: `JWT ${jwtToken}` };
    return axios.get(url, { headers });
  }

  addNewStock(stock) {
    const url = `${API_URL}/api/stocks/`;
    let jwtToken = localStorage.getItem('access');
    const headers = { Authorization: `JWT ${jwtToken}` };
    return axios.post(url, stock, { headers });
  }

  updateStock(stock) {
    const url = `${API_URL}/api/stocks/${stock.pk}`;
    let jwtToken = localStorage.getItem('access');
    const headers = { Authorization: `JWT ${jwtToken}` };
    return axios.put(url, stock, { headers });
  }

  deleteStock(pk) {
    const url = `${API_URL}/api/stocks/${pk}`;
    let jwtToken = localStorage.getItem('access');
    const headers = { Authorization: `JWT ${jwtToken}` };
    return axios.delete(url, { headers });
  }

  registerUser(credentials) {
    const url = `${API_URL}/register/`;
    credentials.customusername = credentials.username;
    return axios.post(url, credentials);
  }
}