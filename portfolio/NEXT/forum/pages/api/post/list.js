import { connectDB } from "@/util/database";
export default async function handler(요청, 응답) {
  //   응답.status(200).json(result);
  if (요청.method == "POST") {
    if (요청.body.title == "") {
      return 응답.status(200).json("제목을 쓰시오");
    }
    try {
      let db = (await connectDB).db("forum");
      await db.collection("post").insertOne(요청.body);

      return 응답.status(200).redirect(302, "/list");
    } catch (err) {
      return 응답.status(500).json("db저장 에러");
    }
  }
}
