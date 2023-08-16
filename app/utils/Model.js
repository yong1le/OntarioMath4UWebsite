import { data } from "./db";

const len = data.length;

/**
 * Returns whether an id is existant in the database.
 * @param {int} [id] The id in question
 * @return {boolean} True if id is in database, false otherwise.
 */
export const checkId = (id) => {
  return id >= 0 && id < len;
};

/**
 * @param {int} [id] an id
 * @return {Object} The object corresponding to the id in the database, null otherwise
 */
export const getSpecificQuestion = (id) => {
  if (!checkId) return null;
  return data[id];
};

/**
 * @return Returns a random question id from the databse
 */
export const getRandomQuestionId = () => {
  return data[Math.floor(Math.random() * (len - 1))].id;
};

export const getQuestionIdFromFull = (unit, chapter, topic) => {
  const matching = [];
  data.forEach((e) => {
    if (
      e.unit === unit &&
      e.chapter === chapter &&
      e.topic === topic
    ) {
      matching.push(e.id);
    }
  });
  return matching[Math.floor(Math.random() * (matching.length - 1))];
};

/**
 * @param {int} [unit] The unit
 * @param {int} [chapter] The chapter
 * @return {int} A random id with the corresponding unit and chapter
 */
export const getQuestionIdFromUnitChapter = (unit, chapter) => {
  const matching = [];
  data.forEach((e) => {
    if (e.unit === unit && e.chapter === chapter) {
      matching.push(e.id);
    }
  });
  return matching[Math.floor(Math.random() * (matching.length - 1))];
};

/**
 * @param {int} [unit] The unit
 * @return {int} A random id with the corresponding unit
 */
export const getQuestionIdFromUnit = (unit) => {
  const matching = [];
  data.forEach((e) => {
    if (e.unit === unit) {
      matching.push(e.id);
    }
  });
  return matching[Math.floor(Math.random() * (matching.length - 1))];
};

export const getUnits = () => {
  const units = new Set();
  data.forEach((e) => {
    units.add(e.unit);
  });

  return Array.from(units).sort();
};

/**
 * @param {int} [unit] The unit
 * @return {Array<int>} The chapters
 */
export const getChapters = (unit) => {
  const chapters = new Set();
  data.forEach((e) => {
    if (e.unit === unit) {
      chapters.add(e.chapter);
    }
  });
  return Array.from(chapters).sort();
};

export const getTopics = (unit, chapter) => {
  const topics = new Set();
  data.forEach((e) => {
    if (e.unit === unit && e.chapter === chapter) {
      topics.add(e.topic);
    }
  });
  return Array.from(topics);
};
