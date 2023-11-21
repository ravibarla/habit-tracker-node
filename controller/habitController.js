import {
  addHabit,
  getHabits,
  updateEntryStatus,
  updateHabits,
} from "../data/habits.js";
import random from "../data/randomNumberGenerator.js";
import { Habits } from "../model/Habits.js";
export const create = (req, res) => {
  return res.render("_create", {
    title: "create",
  });
};

export const created = (req, res) => {
  let { habitName } = req.body;
  const entries = [];
  const today = new Date();
  for (let i = 0; i < 3; i++) {
    let entryDate = new Date(
      today.setDate(today.getDate() + i)
    ).toLocaleDateString();
    let status = "none";
    entries.push({
      id: random(),
      date: entryDate,
      status: status,
    });
  }

  const newHabit = {
    id: random(),
    name: habitName,
    createdAt: new Date().toLocaleString("en-US"),
    entries: entries,
  };

  addHabit(newHabit);
  return res.redirect("/");
};

export const weekView = (req, res) => {
  Habits.find({}).then((habits) =>
    res.render("weekView", {
      habits: habits,
      title: "week-view",
    })
  );
};

export const deleteHabit = (req, res) => {
  const habits = getHabits();
  const { id } = req.params;
  const updatedHabit = habits.filter((habit) => habit.id !== Number(id));
  updateHabits(updatedHabit);
  return res.redirect("/");
};

export const updateStatus = (req, res) => {
  const { habitId, entryId, entryStatus } = req.params;
  let newStatus = null;
  if (entryStatus == "none") {
    newStatus = "done";
  } else if (entryStatus == "done") {
    newStatus = "not done";
  } else {
    newStatus = "none";
  }
  const isUpdated = updateEntryStatus(habitId, entryId, newStatus);
  if (isUpdated) {
    return res.redirect("/weekView");
  }
  return res.send("error in loading page");
};
