const wrapper = document.querySelector(".sliderWrapper");
const menuItems = document.querySelectorAll(".menuItem");

const products = [
  {
    id: 1,
    title: "sumsung s22 ultra",
    price:105000,
    colors: [
      {
        code: "black",
        img: "./img/mobblac.jfif",
      },
      {
        code: "white",
        img: "./img/mobwhite.jfif",
      },
      {
     code:"pink",
     img: "./img/moborange.jfif",
      },
      {
        code:"gray",
        img: "./img/mobsilver.jfif",
         },
    ],
  },
  {
    id: 2,
    title: "computers",
    price: 75000,
    colors: [
      {
        code: "black",
        img: "./img/pcbl.jfif",
      },
      {
        code: "pink",
        img: "./img/pcpi.jfif",
      },
      {
        code: "white",
        img: "./img/pcwh.jfif",
      },
      {
        code: "red",
        img: "./img/pcred.jfif",
      },

    ],
  },
  {
    id: 3,
    title: "camera",
    price: 60000,
    colors: [
      {
        code: "black",
        img: "./img/cbl.jfif",
      },
      {
        code: "red",
        img: "./img/cred.jfif",
      },
      {
        code: "white",
        img: "./img/cwhi.jfif",
      },
      {
        code: "pink",
        img: "./img/cpink.jfif",
      },
    ],
  },
  {
    id: 4,
    title: "tablets",
    price: 250000,
    colors: [
      {
        code: "black",
        img: "./img/tblack.jfif",
      },
      {
        code: "red",
        img: "./img/tred.jfif",
      },
      {
        code: "grey",
        img: "./img/tsilv.jfif",
      },
      {
        code: "white",
        img: "./img/twhit.jfif",
      },
    ],
  },
  {
    id: 5,
    title: "Hippie",
    price: 10000,
    colors: [
      {
        code: "black",
        img: "./img/wb.jfif",
      },
      {
        code: "red",
        img: "./img/wr.jfif",
      },
      {
        code: "white",
        img: "./img/wwh.jfif",
      },
      {
        code: "green",
        img: "./img/wg.png",
      },
    ],
  },
];

let choosenProduct = products[0];

const currentProductImg = document.querySelector(".productImg");
const currentProductTitle = document.querySelector(".productTitle");
const currentProductPrice = document.querySelector(".productPrice");
const currentProductColors = document.querySelectorAll(".color");
const currentProductSizes = document.querySelectorAll(".size");

menuItems.forEach((item, index) => {
  item.addEventListener("click", () => {
    //change the current slide
    wrapper.style.transform = `translateX(${-100 * index}vw)`;

    //change the choosen product
    choosenProduct = products[index];

    //change texts of currentProduct
    currentProductTitle.textContent = choosenProduct.title;
    currentProductPrice.textContent = "etb " + choosenProduct.price;
    currentProductImg.src = choosenProduct.colors[0].img;

    //assing new colors
    currentProductColors.forEach((color, index) => {
      color.style.backgroundColor = choosenProduct.colors[index].code;
    });
  });
});

currentProductColors.forEach((color, index) => {
  color.addEventListener("click", () => {
    currentProductImg.src = choosenProduct.colors[index].img;
  });
});

currentProductSizes.forEach((size, index) => {
  size.addEventListener("click", () => {
    currentProductSizes.forEach((size) => {
      size.style.backgroundColor = "white";
      size.style.color = "black";
    });
    size.style.backgroundColor = "black";
    size.style.color = "white";
  });
});

const productButton = document.querySelector(".productButton");
const payment = document.querySelector(".payment");
const close = document.querySelector(".close");

productButton.addEventListener("click", () => {
  payment.style.display = "flex";
});

close.addEventListener("click", () => {
  payment.style.display = "none";
});
