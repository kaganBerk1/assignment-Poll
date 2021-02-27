//////// getting informations from server ////////
const getData = async () => {
  //////// fetch //////////////////////
  const response = await fetch(
    "https://run.mocky.io/v3/339dfd9f-ce76-4f82-b43b-4b8dde6491b4"
  );

  if (response.status !== 200) {
    throw new Error("cannot fetch the data");
  }

  const data = await response.json();
  return data;
};

getData()
  .then((data) => {
    /////// DOM ELEMENTS ////////////////////
    const thumbImage = document.querySelector(".thumbnail");
    const userName = document.querySelector(".userName");
    const backGroundImage = document.querySelector(".pollViewContainer");
    const questionId = document.querySelector("#attendence");
    const deadline = document.querySelector("#Deadline");
    const carrot = document.querySelector("#carrot");

    ////////////// DECLARATION /////////////
    carrot.innerHTML = `${data.acquisitionAmount}`;
    deadline.innerHTML = `${data.deadlineDay} days`;
    questionId.textContent = `${data.questions[0].order}`;
    backGroundImage.style.backgroundImage = `url('${data.questions[0].image}')`;
    userName.innerHTML = data.owner.userName;
    thumbImage.src = `${data.owner.thumbImage}`;
  })
  .catch((err) => {
    console.log(err);
  });

///////////// Events ////////////////////
const reviewResults = document.querySelector(".bottomView");
const modal = document.querySelector("#myModal");
const closeBtn = document.querySelector(".close");
const closeMyBtn = document.querySelector(".myButton");
const dots = document.querySelector(".dots");
const modal2 = document.querySelector("#myModal2");
const cancel = document.querySelector(".w3-teal");

modal.style.display = "none";
modal2.style.display = "none";

reviewResults.addEventListener("click", (e) => {
  e.preventDefault();
  modal.style.display = "block";
});

closeBtn.addEventListener("click", () => {
  modal.style.display = "none";
});

closeMyBtn.addEventListener("click", () => {
  modal.style.display = "none";
});

dots.addEventListener("click", () => {
  modal2.style.display = "block";
});

cancel.addEventListener("click", () => {
  modal2.style.display = "none";
});

////// out of box click ////////
document.onclick = function (e) {
  if (e.target.id === "myModal2") {
    modal2.style.display = "none";
  }
};
