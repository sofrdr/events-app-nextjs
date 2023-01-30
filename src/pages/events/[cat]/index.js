import Link from "next/link";

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
    <div>
      <h1>Events in {pageName}</h1>
      {data.map((event) => {
        const { id, title, city, description, image, emails_registred } = event;
        return (
          <Link key={id} href={`/events/${city}/${id}`} passHref>
            <h2>{title}</h2>
            <img src={image} alt={title} width={300} height={300} />
            <p>{description}</p>
          </Link>
        );
      })}
    </div>
  );
};

export default EventsCatPage;
