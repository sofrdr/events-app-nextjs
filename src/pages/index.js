import Head from "next/head";
import { Inter } from "@next/font/google";
import Home from "@/components/Home/Home";

const inter = Inter({ subsets: ["latin"] });

export async function getServerSideProps() {
  const data = await import("../../data/data.json");
  console.log(data.allEvents);
  const { events_categories } = await data;

  return {
    props: {
      data: events_categories,
    },
  };
}

export default function HomePage({ data }) {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Home data={data} />
    </>
  );
}
