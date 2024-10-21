import { connectDB } from "@/util/database";
import List from "./list/page";

export default async function Home() {
  const db = (await connectDB).db("forum");
  let result = await db.collection("post").find().toArray();
  return (
    <div>
      <h1>하이</h1>
    </div>
  );
}
