import { db } from "./lib/db";

export default async function Home() {
  const data = await db.execute("SELECT * FROM users");
  const users = data.rows.map((row) => row.email?.toString());
  return (
    <div>
      hello{" "}
      {users.map((user, index) => {
        return <div key={index}>{user}</div>;
      })}
    </div>
  );
}
