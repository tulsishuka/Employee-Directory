
"use client";

import { useRouter } from "next/navigation";
import { gql, useMutation } from "@apollo/client";
import client from "../lib/apolloClient";

const INCREMENT_PROFILE_VIEW = gql`
  mutation IncrementProfileView($id: ID!) {
    incrementProfileView(id: $id) {
      id
      profileViewCount
    }
  }
`;

export default function EmployeeTable({ employees }) {
  const router = useRouter();
  const [incrementProfileView] = useMutation(INCREMENT_PROFILE_VIEW, { client });

  const handleRowClick = async (emp) => {
    try {
      await incrementProfileView({ variables: { id: emp.id } });
    } catch (err) {
      console.error("Error incrementing profile view:", err);
    }
    router.push(`/employee/${emp.id}`);
  };

  return (
    <table className="min-w-full border bg-gray-400 h-screen w-full">
      <thead>
        <tr>
          <th className="border px-2 py-1">Name</th>
          <th className="border px-2 py-1">Position</th>
        </tr>
      </thead>
      <tbody>
      
        {employees.map((emp, index) => (
  <tr
    key={`${emp.id}-${index}`} // combine ID + index
    className="cursor-pointer hover:bg-gray-100"
    onClick={() => handleRowClick(emp)}
  >
    <td className="bg-red-400">{emp.name}</td>
    <td>{emp.position}</td>
  </tr>
))}

      </tbody>
    </table>


  );
}
