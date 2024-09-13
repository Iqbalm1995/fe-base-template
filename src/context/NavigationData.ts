export interface NavItem {
  label: string;
  labelEN: string;
  labelID: string;
  subLabel?: string;
  subLabelEN?: string;
  subLabelID?: string;
  children?: Array<NavItem>;
  href?: string;
}

export const NAV_ITEMS: Array<NavItem> = [
  {
    label: "Produk",
    labelEN: "Product",
    labelID: "Produk",
    children: [
      {
        label: "Blank Page",
        labelEN: "Blank Page",
        labelID: "Halaman Kosong",
        subLabel: "Example blank page",
        subLabelEN: "Example blank page",
        subLabelID: "Contoh Halaman Kosong",
        href: "/blank-page",
      },
    ],
  },
  {
    label: "Tentang Kami",
    labelEN: "About Us",
    labelID: "Tentang Kami",
    href: "https://www.bankbjb.co.id/page/tentang-bank-bjb",
  },
  {
    label: "Hubungi Kami",
    labelEN: "Contact Us",
    labelID: "Hubungi Kami",
    href: "https://bjbwbs.bankbjb.co.id/",
  },
];
