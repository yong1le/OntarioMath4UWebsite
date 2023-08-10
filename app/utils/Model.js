import { data } from "./db";

const len = data.length;

export const getRandomQuestion = () => {
  return Math.floor(Math.random() * (len - 1))
}

export const getQuestionFromFull = (unit, chapter) => {
  const matching = [];
  data.forEach((e) => {
    if (e.unit.toString() === unit && e.chapter.toString() === chapter) {
      matching.push(e);
    }
  })
  return Math.floor(Math.random() * (matching.length - 1));
}

export const getQuestionFromUnit = (unit) => {
  const matching = [];
  data.forEach((e) => {
    if (e.unit.toString() === unit) {
      matching.push(e);
    }
  })
  return Math.floor(Math.random() * (matching.length - 1));

}

export const getChapters = (unit) => {
  const chapters = new Set();
  for (let i = 0; i < len; i++) {
    if (data[i].unit == unit) {
      chapters.add(data[i].chapter);
    }
  }
  return chapters;
}

export const checkId = (id) => {
  if (id < 0 || id >= len) return false;
  if (data[id].unit === null) return false;
  if (data[id].chapter === null) return false;
  if (data[id].answer === null) return false;
  if (data[id].question === null) return false;
  return true;
}
