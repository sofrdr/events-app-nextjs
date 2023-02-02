import Image from "next/image";
import Link from "next/link";

const Home = ({ data }) => {
  return (
    <div className="home-body">
      {data.map((event) => {
        const { id, title, description, image } = event;
        return (
          <Link className="card" key={id} href={`/events/${id}`} passHref>
            <div className="card-image">
              <Image src={image} alt={title} width={400} height={300} />
            </div>

            <div className="card-content">
              <h2>{title}</h2>
              <p>{description}</p>
            </div>
          </Link>
        );
      })}
    </div>
  );
};

export default Home;
