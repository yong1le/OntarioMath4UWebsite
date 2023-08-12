import { data } from "./db";

const len = data.length;

/**
 * Returns whether an id is existant in the database.
 * @param {int} [id] The id in question
 * @return {boolean} True if id is in database, false otherwise.
 */
export const checkId = (id) => {
  return id >= 0 && id < len;
}

/**
 * @param {int} [id] an id 
 * @return {Object} The object corresponding to the id in the database, null otherwise
 */
export const getSpecificQuestion = (id) => {
  if (!checkId) return null;
  return data[id];
}

/**
 * @return Returns a random question id from the databse
 */
export const getRandomQuestionId = () => {
  return Math.floor(Math.random() * (len - 1))
}

/**
 * @param {int} [unit] The unit
 * @param {int} [chapter] The chapter
 * @return {int} A random id with the corresponding unit and chapter
 */
export const getQuestionIdFromFull = (unit, chapter) => {
  const matching = [];
  data.forEach((e) => {
    if (e.unit.toString() === unit && e.chapter === chapter) {
      matching.push(e);
    }
  })
  return Math.floor(Math.random() * (matching.length - 1));
}

/**
 * @param {int} [unit] The unit
 * @return {int} A random id with the corresponding unit
 */
export const getQuestionIdFromUnit = (unit) => {
  const matching = [];
  data.forEach((e) => {
    if (e.unit === unit) {
      matching.push(e);
    }
  })
  return Math.floor(Math.random() * (matching.length - 1));

}

/**
 * @param {int} [unit] The unit
 * @return {Set<int>} The chapters
 */
export const getChapters = (unit) => {
  const chapters = new Set();
  for (let i = 0; i < len; i++) {
    if (data[i].unit == unit) {
      chapters.add(data[i].chapter);
    }
  }
  return chapters;
}

