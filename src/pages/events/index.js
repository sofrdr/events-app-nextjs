import Image from "next/image";
import Link from "next/link";

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
  return (
    <div>
      <h1>Events Page</h1>
      {data.map((event) => {
        const { id, title, description, image } = event;
        return (
          <Link key={id} href={`/events/${id}`}>
            <Image src={image} alt={title} width={200} height={200} />
            <h2>{title}</h2>
            <p>{description}</p>
          </Link>
        );
      })}
    </div>
  );
};

export default EventsPage;
