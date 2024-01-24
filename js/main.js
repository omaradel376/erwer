// select elements landing page
let landingPage = document.querySelector(".landing-page");
let arrayImages = ["01.jpg", "02.jpg", "03.jpg", "04.jpg", "05.jpg", "06.jpg"];
let intervalForRandomImage = "";
// Function For Random Image In Landing Page
function randomBackImage() {
  intervalForRandomImage = setInterval(() => {
    // Create random num
    let randomNum = Math.floor(Math.random() * arrayImages.length);

    // Select Random Image
    landingPage.style.backgroundImage = `url("image/${arrayImages[randomNum]}")`;
  }, 10000);
}
randomBackImage();

// Select elements
let icon = document.querySelector(".icon");
let li_links = document.querySelectorAll(".links li");
let ul_links = document.querySelector("ul.links");

window.onresize = function () {
  iconShow();
};
// Fuction For Show Icon Menu In Resize Page In Small VeiwPort
function iconShow() {
  // Width <= 991px >> show icon
  if (window.innerWidth <= 991) {
    icon.style.display = "block";
    icon.onclick = function () {
      icon.classList.toggle("active");
      ul_links.classList.toggle("active");

      li_links.forEach((e) => {
        e.classList.toggle("active");
      });
    };
    // Width > 991px
  } else {
    icon.style.display = "none";
  }
}
iconShow();

// Select Elements
let imges = document.querySelectorAll(".our-gallery .container img");
let showBox = document.querySelector(".our-gallery .show");
let overLay = document.querySelector(".our-gallery .overlay");
let imgInShowBox = document.querySelector(".our-gallery .show img");
let h3InShowBox = document.querySelector(".our-gallery .show h3");
let xMarkInShowBox = document.querySelector(".our-gallery .show i");

// Images Title
let arrayH3InShowBox = [
  "image one",
  "image two",
  "image three",
  "image four",
  "image five",
  "image six",
  "image seven",
  "image eight",
  "image nine",
  "image ten",
];

// Function For Show Image When Click On It
function img() {
  imges.forEach((img, index) => {
    img.addEventListener("click", (e) => {
      // Show Image When click
      imgInShowBox.src = e.target.dataset.imgnum;
      showBox.classList.add("active");
      overLay.classList.add("active");
      h3InShowBox.innerHTML = arrayH3InShowBox[index];
    });
  });
  // Remove Box After Click On {x}
  xMarkInShowBox.onclick = function () {
    showBox.classList.remove("active");
    overLay.classList.remove("active");
  };
  // If Scroll Remove Box Also
  window.onscroll = function () {
    showBox.classList.remove("active");
    overLay.classList.remove("active");
  };
}
img();

let scrollButton = document.querySelector(".scroll-button");
// When Click Button Scroll To Top
scrollButton.onclick = () => {
  window.scroll({
    top: "0",
  });
};

window.addEventListener("scroll", function () {
  if (window.scrollY >= 600) {
    scrollButton.style.right = "20px";
  } else {
    scrollButton.style.right = "-100%";
  }
});

// select elements
let skills = document.querySelector(".our-skills");
let progerss = document.querySelectorAll(".progress span");
let start = false;
// Function For Increase Progress Width When Scroll
function progressFunction() {
  progerss.forEach((e) => {
    e.style.width = "0";
    if (start == true) e.style.width = e.dataset.width;
  });
}
progressFunction();
window.addEventListener("scroll", function () {
  if (window.scrollY >= skills.offsetTop - 100) {
    start = true;
    progressFunction();
  }
});

// select elements
let line = document.querySelector(".line");
line.style.height = 0;
let timeLine = document.querySelector(".time-line");
let boxInTimeLine = document.querySelectorAll(".time-line .box");

