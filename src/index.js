import "./styles.css";

const onClickAdd = () => {
  const inputText = document.getElementById("add-text").value;
  document.getElementById("add-text").value = "";
  createIncompleteElement(inputText);
};

const deleteFromList = (target, id) => {
  document.getElementById(id).removeChild(target);
};

const createIncompleteElement = (text) => {
  const li = document.createElement("li");
  const div = document.createElement("div");
  div.className = "list-row";
  const p = document.createElement("p");
  p.innerText = text;
  const completeButton = document.createElement("button");
  completeButton.innerText = "完";

  completeButton.addEventListener("click", () => {
    deleteFromList(deleteButton.parentNode.parentNode, "incomplete-list");
    const addTarget = completeButton.parentNode;
    const text = addTarget.firstChild.innerText;
    // console.log(addTarget);
    addTarget.textContent = null;
    // console.log(addTarget);
    const li = document.createElement("li");
    const p = document.createElement("p");
    p.innerText = text;
    const revertButton = document.createElement("button");
    revertButton.innerText = "戻す";
    revertButton.addEventListener("click", () => {
      deleteFromList(revertButton.parentNode.parentNode, "complete-list");
      const text = revertButton.parentNode.firstChild.innerText;
      createIncompleteElement(text);
    });
    addTarget.appendChild(p);
    addTarget.appendChild(revertButton);
    li.appendChild(addTarget);
    document.getElementById("complete-list").appendChild(li);
  });

  const deleteButton = document.createElement("button");
  deleteButton.innerText = "削除";
  deleteButton.addEventListener("click", () => {
    deleteFromList(deleteButton.parentNode.parentNode, "incomplete-list");
  });

  div.appendChild(p);
  div.appendChild(completeButton);
  div.appendChild(deleteButton);
  li.appendChild(div);
  document.getElementById("incomplete-list").appendChild(li);
  // console.log(div);
};

document
  .getElementById("add-button")
  .addEventListener("click", () => onClickAdd());
