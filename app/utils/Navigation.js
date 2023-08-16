import { getQuestionIdFromFull, getQuestionIdFromUnit, getRandomQuestionId, getQuestionIdFromUnitChapter } from "./Model";

export function navigateFromMemory(router) {
  const unit = parseInt(sessionStorage.getItem("unit"));
  const chapter = parseInt(sessionStorage.getItem("chapter"));
  const topic = sessionStorage.getItem("topic");

  let id;

  if (isNaN(unit)) {
    console.log(1)
    id = getRandomQuestionId();
  }
  else if (isNaN(chapter)) {
    console.log(2)
    id = getQuestionIdFromUnit(unit);
  }
  else if (topic === "" || topic === null) {
    console.log(3)
    id = getQuestionIdFromUnitChapter(unit, chapter)
  }
  else {
    console.log(4)
    id = getQuestionIdFromFull(unit, chapter, topic);
  }

  router.push(`/questions/${id}`);
}