// Function For Increace Line Width When Scroll Into It + For Show Boxs When Scroll Into It
window.addEventListener("scroll", function () {
  // For Line
  if (window.scrollY >= timeLine.offsetTop - 100) {
    line.style.height = timeLine.scrollHeight + "px";
  }

  // For Boxs
  if (window.scrollY >= timeLine.offsetTop - 100) {
    boxInTimeLine.forEach((box) => {
      box.style.transform = "translateX(0%)";
    });
  }
});

let textOfP = document.querySelector(".landing-part p").dataset.text;
printerEffect();
// Function For printer effect on first p in landing page
function printerEffect() {
  let i = 0;
  let interval = setInterval(() => {
    let p = document.querySelector(".landing-part p");
    p.textContent += textOfP[i];
    i++;
    if (i > textOfP.length - 1) {
      clearInterval(interval);
    }
  }, 50);
}

// select elments
let setting = document.querySelector(".setting-box");
let iconSetting = document.querySelector(".setting-box i");
// set color of color box
let colorSetting = document.querySelectorAll(".setting-box .color");
colorSetting.forEach((color) => {
  color.style.backgroundColor = color.dataset.color;
  color.addEventListener("click", function () {
    colorSetting.forEach((e) => e.classList.remove("active"));
    color.classList.add("active");
    localStorage.setItem("color", color.dataset.color);
    document.documentElement.style.setProperty(
      "--main-color",
      localStorage.getItem("color")
    );
  });
});

if (localStorage.getItem("color") == null) {
  colorSetting[0].classList.add("active");
} else {
  colorSetting.forEach((e) => {
    e.classList.remove("active");
    if (localStorage.getItem("color") == e.dataset.color) {
      e.classList.add("active");
    }
  });
}

document.documentElement.style.setProperty(
  "--main-color",
  localStorage.getItem("color")
);

iconSetting.onclick = function () {
  iconSetting.classList.toggle("fa-spin");
  setting.classList.toggle("active");
};

// costumzie of background randomize
let yesAndNoBackground = Array.from(
  document.querySelector(".answer-background").children
);
yesAndNoBackground.forEach((answer) => {
  answer.addEventListener("click", function () {
    yesAndNoBackground.forEach((e) => e.classList.remove("active"));
    answer.classList.add("active");
    localStorage.setItem("backgrounRandom", answer.id);
    if (answer.classList.contains("no")) {
      clearInterval(intervalForRandomImage);
    } else {
      randomBackImage();
    }
  });
});
if (localStorage.getItem("backgrounRandom") == "yes") {
  yesAndNoBackground[0].classList.add("active");
} else if (localStorage.getItem("backgrounRandom") == "no") {
  yesAndNoBackground[1].classList.add("active");
  yesAndNoBackground[0].classList.remove("active");
  clearInterval(intervalForRandomImage);
}

// customize bullets show or hide
let yesAndNoBullets = Array.from(
  document.querySelector(".answer-bullets").children
);
let bullets = document.querySelector(".bullets");

yesAndNoBullets.forEach((answer) => {
  answer.addEventListener("click", function () {
    yesAndNoBullets.forEach((e) => e.classList.remove("active"));
    answer.classList.add("active");

    if (answer.classList.contains("no")) {
      localStorage.setItem("bullets", "none");
      bullets.style.display = localStorage.getItem("bullets");
    } else {
      localStorage.setItem("bullets", "block");
      bullets.style.display = localStorage.getItem("bullets");
    }
  });
});
if (localStorage.getItem("bullets") == "block") {
  yesAndNoBullets[0].classList.add("active");
  bullets.style.display = localStorage.getItem("bullets");
} else if (localStorage.getItem("bullets") == "none") {
  yesAndNoBullets[1].classList.add("active");
  yesAndNoBullets[0].classList.remove("active");
  bullets.style.display = localStorage.getItem("bullets");
}

// {reatart all} button
let restartAll = document.querySelector(".restart-all");

restartAll.onclick = function () {
  localStorage.clear();
  window.location.reload();
};
