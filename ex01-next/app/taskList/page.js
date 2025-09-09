"use client";

import { getTasks } from "@/api";
import { useQuery } from "@tanstack/react-query";
import Link from "next/link";

export default function TaskList() {
  const { data, isFetching, error, isPending } = useQuery({
    queryKey: ["todos"],
    queryFn: getTasks,
  });

  if (isFetching) {
    return <p>Loading...</p>;
  }
  if (error) {
    return <p>Error: {error.message}</p>;
  }
  if (!data) {
    return <p>No data available</p>;
  }
  return (
    <div>
      <h1>Task List</h1>
      {data.results.map((task) => (
        <p key={task.objectId}>
          {task.description} - {task.done ? "Done" : "Not Done"}
        </p>
      ))}
      {isPending && <p>Pending...</p>}
      <hr />
      <Link href="/">Home</Link>
    </div>
  );
}
