import { Icon } from '@iconify/react';
import pieChart2Fill from '@iconify/icons-eva/pie-chart-2-fill';
import peopleFill from '@iconify/icons-eva/people-fill';
import bookOpenFill from '@iconify/icons-eva/book-open-fill';

const getIcon = (name) => <Icon icon={name} width={22} height={22} />;

const sidebarConfig = [
  {
    title: 'dashboard',
    path: '/dashboard/app',
    icon: getIcon(pieChart2Fill),
  },
  {
    title: 'Cursos',
    path: '/dashboard/courses',
    icon: getIcon(bookOpenFill),
  },
  {
    title: 'Usuarios',
    path: '/dashboard/user',
    icon: getIcon(peopleFill),
  },
];

export default sidebarConfig;
