import { connectDB } from "@/util/database";
import { ObjectId } from "mongodb";
export default async function handler(요청, 응답) {
  if (요청.method == "POST") {
    console.log(요청.body);
    let newObj = { title: 요청.body.title, content: 요청.body.content };
    try {
      let db = (await connectDB).db("forum");
      let result = await db
        .collection("post")
        .updateOne({ _id: new ObjectId(요청.body._id) }, { $set: newObj });
      console.log(result);
      응답.status(200).redirect(302, "/list");
    } catch (err) {
      return 응답.status(500).json("Error");
    }
  }
}
