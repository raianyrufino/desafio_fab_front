const routes = [
  {
    title: 'Flight',
    component: 'Flight/List',
    path: '/',
    auth: false,
    exact: true,
  },
  {
    title: 'Location',
    component: 'Location/List',
    path: '/locations',
    auth: false,
    exact: true,
  },
  {
    title: 'RegisterFlight',
    component: 'Flight/Register',
    path: '/form-flight/:id?',
    auth: false,
    exact: true,
  },
  {
    title: 'RegisterLocation',
    component: 'Location/Register',
    path: '/form-location',
    auth: false,
    exact: true,
  },
];

export default routes;
