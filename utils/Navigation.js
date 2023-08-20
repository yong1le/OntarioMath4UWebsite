import {
  getQuestionIdFromFull,
  getQuestionIdFromUnit,
  getRandomQuestionId,
  getQuestionIdFromUnitChapter,
} from "./Model";

export function navigateFromMemory(router) {
  const unit = parseInt(sessionStorage.getItem("unit"));
  const chapter = parseInt(sessionStorage.getItem("chapter"));
  const topic = sessionStorage.getItem("topic");

  let id;

  if (isNaN(unit)) {
    id = getRandomQuestionId();
  } else if (isNaN(chapter)) {
    id = getQuestionIdFromUnit(unit);
  } else if (topic === "" || topic === null) {
    id = getQuestionIdFromUnitChapter(unit, chapter);
  } else {
    id = getQuestionIdFromFull(unit, chapter, topic);
  }

  console.log(id);
  router.push(`/questions/${id}`);
}
