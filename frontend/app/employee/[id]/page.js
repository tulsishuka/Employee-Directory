
"use client";


import { gql, useQuery } from "@apollo/client";
import { useParams } from "next/navigation";
import { useRouter } from "next/navigation";
import client from "@/lib/apolloClient";


const GET_EMPLOYEE = gql`
  query GetEmployee($id: ID!) {
    getEmployeeDetails(id: $id) {
      id
      name
      position
      department
      salary
      profileViewCount
    }
  }
`;

export default function EmployeeDetail() {
  const { id } = useParams();
  const router = useRouter();

  const { loading, error, data } = useQuery(GET_EMPLOYEE, {
    variables: { id },
    client,
    fetchPolicy: "network-only",
  });

  if (!id) return <p>No employee ID provided.</p>;
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  const emp = data.getEmployeeDetails;
  if (!emp) return <p>Employee not found</p>;

  return (
    <div style={{ padding: "20px" }}>
      <h2>{emp.name}</h2>
      <p><strong>Position:</strong> {emp.position}</p>
      <p><strong>Department:</strong> {emp.department}</p>
      <p><strong>Salary:</strong> ${emp.salary}</p>
      <p><strong>Profile Views:</strong> {emp.profileViewCount || 0}</p>

      <button
        style={{ marginTop: "20px", padding: "8px 16px", cursor: "pointer" }}
        onClick={() => router.push("/")}
      >
        Back to Home
      </button>
    </div>
  );
}
