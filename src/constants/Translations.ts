// Define the type for the available languages
interface Translations {
  EN: Translation;
  ID: Translation;
}

// Define the structure of the translations
interface Translation {
  landingTitleHeading: string;
  landingSubLineHeading: string;
  welcome: string;
  greeting: string;
}

export const TextContent: Translations = {
  EN: {
    landingTitleHeading:
      "Achieve Greater Efficiency Your Business Corporate Flexibility",
    landingSubLineHeading:
      "Complete banking services for your business needs are now more easily accessible with the Portal, increasing operational efficiency and smoothness.",
    welcome: "Welcome",
    greeting: "Hello",
  },
  ID: {
    landingTitleHeading:
      "Raih Efisiensi Lebih Besar Fleksibilitas Perusahaan Bisnis Anda",
    landingSubLineHeading:
      "Pelayanan perbankan lengkap untuk kebutuhan bisnis Anda kini lebih mudah diakses dengan Portal, meningkatkan efisiensi dan fleksibilitas operasional.",
    welcome: "Selamat Datang",
    greeting: "Halo",
  },
};

// Define the valid language keys
export type LanguageKeys = keyof Translations;
