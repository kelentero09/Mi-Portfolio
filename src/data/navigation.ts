import type { NavItem } from '../types';

/** Anchors shown in the header, in document order. */
export const navigation: NavItem[] = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'experience', label: 'Experience' },
  { id: 'contact', label: 'Contact' },
];

/** Sections observed by the header scroll-spy. */
export const navigationIds = navigation.map((item) => item.id);

export const footerNav: NavItem[] = navigation.filter((item) => item.id !== 'home');