import React from 'react';

import { RoutePath } from 'shared/config/routeConfig/routeConfig';

import AboutIcon from 'shared/assets/icons/about.svg';
import MainIcon from 'shared/assets/icons/main.svg';
import ProfileIcon from 'shared/assets/icons/profile.svg';

export interface SidebarItemType {
  path: string;
  text: string;
  Icon: React.VFC<React.SVGProps<SVGSVGElement>>;
}

export const sidebarItemsList: SidebarItemType[] = [
  {
    path: RoutePath.main,
    text: 'mainTab',
    Icon: MainIcon,
  },
  {
    path: RoutePath.about,
    text: 'aboutTab',
    Icon: AboutIcon,
  },
  {
    path: RoutePath.profile,
    text: 'profileTab',
    Icon: ProfileIcon,
  },
];
