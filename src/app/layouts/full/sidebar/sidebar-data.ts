import { NavItem } from './nav-item/nav-item';

export const navItems: NavItem[] = [
  {
    navCap: 'Dashboard',
  },
  {
    displayName: 'Dashboard',
    iconName: 'layout-dashboard',
    route: '/dashboard',
  },
  {
    navCap: 'Managment',
  },
  {
    displayName: 'Manage Users',
    iconName: 'users',
    route: '/user/manage-users',
  },
  {
    displayName: 'View training sessions',
    iconName: 'stretching',
    route: '/training/view-training',
  },
  {
    displayName: 'View Injuries',
    iconName: 'table-heart',
    route: '/injury/view-injuries-back',
  },

  {
    displayName: 'Manage Team',
    iconName: 'shirt-sport',
    route: '/team/view-team-back',
  },
  {
    displayName: 'Manage Scouting',
    iconName: 'list',
    route: '/scouting/view',
  },

  // {
  //   displayName: 'Players for Scouting',
  //   iconName: 'poker-chip',
  //   route: '/scouting/players-scouting',
  // },

  {
    displayName: 'Video Analysis',
    iconName: 'poker-chip',
    route: '/team/video-analysis',
  },

  /*{
    displayName: 'Events',
    iconName: 'rosette',
    route: '/scouting/addevent',
  },

  {
    displayName: 'Lists',
    iconName: 'list',
    route: '/ui-components/lists',
  },
  {
    displayName: 'Menu',
    iconName: 'layout-navbar-expand',
    route: '/ui-components/menu',
  },
  {
    displayName: 'Tooltips',
    iconName: 'tooltip',
    route: '/ui-components/tooltips',
  },
  {
    navCap: 'Auth',
  },
  {
    displayName: 'Login',
    iconName: 'lock',
    route: '/authentication/login',
  },
  
  {
    displayName: 'Register',
    iconName: 'user-plus',
    route: '/authentication/register',
  },
  {
    navCap: 'Extra',
  },
  {
    displayName: 'Icons',
    iconName: 'mood-smile',
    route: '/extra/icons',
  },
  {
    displayName: 'Sample Page',
    iconName: 'aperture',
    route: '/extra/sample-page',
  }, */
];
