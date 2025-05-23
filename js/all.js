let str = "";
let allData = [];
const cardWrap = document.querySelector(".card-wrap");
const dataUrl = "./js/articles.json";

//取得卡片資料
async function getCardData() {
  try {
    const response = await axios.get(dataUrl);
    console.log(response);
    allData = response.data;
  } catch (error) {
    console.log(error);
  }
}

//渲染頁面
async function renderCardWrap() {
  str = "";
  allData.forEach((item) => {
    str += `<li class="card">
            <img
              src=${item.img}
              class="card-img"
              alt="Article Image"
              loading="lazy"
            />
            <div class="card-content">
             <time class='card-date'>${item.date}</time>
              <p class="card-tag">${item.tags
                .map((tag) =>
                  tag === "人氣文章"
                    ? `<a href="#" class='card-tag hot'>人氣文章</a>`
                    : `<a href="#" class='card-tag'>${tag}</a>&nbsp;`
                )
                .join("")}</p>


              <h3 class='card-title'>${item.title}</h3>
              <p class="card-description">
                ${item.description}
              </p>
              <a class="card-btn" href="#">閱讀內文</a>
            </div>
          </li>`;
  });
  cardWrap.innerHTML = str;
}

//初始化
(async function intial() {
  try {
    await getCardData();
    renderCardWrap();
  } catch (error) {
    console.error("初始化錯誤:", error.message);
  }
})();
