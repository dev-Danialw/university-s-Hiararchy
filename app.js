setTimeout(() => {
  document.body.style.overflow = "hidden !important";
  document.querySelector(".lds-ellipsis").style.display = "block";
  document.querySelector(".genealogy-body").style.display = "none";
}, 50);

setTimeout(() => {
  document.querySelector(".lds-ellipsis").style.display = "none";
  document.querySelector(".genealogy-body").style.display = "block";
  document.body.style.overflow = "visible";
}, 50);

// $(function () {
//     $('.genealogy-tree ul').hide();
//     $('.genealogy-tree>ul').show();
//     $('.genealogy-tree ul.active').show();
//     $('.genealogy-tree li').on('click', function (e) {
//         $('.genealogy-tree li').on('click', function (e) {

//             if (e.composedPath().find(el => el.matches('a.cta'))) return;
//             var children = $(this).find('> ul');
//             if (children.is(":visible")) children.hide('fast').removeClass('active');
//             else children.show('fast').addClass('active');
//             e.stopPropagation();
//           })

//     });
// });
$(function () {
  $(".genealogy-tree ul").hide();
  $(".genealogy-tree>ul").show();
  $(".genealogy-tree ul.active").show();
  $(".genealogy-tree li").on("click", function (e) {
    // if (e.composedPath().find(el => el.matches('a.cta'))) return;
    var children = $(this).find("> ul");
    if (children.is(":visible")) children.hide("fast");
    else children.show("fast");
    e.stopPropagation();
  });
});

// modal
const modal = document.querySelector("#infomodal");
const openModal = document.querySelector(".open-button");
const closeModal = document.querySelector(".close-btn");

openModal.addEventListener("click", () => {
  modal.showModal();
  modal.setAttribute("class", "infomodal");
});

closeModal.addEventListener("click", () => {
  modal.close();
  modal.setAttribute("class", "hid");
});

// modal1
const modal1 = document.querySelector("#infomodal1");
const openModal1 = document.querySelector(".open-button1");
const closeModal1 = document.querySelector(".close-btn1");

openModal1.addEventListener("click", () => {
  modal1.showModal();
  modal1.setAttribute("class", "infomodal");
});

closeModal1.addEventListener("click", () => {
  modal1.close();
  modal1.setAttribute("class", "hid");
});

// modal2
const modal2 = document.querySelector("#infomodal2");
const openModal2 = document.querySelector(".open-button2");
const closeModal2 = document.querySelector(".close-btn2");

openModal2.addEventListener("click", () => {
  modal2.showModal();
  modal2.setAttribute("class", "infomodal");
});

closeModal2.addEventListener("click", () => {
  modal2.close();
  modal2.setAttribute("class", "hid");
});

// modal3
const modal3 = document.querySelector("#infomodal3");
const openModal3 = document.querySelector(".open-button3");
const closeModal3 = document.querySelector(".close-btn3");

openModal3.addEventListener("click", () => {
  modal3.showModal();
  modal3.setAttribute("class", "infomodal");
});

closeModal3.addEventListener("click", () => {
  modal3.close();
  modal3.setAttribute("class", "hid");
});

// modal4
const modal4 = document.querySelector("#infomodal4");
const openModal4 = document.querySelector(".open-button4");
const closeModal4 = document.querySelector(".close-btn4");

openModal4.addEventListener("click", () => {
  modal4.showModal();
  modal4.setAttribute("class", "infomodal");
});

closeModal4.addEventListener("click", () => {
  modal4.close();
  modal4.setAttribute("class", "hid");
});

// modal5
const modal5 = document.querySelector("#infomodal5");
const openModal5 = document.querySelector(".open-button5");
const closeModal5 = document.querySelector(".close-btn5");

openModal5.addEventListener("click", () => {
  modal5.showModal();
  modal5.setAttribute("class", "infomodal");
});

closeModal5.addEventListener("click", () => {
  modal5.close();
  modal5.setAttribute("class", "hid");
});

// modal6
const modal6 = document.querySelector("#infomodal6");
const openModal6 = document.querySelector(".open-button6");
const closeModal6 = document.querySelector(".close-btn6");

openModal6.addEventListener("click", () => {
  modal6.showModal();
  modal6.setAttribute("class", "infomodal");
});

closeModal6.addEventListener("click", () => {
  modal6.close();
  modal6.setAttribute("class", "hid");
});

// modal7
const modal7 = document.querySelector("#infomodal7");
const openModal7 = document.querySelector(".open-button7");
const closeModal7 = document.querySelector(".close-btn7");

