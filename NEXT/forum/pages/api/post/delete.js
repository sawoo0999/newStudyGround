import { connectDB } from "@/util/database";
import { ObjectId } from "mongodb";
export default async function handler(요청, 응답) {
  if (요청.method == "DELETE") {
    console.log(요청.body);
    try {
      let db = (await connectDB).db("forum");
      let result = await db
        .collection("post")
        .deleteOne({ _id: new ObjectId(JSON.parse(요청.body)) });
    } catch (err) {
      return 응답.status(500).json("Error");
    }
  }
}
