import { createRouter, createWebHistory } from 'vue-router';
import Home from '@/components/Home.vue';
import Auth from '@/components/Auth.vue';
import Register from '@/components/Register.vue';
import CustomerList from '@/components/CustomerList.vue';
import CustomerCreate from '@/components/CustomerCreate.vue';
import MyCustomerList from '@/components/MyCustomerList.vue';
import InvestmentList from '@/components/InvestmentList.vue';
import InvestmentCreate from '@/components/InvestmentCreate.vue';
import StockList from '@/components/StockList.vue'; // Import StockList component
import StockCreate from '@/components/StockCreate.vue'; // Import StockCreate component

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/customer-list',
    name: 'CustomerList',
    component: CustomerList
  },
  {
    path: '/customer-list/:msg',
    name: 'CustomerUpdatedList',
    component: CustomerList
  },
  {
    path: '/mycustomer-list',
    name: 'MyCustomerList',
    component: MyCustomerList
  },
  {
    path: '/mycustomer-list/:msg',
    name: 'MyCustomerUpdatedList',
    component: MyCustomerList
  }, 
  {
    path: '/customer-create',
    name: 'CustomerCreate',
    component: CustomerCreate
  },
  {
    path: '/customer-create/:pk',
    name: 'CustomerUpdate',
    component: CustomerCreate
  },
  {
    path: '/investment-list',
    name: 'InvestmentList',
    component: InvestmentList
  },
  {
    path: '/investment-list/:msg',
    name: 'InvestmentUpdatedList',
    component: InvestmentList
  },
  {
    path: '/investment-create',
    name: 'InvestmentCreate',
    component: InvestmentCreate
  },
  {
    path: '/investment-create/:pk',
    name: 'InvestmentUpdate',
    component: InvestmentCreate
  },
  {
    path: '/stock-list',
    name: 'StockList',
    component: StockList // Route for StockList
  },
  {
    path: '/stock-list/:msg',
    name: 'StockUpdatedList',
    component: StockList // Route for StockList with message
  },
  {
    path: '/stock-create',
    name: 'StockCreate',
    component: StockCreate // Route for creating a new stock
  },
  {
    path: '/stock-create/:pk',
    name: 'StockUpdate',
    component: StockCreate // Route for updating an existing stock
  },
  {
    path: '/auth',
    name: 'Auth',
    component: Auth
  },
  {
    path: '/register',
    name: 'Register',
    component: Register
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;