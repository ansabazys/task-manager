"use client";

import { useProject } from "@/app/context/ProjectContext";
import { useRouter } from "next/navigation";
import { useState } from "react";

interface Task {}

export default function UpdateProfileTitle({
  projectId,
  data,
  action,
}: {
  projectId: string;
  data: string[];
  action: string;
}) {
  const { fetchData } = useProject();
  const [formData, setFormData] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    const result = await fetch(`/api/project/${projectId}`, {
      method: "PUT",
      body: JSON.stringify({ formData, action }),
    });
    fetchData();
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData(e.target.value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name=""
        className="outline-0 text-3xl font-semibold "
        id=""
        defaultValue={data}
        onChange={handleChange}
      />
    </form>
  );
}
