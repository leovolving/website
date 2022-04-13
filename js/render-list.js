const createElement = (tag, classNames = "") => {
  const element = document.createElement(tag);
  element.className = classNames;
  return element;
};

const renderList = (data, type) => {
  const ul = createElement("ul", `list ${type}-list`);

  for (let i = 0; i < data.length; i++) {
    const item = data[i];

    const a = createElement("a");
    a.innerText = item.title;

    const li = createElement("li");
    li.appendChild(a);

    if (item.date) {
      const span = createElement("span");
      span.innerText = new Date(item.date).toLocaleDateString();
      li.appendChild(span);

      const p = createElement("p");
      p.innerText = item.tags.join(" | ");
      li.appendChild(p);

      a.href = `../blog/${item.href}.html`;
    } else a.href = item.href;

    ul.appendChild(li);
  }

  const container = document.getElementById(`${type}-list-container`);
  container.appendChild(ul);
};

const fetchList = (type) => {
  renderList(lists[type], type);
};
