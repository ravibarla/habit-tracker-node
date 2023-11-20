import random from "../data/randomNumberGenerator.js";
let habits = [
  {
    id: 1,
    name: "reading",
    createdAt: new Date().toLocaleString("en-US"),
    entries: [
      {
        id: 1,
        date: new Date().toLocaleDateString(),
        status: "done",
      },
      {
        id: 2,
        date: new Date().toLocaleDateString(),
        status: "done",
      },
      {
        id: 3,
        date: new Date().toLocaleDateString(),
        status: "done",
      },
    ],
  },
  {
    id: 2,
    name: "writing",
    createdAt: "2023-10-01 10:00:00 AM",
    entries: [
      {
        id: 1,
        date: new Date().toLocaleDateString(),
        status: "done",
      },
      {
        id: 2,
        date: new Date().toLocaleDateString(),
        status: "done",
      },
      {
        id: 3,
        date: new Date().toLocaleDateString(),
        status: "done",
      },
    ],
  },
  {
    id: 3,
    name: "sleeping",
    createdAt: "2023-10-01 10:00:00 AM",
    entries: [
      {
        id: 1,
        date: new Date().toLocaleDateString(),
        status: "done",
      },
      {
        id: 2,
        date: new Date().toLocaleDateString(),
        status: "done",
      },
      {
        id: 3,
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

export const updateEntryStatus = (habitId, entryId, newStatus) => {
  const habits = getHabits();
  let habitIndex = -1;
  let entryIndex = -1;
  habitIndex = habits.findIndex((habit) => habit.id == habitId);
  if (habitIndex > -1) {
    entryIndex = habits[habitIndex].entries.findIndex(
      (entry) => entry.id == entryId
    );
  }
  if (entryIndex > -1) {
    habits[habitIndex].entries[entryIndex].status = newStatus;
    return true;
  } else {
    return false;
  }

  return false;
};
