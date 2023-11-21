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
  const { id } = req.params;
  Habits.findOneAndDelete({ id })
    .then((success) => {
      console.log("successfully deleted");
      return res.redirect("/");
    })
    .catch((err) => console.log("err :", err));
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
  Habits.findOneAndUpdate(
    { id: habitId, "entries.id": entryId },
    { $set: { "entries.$.status": newStatus } }
  )
    .then((success) => res.redirect("/weekView"))
    .catch((err) => console.log("error :", err));
};
