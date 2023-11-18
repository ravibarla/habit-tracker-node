import { stat } from "fs";
import { habits } from "../data/habits.js";

export const create = (req, res) => {
  return res.render("_create", {
    title: "create",
  });
};

export const created = (req, res) => {
  const { habit } = req.body;
  const entries = [];
  const today = new Date();
  for (let i = 0; i < 3; i++) { 
    let entryDate = new Date(
      today.setDate(today.getDate() + i)
    ).toLocaleDateString();
    let status = "not done";
    entries.push({
      date: entryDate,
      status: status,
    });
  }

  const newHabit = {
    name: habit,
    createdAt: new Date().toDateString(),
    entries: entries,
  };
  habits.push(newHabit);
  return res.redirect("/");
};

export const weekView = (req, res) => {
  return res.render("weekView", {
    habits: habits,
    title: "week-view",
  });
};


