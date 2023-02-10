import EventsCategory from "@/components/Events/EventsCategory";

export async function getStaticPaths() {
  const data = await import("../../../../data/data.json");
  const { events_categories } = await data;
  const allPaths = events_categories.map((event) => {
    return {
      params: {
        cat: event.id.toString(),
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
  const id = context.params.cat;
  console.log(id);
  const data = await import("../../../../data/data.json");
  const { allEvents } = await data;
  const events = allEvents.filter((event) => event.city === id);
  console.log(events);
  return {
    props: {
      data: events,
      pageName: id,
    },
  };
}

const EventsCatPage = ({ data, pageName }) => {
  return (
    <>
      <EventsCategory data={data} pageName={pageName} />
    </>
  );
};

export default EventsCatPage;
