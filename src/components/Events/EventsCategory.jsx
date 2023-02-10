import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function EventsCategory({ pageName, data }) {
  return (
    <div>
      <h1>Events in {pageName}</h1>
      <div className="events-body">
        {data.map((event) => {
          const { id, title, city, description, image } = event;
          return (
            <Link
              key={id}
              href={`/events/${city}/${id}`}
              passHref
              className="card"
            >
              <Image src={image} alt={title} width={300} height={300} />

              <h3>{title}</h3>
              <p>{description}</p>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
