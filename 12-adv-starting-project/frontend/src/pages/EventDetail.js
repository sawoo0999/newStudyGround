import { json, redirect, useRouteLoaderData } from "react-router-dom";
import EventItem from "../components/EventItem";

function EventDetailPage() {
  const data = useRouteLoaderData("event-detail");
  return <EventItem event={data.event} />;
}

export default EventDetailPage;

//Get ID
export async function loader({ request, params }) {
  const id = params.id;
  const res = await fetch("http://localhost:8080/events/" + id);

  if (!res.ok) {
    throw json(
      { message: "Could not fetch details for selected event." },
      { status: 500 }
    );
  } else {
    return res;
  }
}

//Delete
export async function action({ request, params }) {
  const id = params.id;
  const res = await fetch("http://localhost:8080/events/" + id, {
    method: request.method,
  });
  if (!res.ok) {
    throw json({ message: "Could not delete event" }, { status: 500 });
  }

  return redirect("/events");
}
