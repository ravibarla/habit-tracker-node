import random from "../data/randomNumberGenerator.js";
let habits = [
  {
    id: random(),
    name: "reading",
    createdAt: new Date().toLocaleString("en-US"),
    entries: [
      {
        date: new Date().toLocaleDateString(),
        status: "done",
      },
      {
        date: new Date().toLocaleDateString(),
        status: "done",
      },
      {
        date: new Date().toLocaleDateString(),
        status: "done",
      },
    ],
  },
  {
    id: random(),
    name: "writing",
    createdAt: "2023-10-01 10:00:00 AM",
    entries: [
      {
        date: new Date().toLocaleDateString(),
        status: "done",
      },
      {
        date: new Date().toLocaleDateString(),
        status: "done",
      },
      {
        date: new Date().toLocaleDateString(),
        status: "done",
      },
    ],
  },
  {
    id: random(),
    name: "sleeping",
    createdAt: "2023-10-01 10:00:00 AM",
    entries: [
      {
        date: new Date().toLocaleDateString(),
        status: "done",
      },
      {
        date: new Date().toLocaleDateString(),
        status: "done",
      },
      {
        date: new Date().toLocaleDateString(),
        status: "done",
      },
    ],
  },
];

export const getHabits = () => {
  return habits;
};

export const updateHabits = (updatedHabits) => {
  habits = updatedHabits;
};

export const addHabit = (newHabit) => {
  habits.push(newHabit);
};
