import React, { useRef, useState } from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import { isLocalURL } from "next/dist/shared/lib/router/router";

export default function SingleEvent({ data }) {
  const { id, title, image, description } = data;
  const [message, setMessage] = useState("");
  const inputEmail = useRef();
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const emailValue = inputEmail.current.value;
    const eventId = router.query.id;
    try {
      const response = await fetch("/api/email-registration", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email: emailValue, eventId }),
      });

      const data = await response.json();
      if (data.error) {
        throw new Error(data.error);
      }
      setMessage(data.message);
      inputEmail.current.value = "";
    } catch (error) {
      console.log(error);
      setMessage(error.message);
    }
  };

  return (
    <div key={id} className="single-event-body">
      <h1>{title}</h1>
      <Image src={image} alt={title} width={1000} height={500} />
      <p>{description}</p>
      <form onSubmit={handleSubmit} className="email-registration">
        <label htmlFor="email">Get registred for this event</label>
        <div>
          <input
            type="email"
            id="email"
            ref={inputEmail}
            placeholder="Please insert your email"
          />
          <button type="submit">Submit</button>
        </div>
      </form>
      <p>{message}</p>
    </div>
  );
}
