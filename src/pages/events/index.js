import AllEvents from "@/components/Events/AllEvents";

export async function getStaticProps() {
  const data = await import("../../../data/data.json");
  const { events_categories } = await data;

  return {
    props: {
      data: events_categories,
    },
  };
}

const EventsPage = ({ data }) => {
  return <AllEvents data={data} />;
};

export default EventsPage;
