

import { createSelector } from "@reduxjs/toolkit";

export const selectTasks = state => state.tasksAsync.items
export const selectFilter = state => state.filterAsync.status;


export const selectVisibleTasks = createSelector(
        [selectTasks, selectFilter],
        (tasks, filtru) => {
                switch (filtru) {
                        case "completed": return tasks.filter(task => task.completed);
                        case "pending": return tasks.filter(task => !task.completed);
                        default: return tasks
                }
        }
        )


