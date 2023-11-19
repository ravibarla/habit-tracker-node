import { getHabits } from "../data/habits.js";

export const home = (req, res) => {
  res.render("home", {
    title: "home",
    habits: getHabits(),
  });
};
