"use client";
import Link from "next/link";
export default function ListItem({ result }) {
  return (
    <div>
      {result.map((a, i) => {
        return (
          <div className="list-item" key={i}>
            <Link href={"/detail/" + result[i]._id.toString}>
              <h4>{result[i].title}</h4>
            </Link>
            <div>{result[i].content}</div>
            <Link href={"/edit/" + result[i]._id}>수정</Link>
            <button
              onClick={() => {
                fetch("api/post/delete", {
                  method: "DELETE",
                  body: JSON.stringify(result[i]._id),
                });
              }}
            >
              🗑
            </button>
          </div>
        );
      })}
    </div>
  );
}
