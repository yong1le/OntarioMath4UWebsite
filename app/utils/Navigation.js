import { getQuestionIdFromFull, getQuestionIdFromUnit, getRandomQuestionId } from "./Model";

export  function navigateFromMemory(router) {
  const unit = parseInt(sessionStorage.getItem("unit"));
  const chapter = parseInt(sessionStorage.getItem("chapter"));

  let id;

  if (isNaN(unit)) {
    id = getRandomQuestionId();
  }
  else if (isNan(chapter)) {
    id = getQuestionIdFromUnit(unit);
  }
  else {
    id = getQuestionIdFromFull(unit, chapter);
  }

  router.push(`/questions/${id}`);
}
