import React from "react";
import useFetch from "./useFetch";
import { useSelector } from "react-redux";
import classes from "../styles/MainPage.module.css";
import Router from "next/router";

const Mainpage = () => {
  const {
    data: players,
    error,
    isPending,
  } = useFetch("https://www.balldontlie.io/api/v1/players");
  const user = useSelector((state) => state.admin.enteredName);

  return (
    <div className={classes.container}>
      <h1>Hello {user}</h1>
      {error && <h2>{error}</h2>}
      {isPending && <h2>Loading...</h2>}
      <table className={classes.table}>
        <thead>
          <tr className={classes.trow}>
            <th>Name</th>
            <th>Position</th>
            <th>Team</th>
            <th>Leave Team</th>
          </tr>
        </thead>

        <tbody>
          {players &&
            players.data.map((i) => {
              const handleDelete = () => {
                fetch(
                  "https://www.balldontlie.io/api/v1/players/data/" + i.team,
                  {
                    method: "DELETE",
                  }
                ).then(() => {
                  Router.push("/");
                });
              };
              return (
                <tr className={classes.trow} key={i.id}>
                  <td>
                    {i.first_name} {i.last_name}
                  </td>
                  <td>{i.position}</td>
                  <td>{i.team.full_name}</td>
                  <td>
                    <button className={classes.btn} onClick={handleDelete}>
                      Leave
                    </button>
                  </td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </div>
  );
};

export default Mainpage;