openModal7.addEventListener("click", () => {
  modal7.showModal();
  modal7.setAttribute("class", "infomodal");
});

closeModal7.addEventListener("click", () => {
  modal7.close();
  modal7.setAttribute("class", "hid");
});

// modal8
const modal8 = document.querySelector("#infomodal8");
const openModal8 = document.querySelector(".open-button8");
const closeModal8 = document.querySelector(".close-btn8");

openModal8.addEventListener("click", () => {
  modal8.showModal();
  modal8.setAttribute("class", "infomodal");
});

closeModal8.addEventListener("click", () => {
  modal8.close();
  modal8.setAttribute("class", "hid");
});

// modal9
const modal9 = document.querySelector("#infomodal9");
const openModal9 = document.querySelector(".open-button9");
const closeModal9 = document.querySelector(".close-btn9");

openModal9.addEventListener("click", () => {
  modal9.showModal();
  modal9.setAttribute("class", "infomodal");
});

closeModal9.addEventListener("click", () => {
  modal9.close();
  modal9.setAttribute("class", "hid");
});

// modal10
const modal10 = document.querySelector("#infomodal10");
const openModal10 = document.querySelector(".open-button10");
const closeModal10 = document.querySelector(".close-btn10");

openModal10.addEventListener("click", () => {
  modal10.showModal();
  modal10.setAttribute("class", "infomodal");
});

closeModal10.addEventListener("click", () => {
  modal10.close();
  modal10.setAttribute("class", "hid");
});

// modal11
const modal11 = document.querySelector("#infomodal11");
const openModal11 = document.querySelector(".open-button11");
const closeModal11 = document.querySelector(".close-btn11");

openModal11.addEventListener("click", () => {
  modal11.showModal();
  modal11.setAttribute("class", "infomodal");
});

closeModal11.addEventListener("click", () => {
  modal11.close();
  modal11.setAttribute("class", "hid");
});

// modal12
const modal12 = document.querySelector("#infomodal12");
const openModal12 = document.querySelector(".open-button12");
const closeModal12 = document.querySelector(".close-btn12");

openModal12.addEventListener("click", () => {
  modal12.showModal();
  modal12.setAttribute("class", "infomodal");
});

closeModal12.addEventListener("click", () => {
  modal12.close();
  modal12.setAttribute("class", "hid");
});
// modal13
const modal13 = document.querySelector("#infomodal13");
const openModal13 = document.querySelector(".open-button13");
const closeModal13 = document.querySelector(".close-btn13");

openModal13.addEventListener("click", () => {
  modal13.showModal();
  modal13.setAttribute("class", "infomodal");
});

closeModal13.addEventListener("click", () => {
  modal13.close();
  modal13.setAttribute("class", "hid");
});

// modal14
const modal14 = document.querySelector("#infomodal14");
const openModal14 = document.querySelector(".open-button14");
const closeModal14 = document.querySelector(".close-btn14");

openModal14.addEventListener("click", () => {
  modal14.showModal();
  modal14.setAttribute("class", "infomodal");
});

closeModal14.addEventListener("click", () => {
  modal14.close();
  modal14.setAttribute("class", "hid");
});
// modal15
const modal15 = document.querySelector("#infomodal15");
const openModal15 = document.querySelector(".open-button15");
const closeModal15 = document.querySelector(".close-btn15");

openModal15.addEventListener("click", () => {
  modal15.showModal();
  modal15.setAttribute("class", "infomodal");
});

closeModal15.addEventListener("click", () => {
  modal15.close();
  modal15.setAttribute("class", "hid");
});

// modal16
const modal16 = document.querySelector("#infomodal16");
const openModal16 = document.querySelector(".open-button16");
const closeModal16 = document.querySelector(".close-btn16");

openModal16.addEventListener("click", () => {
  modal16.showModal();
  modal16.setAttribute("class", "infomodal");
});

closeModal16.addEventListener("click", () => {
  modal16.close();
  modal16.setAttribute("class", "hid");
});

// modal17
const modal17 = document.querySelector("#infomodal17");
const openModal17 = document.querySelector(".open-button17");
const closeModal17 = document.querySelector(".close-btn17");

openModal17.addEventListener("click", () => {
  modal17.showModal();
  modal17.setAttribute("class", "infomodal");
});

closeModal17.addEventListener("click", () => {
  modal17.close();
  modal17.setAttribute("class", "hid");
});
