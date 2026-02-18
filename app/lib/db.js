import Dexie from "dexie";

export const db = new Dexie('QuizDB');

db.version(1).stores({
    scores: '++id, quizId, finishedAt'
});