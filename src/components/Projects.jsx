import React from "react";
import { useQuery } from "react-query";
import { Card, CardBody, CardImg, CardTitle } from "reactstrap";
import { getUsers } from "../api/getUsers";
export default function Projects() {
  const { data: users, isLoading, error } = useQuery("users", getUsers);
  return (
    <div>
      <h1>Projects</h1>
      {isLoading ? (
        <>
          <h1>loading</h1>
        </>
      ) : (
        <>
          {users?.map((user) => (
            <Card key={user.id}>
              <CardImg
                alt="Card image cap"
                src={user.avatar}
                top
                width="100%"
              />
              <CardBody>
                <CardTitle tag="h5">
                  {user.first_name} {user.last_name}
                </CardTitle>
                <CardTitle tag="h6">Email : {user.email}</CardTitle>
              </CardBody>
            </Card>
          ))}
        </>
      )}
    </div>
  );
}
