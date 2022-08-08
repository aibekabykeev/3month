const idInput= document.querySelector(".inputId");
const btnClick = document.querySelector(".btnSubmit");

const idNum = /^1\d{13}|2\d{13}$/;

btnClick.addEventListener("click", () => {
    if(idNum.test(idInput.value)) {
      alert("Correct");
    }
    else {
      alert("Incorrect");
    }
  });

  //Второе Задание
  const dvigatsya = document.querySelector(".moveBlock")

let num = 0;
const move = function() {
    dvigatsya.style.left = `${num}px`;
    if (num <200) {
        num += 40;
    } else {
        num = 0;
        move()
    }
}
dvigatsya.addEventListener("click", move)