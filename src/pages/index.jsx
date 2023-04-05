import { Main, Navbar, Presentation } from "@/components";
import { fetchEntries } from "@/utils/contentfulFetch";
import Head from "next/head";

export default function Home(props) {
  return (
    <>
      <Head>
        <title>Skullflowers</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.gif" />
      </Head>
      <Main images={props.newData.images}>
        <Navbar />
        <Presentation />
      </Main>
    </>
  );
}

export async function getStaticProps() {
  const data = await fetchEntries();
  const newData = data.items[2].fields;

  return {
    props: {
      newData,
    },
  };
}
