export interface NavItem {
  label: string;
  subLabel?: string;
  children?: Array<NavItem>;
  href?: string;
}

export const NAV_ITEMS: Array<NavItem> = [
  // {
  //   label: "Beranda",
  //   href: "/",
  // },
  {
    label: "Produk",
    children: [
      {
        label: "Blank Page",
        subLabel: "Example blank page",
        href: "/blank-page",
      },
      {
        label: "Sub menu 1",
        subLabel: "Desc sub menu 1",
        href: "/blank-page",
      },
      {
        label: "Sub menu 2",
        subLabel: "Desc sub menu 2",
        href: "/blank-page",
      },
    ],
  },
  {
    label: "Tentang Kami",
    href: "/blank-page",
  },
  {
    label: "Hubungi Kami",
    href: "/blank-page",
  },
  // {
  //   label: "Blank Page",
  //   href: "/landing/blank-page",
  // },
];
