import { useParams } from "react-router-dom";

function EventDetailPage() {
  const params = useParams();
  return <h1>{params.id}</h1>;
}

export default EventDetailPage;
