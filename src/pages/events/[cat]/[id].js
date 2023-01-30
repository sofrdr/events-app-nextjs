import Image from "next/image";

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
  const { id, title, city, image, description, emails_registred } = data;
  return (
    <div key={id}>
      <h1>{title}</h1>
      <Image src={image} alt={title} width={1000} height={500} />
      <p>{description}</p>
    </div>
  );
};

export default SingleEventPage;
