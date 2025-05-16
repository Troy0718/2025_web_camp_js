let str = "";
let allData = [];
const cardWrap = document.querySelector(".cardWrap");
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
    str += `<div class="card">
            <img
              src=${item.img}
              alt="Article Image"
              loading="lazy"
            />
             <p class="date">2024/10/11</p>
              <p class="tag">${item.tags
                .map((tag) =>
                  tag === "人氣文章"
                    ? `<span class='hotTag'>人氣文章</span>`
                    : `${tag}&nbsp;`
                )
                .join("")}</p>
            <div class="card-content">

              <h3>${item.title}</h3>
              <p class="description">
                ${item.description}
              </p>
              <a class="cardBtn" href="#">閱讀內文</a>
            </div>
          </div>`;
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
