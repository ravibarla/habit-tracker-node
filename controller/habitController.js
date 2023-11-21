import random from "../data/randomNumberGenerator.js";
import { Habits } from "../model/Habits.js";

// function to render home page
export const home = (req, res) => {
  //retrieve all the habits from the mongodb
  Habits.find({}).then((habits) => {
    //if habit is found successfullt
    return res.render("home", {
      title: "home",
      habits: habits,
    });
  });
};


//function to render create form
export const create = (req, res) => {
  return res.render("_create", {
    title: "create",
  });
};

//function to add a new habit
export const created = (req, res) => {
  //retreive habitName from request
  let { habitName } = req.body;
  const entries = [];
  const today = new Date();

  //to create entries of the new habit
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

  //to create a new habit
  const newHabit = {
    id: random(),
    name: habitName,
    createdAt: new Date().toLocaleString("en-US"),
    entries: entries,
  };

  // add new habit to habit schema
  const habits = new Habits(newHabit);

  // saving the new habit in mongodb
  habits
    .save()
    //if successfully saved
    .then((savedHabit) => {
      console.log("New habit saved:");
    })
    //if unsuccessfully saved
    .catch((error) => {
      console.error("Error saving habit:", error);
    });
  return res.redirect("/");
};

//function to render week view of habits
export const weekView = (req, res) => {
  //retrieve habits from the mongodb
  Habits.find({}).then((habits) =>
    res.render("weekView", {
      habits: habits,
      title: "week-view",
    })
  );
};

//function to delete habit
export const deleteHabit = (req, res) => {
  //retrieving the habit id from the request
  const { id } = req.params;
  //find and delete the habit from the mongodb
  Habits.findOneAndDelete({ id })
    //if successfully deleted
    .then((success) => {
      console.log("successfully deleted");
      return res.redirect("/");
    })
    //if unsuccessfully deleted
    .catch((err) => console.log("err :", err));
};

//function to update the status
export const updateStatus = (req, res) => {
  //retrieving the habit id , entry id , entry status from the request
  const { habitId, entryId, entryStatus } = req.params;
  let newStatus = null;
  if (entryStatus == "none") {
    newStatus = "done";
  } else if (entryStatus == "done") {
    newStatus = "not done";
  } else {
    newStatus = "none";
  }

  //find and update the status for the particular habit
  Habits.findOneAndUpdate(
    { id: habitId, "entries.id": entryId },
    { $set: { "entries.$.status": newStatus } }
  )
    //if successfully updated
    .then((success) => res.redirect("/weekView"))
    //if unsuccessfully updated
    .catch((err) => console.log("error :", err));
};
