document.addEventListener("DOMContentLoaded", function (event) {
  //do work

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

  $(function () {
    $(".genealogy-tree ul").hide();
    $(".genealogy-tree>ul").show();
    $(".genealogy-tree ul.active").show();
    $(".genealogy-tree li").on("click", function (e) {
      var children = $(this).find("> ul");

      if (
        modal17.classList.contains("infomodal") ||
        modal16.classList.contains("infomodal") ||
        modal15.classList.contains("infomodal") ||
        modal14.classList.contains("infomodal") ||
        modal13.classList.contains("infomodal") ||
        modal12.classList.contains("infomodal") ||
        modal11.classList.contains("infomodal") ||
        modal10.classList.contains("infomodal") ||
        modal9.classList.contains("infomodal") ||
        modal8.classList.contains("infomodal") ||
        modal8.classList.contains("infomodal") ||
        modal7.classList.contains("infomodal") ||
        modal6.classList.contains("infomodal") ||
        modal.classList.contains("infomodal") ||
        modal1.classList.contains("infomodal") ||
        modal2.classList.contains("infomodal") ||
        modal3.classList.contains("infomodal") ||
        modal4.classList.contains("infomodal") ||
        modal5.classList.contains("infomodal")
      ) {
        console.log("yes");
      } else if (
        modal17.classList.contains("hid1") ||
        modal16.classList.contains("hid1") ||
        modal15.classList.contains("hid1") ||
        modal14.classList.contains("hid1") ||
        modal13.classList.contains("hid1") ||
        modal12.classList.contains("hid1") ||
        modal11.classList.contains("hid1") ||
        modal10.classList.contains("hid1") ||
        modal9.classList.contains("hid1") ||
        modal8.classList.contains("hid1") ||
        modal8.classList.contains("hid1") ||
        modal7.classList.contains("hid1") ||
        modal6.classList.contains("hid1") ||
        modal.classList.contains("hid1") ||
        modal1.classList.contains("hid1") ||
        modal2.classList.contains("hid1") ||
        modal3.classList.contains("hid1") ||
        modal4.classList.contains("hid1") ||
        modal5.classList.contains("hid1")
      ) {
        console.log("clicked cross");
      } else if (
        modal17.classList.contains("hid2") ||
        modal16.classList.contains("hid2") ||
        modal15.classList.contains("hid2") ||
        modal14.classList.contains("hid2") ||
        modal13.classList.contains("hid2") ||
        modal12.classList.contains("hid2") ||
        modal11.classList.contains("hid2") ||
        modal10.classList.contains("hid2") ||
        modal9.classList.contains("hid2") ||
        modal8.classList.contains("hid2") ||
        modal8.classList.contains("hid2") ||
        modal7.classList.contains("hid2") ||
        modal6.classList.contains("hid2") ||
        modal.classList.contains("hid2") ||
        modal1.classList.contains("hid2") ||
        modal2.classList.contains("hid2") ||
        modal3.classList.contains("hid2") ||
        modal4.classList.contains("hid2") ||
        modal5.classList.contains("hid2")
      ) {
        console.log("view-info clicked");
      } else {
        if (children.is(":visible")) children.hide("fast");
        else children.show("fast");
        e.stopPropagation();
      }
    });
  });

  // modal
  const modal = document.querySelector("#infomodal");
  const openModal = document.querySelector(".open-button");
  const closeModal = document.querySelector(".close-btn");

  openModal.addEventListener("click", () => {
    modal.showModal();
    modal.setAttribute("class", "infomodal hid2");

    setTimeout(() => {
      modal.classList.remove("hid2");
    }, 100);
  });

  closeModal.addEventListener("click", () => {
    modal.close();
    modal.setAttribute("class", "hid hid1");

    setTimeout(() => {
      modal.classList.remove("hid1");
    }, 100);
  });

  // modal1
  const modal1 = document.querySelector("#infomodal1");
  const openModal1 = document.querySelector(".open-button1");
  const closeModal1 = document.querySelector(".close-btn1");

  openModal1.addEventListener("click", () => {
    modal1.showModal();
    modal1.setAttribute("class", "infomodal hid2");

    setTimeout(() => {
      modal1.classList.remove("hid2");
    }, 100);
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
    modal2.setAttribute("class", "infomodal hid2");

    setTimeout(() => {
      modal2.classList.remove("hid2");
    }, 100);
  });

  closeModal2.addEventListener("click", () => {
    modal2.close();
    modal2.setAttribute("class", "hid hid1");

    setTimeout(() => {
      modal2.classList.remove("hid1");
    }, 100);
  });

  // modal3
  const modal3 = document.querySelector("#infomodal3");
  const openModal3 = document.querySelector(".open-button3");
  const closeModal3 = document.querySelector(".close-btn3");

  openModal3.addEventListener("click", () => {
    modal3.showModal();
    modal3.setAttribute("class", "infomodal hid2");

    setTimeout(() => {
      modal3.classList.remove("hid2");
    }, 100);
  });

  closeModal3.addEventListener("click", () => {
    modal3.close();
    modal3.setAttribute("class", "hid hid1");

    setTimeout(() => {
      modal3.classList.remove("hid1");
    }, 100);
  });

  // modal4
  const modal4 = document.querySelector("#infomodal4");
  const openModal4 = document.querySelector(".open-button4");
  const closeModal4 = document.querySelector(".close-btn4");

  openModal4.addEventListener("click", () => {
    modal4.showModal();
    modal4.setAttribute("class", "infomodal hid2");

    setTimeout(() => {
      modal4.classList.remove("hid2");
    }, 100);
  });

  closeModal4.addEventListener("click", () => {
    modal4.close();
    modal4.setAttribute("class", "hid hid1");

    setTimeout(() => {
      modal4.classList.remove("hid1");
    }, 100);
  });

  // modal5
  const modal5 = document.querySelector("#infomodal5");
  const openModal5 = document.querySelector(".open-button5");
  const closeModal5 = document.querySelector(".close-btn5");

  openModal5.addEventListener("click", () => {
    modal5.showModal();
    modal5.setAttribute("class", "infomodal hid2");

    setTimeout(() => {
      modal5.classList.remove("hid2");
    }, 100);
  });

  closeModal5.addEventListener("click", () => {
    modal5.close();
    modal5.setAttribute("class", "hid hid1");

    setTimeout(() => {
      modal5.classList.remove("hid1");
    }, 100);
  });

  // modal6
  const modal6 = document.querySelector("#infomodal6");
  const openModal6 = document.querySelector(".open-button6");
  const closeModal6 = document.querySelector(".close-btn6");

  openModal6.addEventListener("click", () => {
    modal6.showModal();
    modal6.setAttribute("class", "infomodal hid2");

    setTimeout(() => {
      modal6.classList.remove("hid2");
    }, 100);
  });

  closeModal6.addEventListener("click", () => {
    modal6.close();
    modal6.setAttribute("class", "hid hid1");

    setTimeout(() => {
      modal6.classList.remove("hid1");
    }, 100);
  });

  // modal7
  const modal7 = document.querySelector("#infomodal7");
  const openModal7 = document.querySelector(".open-button7");
  const closeModal7 = document.querySelector(".close-btn7");

  openModal7.addEventListener("click", () => {
    modal7.showModal();
    modal7.setAttribute("class", "infomodal hid2");

    setTimeout(() => {
      modal7.classList.remove("hid2");
    }, 100);
  });

  closeModal7.addEventListener("click", () => {
    modal7.close();
    modal7.setAttribute("class", "hid hid1");

    setTimeout(() => {
      modal7.classList.remove("hid1");
    }, 100);
  });

  // modal8
  const modal8 = document.querySelector("#infomodal8");
  const openModal8 = document.querySelector(".open-button8");
  const closeModal8 = document.querySelector(".close-btn8");

  openModal8.addEventListener("click", () => {
    modal8.showModal();
    modal8.setAttribute("class", "infomodal hid2");

    setTimeout(() => {
      modal8.classList.remove("hid2");
    }, 100);
  });

  closeModal8.addEventListener("click", () => {
    modal8.close();
    modal8.setAttribute("class", "hid hid1");

    setTimeout(() => {
      modal8.classList.remove("hid1");
    }, 100);
  });

  // modal9
  const modal9 = document.querySelector("#infomodal9");
  const openModal9 = document.querySelector(".open-button9");
  const closeModal9 = document.querySelector(".close-btn9");

  openModal9.addEventListener("click", () => {
    modal9.showModal();
    modal9.setAttribute("class", "infomodal hid2");

    setTimeout(() => {
      modal9.classList.remove("hid2");
    }, 100);
  });

  closeModal9.addEventListener("click", () => {
    modal9.close();
    modal9.setAttribute("class", "hid hid1");

    setTimeout(() => {
      modal9.classList.remove("hid1");
    }, 100);
  });

  // modal10
  const modal10 = document.querySelector("#infomodal10");
  const openModal10 = document.querySelector(".open-button10");
  const closeModal10 = document.querySelector(".close-btn10");

  openModal10.addEventListener("click", () => {
    modal10.showModal();
    modal10.setAttribute("class", "infomodal hid2");

    setTimeout(() => {
      modal10.classList.remove("hid2");
    }, 100);
  });

  closeModal10.addEventListener("click", () => {
    modal10.close();
    modal10.setAttribute("class", "hid hid1");
    setTimeout(() => {
      modal10.classList.remove("hid1");
    }, 100);
  });

  // modal11
  const modal11 = document.querySelector("#infomodal11");
  const openModal11 = document.querySelector(".open-button11");
  const closeModal11 = document.querySelector(".close-btn11");

  openModal11.addEventListener("click", () => {
    modal11.showModal();
    modal11.setAttribute("class", "infomodal hid2");

    setTimeout(() => {
      modal11.classList.remove("hid2");
    }, 100);
  });

  closeModal11.addEventListener("click", () => {
    modal11.close();
    modal11.setAttribute("class", "hid hid1");

    setTimeout(() => {
      modal11.classList.remove("hid1");
    }, 100);
  });

  // modal12
  const modal12 = document.querySelector("#infomodal12");
  const openModal12 = document.querySelector(".open-button12");
  const closeModal12 = document.querySelector(".close-btn12");

  openModal12.addEventListener("click", () => {
    modal12.showModal();
    modal12.setAttribute("class", "infomodal hid2");

    setTimeout(() => {
      modal12.classList.remove("hid2");
    }, 100);
  });

  closeModal12.addEventListener("click", () => {
    modal12.close();
    modal12.setAttribute("class", "hid hid1");

    setTimeout(() => {
      modal12.classList.remove("hid1");
    }, 100);
  });
  // modal13
  const modal13 = document.querySelector("#infomodal13");
  const openModal13 = document.querySelector(".open-button13");
  const closeModal13 = document.querySelector(".close-btn13");

  openModal13.addEventListener("click", () => {
    modal13.showModal();
    modal13.setAttribute("class", "infomodal hid2");

    setTimeout(() => {
      modal13.classList.remove("hid2");
    }, 100);
  });

  closeModal13.addEventListener("click", () => {
    modal13.close();
    modal13.setAttribute("class", "hid hid1");

    setTimeout(() => {
      modal13.classList.remove("hid1");
    }, 100);
  });

  // modal14
  const modal14 = document.querySelector("#infomodal14");
  const openModal14 = document.querySelector(".open-button14");
  const closeModal14 = document.querySelector(".close-btn14");

  openModal14.addEventListener("click", () => {
    modal14.showModal();
    modal14.setAttribute("class", "infomodal hid2");

    setTimeout(() => {
      modal14.classList.remove("hid2");
    }, 100);
  });

  closeModal14.addEventListener("click", () => {
    modal14.close();
    modal14.setAttribute("class", "hid hid1");

    setTimeout(() => {
      modal14.classList.remove("hid1");
    }, 100);
  });
  // modal15
  const modal15 = document.querySelector("#infomodal15");
  const openModal15 = document.querySelector(".open-button15");
  const closeModal15 = document.querySelector(".close-btn15");

  openModal15.addEventListener("click", () => {
    modal15.showModal();
    modal15.setAttribute("class", "infomodal hid2");

    setTimeout(() => {
      modal15.classList.remove("hid2");
    }, 100);
  });

  closeModal15.addEventListener("click", () => {
    modal15.close();
    modal15.setAttribute("class", "hid hid1");

    setTimeout(() => {
      modal15.classList.remove("hid1");
    }, 100);
  });

  // modal16
  const modal16 = document.querySelector("#infomodal16");
  const openModal16 = document.querySelector(".open-button16");
  const closeModal16 = document.querySelector(".close-btn16");

  openModal16.addEventListener("click", () => {
    modal16.showModal();
    modal16.setAttribute("class", "infomodal hid2");

    setTimeout(() => {
      modal16.classList.remove("hid2");
    }, 100);
  });

  closeModal16.addEventListener("click", () => {
    modal16.close();
    modal16.setAttribute("class", "hid hid1");

    setTimeout(() => {
      modal16.classList.remove("hid1");
    }, 100);
  });

  // modal17
  const modal17 = document.querySelector("#infomodal17");
  const openModal17 = document.querySelector(".open-button17");
  const closeModal17 = document.querySelector(".close-btn17");

  openModal17.addEventListener("click", () => {
    modal17.showModal();
    modal17.setAttribute("class", "infomodal hid2");

    setTimeout(() => {
      modal17.classList.remove("hid2");
    }, 100);
  });

  closeModal17.addEventListener("click", () => {
    modal17.close();
    modal17.setAttribute("class", "hid hid1");

    setTimeout(() => {
      modal.classList.remove("hid1");
    }, 100);
  });

  const element12 = document.querySelector(".modal2-btn");
  const element13 = document.querySelector("#regis-center");
  const element14 = document.querySelector("#adminis-center");
  const element15 = document.querySelector(".kkk");

  element12.addEventListener("click", () => {
    console.log("element 12");

    setTimeout(() => {
      document.querySelector(".modal2-btn").scrollIntoView({
        behavior: "auto",
        block: "center",
        inline: "center",
      });
    }, 1000 / 2);
  });

  element13.addEventListener("click", () => {
    console.log("element 13");
    setTimeout(() => {
      document.querySelector(".modal2-btn").scrollIntoView({
        behavior: "auto",
        block: "center",
        inline: "center",
      });
    }, 1000 / 2);
  });
  element14.addEventListener("click", () => {
    console.log("element 14");
    setTimeout(() => {
      document.querySelector(".modal2-btn").scrollIntoView({
        behavior: "auto",
        block: "center",
        inline: "center",
      });
    }, 1000 / 2);
  });

  element15.addEventListener("click", () => {
    console.log("element 15");

    setTimeout(() => {
      document.querySelector(".modal2-btn").scrollIntoView({
        behavior: "auto",
        block: "center",
        inline: "center",
      });
    }, 1000 / 2);
  });
});
