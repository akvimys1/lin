let currentIndex = null; // отслеживаем, кто сейчас активен

const people = [
  {
    name: "Ruslan",
    desc: "Linux fan, always high tab.",
    img: "fotos/ruslan.jpg",
    background: "fotos/bg-kosmo.jpg"
  },
  {
    name: "Hlib",
    desc: "GTA V team, 170fps+ player.",
    img: "fotos/hleb.jpg",
    background: "fotos/bg-kosmo.jpg"
  },
  {
    name: "Artem",
    desc: "The best Stellaris player, 60fps peek.",
    img: "fotos/art.jpg",
    background: "fotos/bg-kosmo.jpg"
  },
  {
    name: "Dima",
    desc: "The strongest man in the world, Clash royal's my LIFEEEEE.",
    img: "fotos/dima.jpg",
    background: "fotos/bg-kosmo.jpg"
  },
  {
    name: "Vlad",
    desc: "This is a dota legend, legends are made about him.",
    img: "fotos/vladik.jpg",
    background: "fotos/bg-kosmo.jpg"
  }
];

function showInfo(index) {
  const panel = document.getElementById("info-panel");

  // Если повторный клик по тому же — скрываем
  if (currentIndex === index) {
    panel.classList.remove("show");
    panel.style.backgroundImage = "";
    currentIndex = null;
    return;
  }

  const person = people[index];

  panel.classList.remove("show");

setTimeout(() => {
  document.getElementById("info-img").src = person.img;
  document.getElementById("info-name").textContent = person.name;
  document.getElementById("info-desc").textContent = person.desc;

  panel.classList.add("show");

  panel.style.backgroundImage = `url(${person.background})`;
  panel.style.backgroundSize = "cover";
  panel.style.backgroundPosition = "center";
  panel.style.backgroundRepeat = "no-repeat";

  panel.classList.add("show");
  
  currentIndex = index;
}, 200);
}
