import Image from "next/image";
import Link from "next/link";

const Home = ({ data }) => {
  return (
    <main>
      {data.map((event) => {
        const { id, title, description, image } = event;
        return (
          <Link key={id} href={`/events/${id}`} passHref>
            <Image src={image} alt={title} width={200} height={200} />
            <h2>{title}</h2>
            <p>{description}</p>
          </Link>
        );
      })}
    </main>
  );
};

export default Home;
