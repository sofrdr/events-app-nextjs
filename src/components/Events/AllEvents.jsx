import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function AllEvents({ data }) {
  return (
    <div className="events-body">
      {data.map((event) => {
        const { id, title, description, image } = event;
        return (
          <Link className="card" key={id} href={`/events/${id}`} passHref>
            <div className="card-image">
              <Image src={image} alt={title} width={350} height={350} />
            </div>

            <h2>{title}</h2>
            <p>{description}</p>
          </Link>
        );
      })}
    </div>
  );
}
