import React from "react";
import Image from "next/image";

export default function SingleEvent({ data }) {
  const { id, title, city, image, description, emails_registred } = data;

  const handleSubmit = () => {};
  return (
    <div key={id} className="single-event-body">
      <h1>{title}</h1>
      <Image src={image} alt={title} width={800} height={500} />
      <p>{description}</p>
      <form onSubmit={handleSubmit} className="email-registration">
        <label htmlFor="email">Get registred for this event</label>
        <div>
          <input
            type="email"
            id="email"
            placeholder="Please insert your email"
          />
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
}
