import { getHabits, saveInMongo } from "../data/habits.js";

export const home = (req, res) => {
  // saveInMongo()
  res.render("home", {
    title: "home",
    habits: getHabits(),
  });
};
