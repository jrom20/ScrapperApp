import React from "react";

export default function CommitList(props) {
  return (
    <table className="table table-striped">
      <thead>
        <tr>
          <th>Commit Message</th>
          <th>Commit Author</th>
          <th>Commit Date</th>
        </tr>
      </thead>
      <tbody>
        {props.commitList.map((data) => {
          return (
            <tr key={data.node_id}>
              <td>
                {data.commit.message}
              </td>
              <td>{data.commit.author.name}</td>
              <td>{data.commit.author.date}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
