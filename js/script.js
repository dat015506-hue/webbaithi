/* ===== BÀI 1: CAROUSEL ===== */
let index = 0;
function showSlide() {
  document.querySelector(".slides").style.transform =
    `translateX(${-index * 300}px)`;
}
function nextSlide() {
  index++;
  showSlide();
}
function prevSlide() {
  index--;
  showSlide();
}

/* ===== BÀI 2: TODO ===== */
let todos = JSON.parse(localStorage.getItem("todos")) || [];
function renderTodo() {
  const ul = document.getElementById("todoList");
  if (!ul) return;
  ul.innerHTML = "";
  todos.forEach(t => {
    const li = document.createElement("li");
    li.textContent = t;
    ul.appendChild(li);
  });
}
function addTodo() {
  const input = document.getElementById("todoInput");
  todos.push(input.value);
  localStorage.setItem("todos", JSON.stringify(todos));
  renderTodo();
  input.value = "";
}
renderTodo();

/* ===== BÀI 3: GAME ===== */
const randomNumber = Math.floor(Math.random() * 100) + 1;
function checkNumber() {
  const guess = Number(document.getElementById("guessInput").value);
  const result = document.getElementById("result");
  if (guess > randomNumber) result.textContent = "Quá cao";
  else if (guess < randomNumber) result.textContent = "Quá thấp";
  else result.textContent = "🎉 Đúng rồi!";
}
