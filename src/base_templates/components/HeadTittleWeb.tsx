import Head from "next/head";

const HeadTittleWeb = ({ tittlePage }: { tittlePage: string }) => {
  return (
    <Head>
      <title>
        Portal Bank bjb{tittlePage.length > 0 ? " - " + tittlePage : ""}
      </title>
      <meta name="description" content="Learn more about Bank bjb." />
      <link rel="icon" href="/img/favicon-bjb.png" />
    </Head>
  );
};

export default HeadTittleWeb;
