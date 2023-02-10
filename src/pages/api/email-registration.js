import path from "path";
import fs from "fs";
import validator from "validator";

export default function handler(req, res) {
  const { method } = req;

  const filePath = path.join(process.cwd(), "data", "data.json");
  const jsonData = fs.readFileSync(filePath);
  const data = JSON.parse(jsonData);
  const { allEvents, events_categories } = data;

  try {
    if (!allEvents) {
      return res.status(404).json({ message: "Events data not found}" });
    }

    if (method === "POST") {
      const { email, eventId } = req.body;

      const newAllEvents = allEvents.map((ev) => {
        if (ev.id === eventId) {
          // if email has already been registered
          if (ev.emails_registered.includes(email)) {
            throw new Error("This email has already been registered");
          }
          // if email is incorrect
          if (!validator.isEmail(email) || !email) {
            throw new Error("Please enter a valid email");
          }
          return {
            ...ev,
            emails_registered: [...ev.emails_registered, email],
          };
        }
        return ev;
      });

      fs.writeFileSync(
        filePath,
        JSON.stringify({ events_categories, allEvents: newAllEvents })
      );

      res.status(200).json({
        message: `You have been registered successfully with the email ${email}`,
      });
    }
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
}
