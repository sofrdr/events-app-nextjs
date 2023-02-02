import Image from "next/image";
import SingleEvent from "@/components/Events/SingleEvent";

export async function getStaticPaths() {
  const data = await import("../../../../data/data.json");
  const { allEvents } = await data;
  const allPaths = allEvents.map((event) => {
    return {
      params: {
        cat: event.city.toString(),
        id: event.id.toString(),
      },
    };
  });

  return {
    paths: allPaths,
    fallback: false,
  };
}

export async function getStaticProps(context) {
  console.log(context);
  const id = context.params.id;
  console.log(id);
  const data = await import("../../../../data/data.json");
  const { allEvents } = await data;
  const singleEvent = allEvents.find((event) => event.id === id);
  console.log(singleEvent);
  return {
    props: {
      data: singleEvent,
    },
  };
}

const SingleEventPage = ({ data }) => {
  return <SingleEvent data={data} />;
};

export default SingleEventPage;
