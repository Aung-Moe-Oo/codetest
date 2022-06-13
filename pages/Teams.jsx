import React from "react";
import useFetch from "./useFetch";

const Teams = () => {
  const {
    data: players,
    error,
    isPending,
  } = useFetch("https://www.balldontlie.io/api/v1/players");
  console.log(players?.data[0].first_name);

  return (
    <div className={classes.container}>
      <h1>Home</h1>
      {error && <h2>{error}</h2>}
      {isPending && <h2>Loading...</h2>}
      <table className={classes.table}>
        <thead>
          <tr className={classes.trow}>
            <th>Name</th>
            <th>Position</th>
            <th>Team</th>
            <th>Edit Team</th>
          </tr>
        </thead>

        <tbody>
          {players &&
            players.data.map((i) => {
              return (
                <tr className={classes.trow} key={i.id}>
                  <td>
                    {i.first_name} {i.last_name}
                  </td>
                  <td>{i.position}</td>
                  <td>{i.team.full_name}</td>
                  <td>
                    <button className={classes.btn}>Edit</button>
                  </td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </div>
  );
};

export default Teams;
