// Js code goes here

const apiId = document.getElementById('current-question-id').value;
const getStarted = document.getElementById("start-button");
const loader = document.getElementById('loader-view');
const instructions = document.getElementById('pre-quiz-instructions');
const quizView = document.getElementById('quiz');
const submit = document.getElementById('submit-button');

let ans = null;
let selectedans = null;
console.log("script");
console.log(getStarted);

toggleHide(quizView, true);
toggleHide(loader, true);

function toggleHide(id, value) {
  id.hidden = value;
}

function toggleDisable(id, value) {
  id.disabled = value;
}

function loadQuizView({question, options, answer, id}) {
  ans = answer;

  toggleDisable(submit, true);

  const questionId = document.getElementById('question');
  const listId = document.getElementById('options-container');
  // questionId.value = question;
  const nodeDiv = document.createElement('div');
  nodeDiv.appendChild(document.createTextNode(question));
  questionId.appendChild(nodeDiv);
  const list = document.createElement('ui');
  list.setAttribute("class", "row");
  options.forEach((element, idx) => {
    const node = document.createElement('li');
    node.setAttribute("id", `ansid${idx}`);
    node.setAttribute("data-testid","question");
    node.appendChild(document.createTextNode(element));
    node.onclick = function() {
      node.classList.add("user-answer");
      toggleDisable(submit, false);
      selectedans = idx + 1;
      // node.style.backgroundColor = "green";
    }
    list.appendChild(node);
  });
  listId.appendChild(list);
}

getStarted.onclick = function() {
  ans = null;
  selectedans=null;
  console.log('add event');
  
  toggleHide(instructions, true);
  toggleHide(getStarted, true);
  instructions.remove();
  getStarted.remove();
  toggleHide(loader, false);
  fetch(`https://jsonmock.hackerrank.com/api/questions/${apiId}`)
    .then(response => {
      return response.json();
    })
    .then(data => {
      console.log('data', data);
        toggleHide(loader, true);
        toggleHide(quizView, false);
        loadQuizView(data.data);
    });
}

submit.onclick = function() {
  const node =  document.getElementById(`ansid${selectedans-1}`);
  node.classList.remove("user-answer");
  if(selectedans && ans && selectedans===ans) {
      node.classList.add("correct-answer");
      node.style.backgroundColor = "green";
  } else {
      node.classList.add("wrong-answer");
      node.style.backgroundColor = "red";
  }
}