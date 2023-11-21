import { Habits } from "../model/Habits.js";

export const home = (req, res) => {
  Habits.find({}).then((habits) => {
    res.render("home", {
      title: "home",
      habits: habits,
    });
  });
};
