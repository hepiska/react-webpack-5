import TaskListPage from './task_list/tasklist';
import DashboardLayout from '../components/layouts/dashboard/dashboard';

const routes = [
  {
    name: 'dashboard',
    path: '/dashboard',
    component: DashboardLayout,
    routes: [
      {
        name: 'tasklist',
        path: 'tasklist',
        component: TaskListPage
      }
    ]
  }
];

export default routes;
