const createElement = (tag, classNames = "") => {
  const element = document.createElement(tag);
  element.className = classNames;
  return element;
};

const renderList = (data) => {
  const ul = createElement("ul", "blog-list");

  for (let i = 0; i < data.length; i++) {
    const post = data[i];

    const a = createElement("a");
    a.innerText = post.title;
    a.href = post.slug;
    const span = createElement("span");
    span.innerText = post.date;

    const li = createElement("li");
    li.appendChild(a);
    li.appendChild(span);

    ul.appendChild(li);
  }

  const container = document.getElementById("blog-list-container");
  container.appendChild(ul);
};

const fetchBlogList = () => {
  fetch("/js/blogs.json")
    .then((response) => response.json())
    .then(renderList)
    .catch((error) => console.log(error));
};

fetchBlogList();
