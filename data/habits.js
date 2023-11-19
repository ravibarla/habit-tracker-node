import random from "../data/randomNumberGenerator.js";
let habits = [
  {
    id: random(),
    name: "reading",
    createdAt: new Date().toLocaleString("en-US"),
    entries: [
      {
        id: random(),
        date: new Date().toLocaleDateString(),
        status: "done",
      },
      {
        id: random(),
        date: new Date().toLocaleDateString(),
        status: "done",
      },
      {
        id: random(),
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
        id: random(),
        date: new Date().toLocaleDateString(),
        status: "done",
      },
      {
        id: random(),
        date: new Date().toLocaleDateString(),
        status: "done",
      },
      {
        id: random(),
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
        id: random(),
        date: new Date().toLocaleDateString(),
        status: "done",
      },
      {
        id: random(),
        date: new Date().toLocaleDateString(),
        status: "done",
      },
      {
        id: random(),
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
  const habitIndex = habits.findIndex((habit) => habit.id == Number(habitId));
  if (habitIndex) {
    const entryIndex = habits[habitIndex].entries.findIndex(
      (entry) => entry.id == Number(entryId)
    );
    if (entryIndex) {
      habits[habitIndex].entries[entryIndex].status = newStatus;
      console.log(habits[habitIndex].entries[entryIndex].status);
    }
  }

  return;
};
