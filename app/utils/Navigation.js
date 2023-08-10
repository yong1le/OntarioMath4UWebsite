import { getQuestionFromFull, getQuestionFromUnit, getRandomQuestion } from "./Model";

export  function navigateFromMemory(router) {
  const unit = sessionStorage.getItem("unit");
  const chapter = sessionStorage.getItem("chapter");

  let id;

  if (unit === null || unit === "") {
    id = getRandomQuestion();
  }
  else if (chapter === null || chapter === "") {
    id = getQuestionFromUnit(unit);
  }
  else {
    id = getQuestionFromFull(unit, chapter);
  }

  router.push(`/questions/${id}`);
}
