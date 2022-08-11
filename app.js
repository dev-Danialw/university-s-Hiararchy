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

      if (children.is(":visible")) children.hide("fast");
      else children.show("fast");
      e.stopPropagation();
    });
  });
  //

  // $(function () {
  //   $(".genealogy-tree ul").hide();
  //   $(".genealogy-tree>ul").show();
  //   $(".genealogy-tree ul.active").show();
  //   $(".genealogy-tree li").on("click", function (e) {
  //     var children = $(this).find("> ul");
  //     if (children.is(":visible")) children.hide("fast").removeClass("active");
  //     else children.show("fast").addClass("active");
  //     e.stopPropagation();
  //   });
  // });

  // modal
  let openModal = document.querySelectorAll(".cta");

  openModal.forEach((e) => {
    e.addEventListener("click", () => {
      let dialog = e.nextElementSibling;
      dialog.showModal();
      dialog.classList.add("infomodal", "hid2");

      setTimeout(() => {
        dialog.classList.remove("hid2");
      }, 100);
    });
  });

  let closeModal = document.querySelectorAll(".close-btn");

  closeModal.forEach((e) => {
    e.addEventListener("click", () => {
      let dialog = e.parentNode;
      dialog.close();
      dialog.classList.remove("infomodal");
      dialog.classList.add("hid1");

      setTimeout(() => {
        dialog.classList.remove("hid1");
      }, 100);
    });
  });

  const element12 = document.querySelector(".modal2-btn");
  const element13 = document.querySelector("#regis-center");
  const element14 = document.querySelector("#adminis-center");
  const element15 = document.querySelector(".kkk");
  const element16 = document.querySelectorAll(".controller-exm");
  const element17 = document.querySelectorAll(".controller-exm-1");
  const element18 = document.querySelectorAll(".faculties");
  const element19 = document.querySelectorAll(".academics");
  const element20 = document.querySelectorAll(".dean-health");
  const element21 = document.querySelectorAll(".dean-science");
  const element22 = document.querySelectorAll(".dean-humanity");

  element12.addEventListener("click", () => {
    setTimeout(() => {
      document.querySelector(".modal2-btn").scrollIntoView({
        behavior: "auto",
        block: "center",
        inline: "center",
      });
    }, 200);
  });

  element13.addEventListener("click", () => {
    console.log("element 13");
    setTimeout(() => {
      document.querySelector(".modal2-btn").scrollIntoView({
        behavior: "auto",
        block: "center",
        inline: "center",
      });
    }, 400);
  });
  element14.addEventListener("click", () => {
    console.log("element 14");
    setTimeout(() => {
      document.querySelector(".modal2-btn").scrollIntoView({
        behavior: "auto",
        block: "center",
        inline: "center",
      });
    }, 400);
  });

  element15.addEventListener("click", () => {
    console.log("element 15");

    setTimeout(() => {
      document.querySelector(".modal2-btn").scrollIntoView({
        behavior: "auto",
        block: "center",
        inline: "center",
      });
    }, 400);
  });

  element16.forEach((e) => {
    return e.addEventListener("click", () => {
      console.log("element 16");

      setTimeout(() => {
        document.querySelector(".controller-exm").scrollIntoView({
          behavior: "auto",
          block: "start",
          inline: "center",
        });
      }, 400);
    });
  });

  element17.forEach((e) => {
    return e.addEventListener("click", () => {
      console.log("element 17");

      setTimeout(() => {
        document.querySelector(".controller-exm-1").scrollIntoView({
          behavior: "auto",
          block: "start",
          inline: "center",
        });
      }, 400);
    });
  });

  element18.forEach((e) => {
    return e.addEventListener("click", () => {
      console.log("element 18");

      setTimeout(() => {
        document.querySelector(".faculties").scrollIntoView({
          behavior: "auto",
          block: "start",
          inline: "center",
        });
      }, 400);
    });
  });

  element19.forEach((e) => {
    return e.addEventListener("click", () => {
      console.log("element 19");

      setTimeout(() => {
        document.querySelector(".academics").scrollIntoView({
          behavior: "auto",
          block: "start",
          inline: "center",
        });
      }, 400);
    });
  });

  element20.forEach((e) => {
    return e.addEventListener("click", () => {
      console.log("element 20");

      setTimeout(() => {
        document.querySelector(".dean-health").scrollIntoView({
          behavior: "auto",
          block: "start",
          inline: "center",
        });
      }, 400);
    });
  });

  element21.forEach((e) => {
    return e.addEventListener("click", () => {
      console.log("element 21");

      setTimeout(() => {
        document.querySelector(".dean-science").scrollIntoView({
          behavior: "auto",
          block: "start",
          inline: "center",
        });
      }, 400);
    });
  });

  element22.forEach((e) => {
    return e.addEventListener("click", () => {
      console.log("element 22");

      setTimeout(() => {
        document.querySelector(".dean-humanity").scrollIntoView({
          behavior: "auto",
          block: "start",
          inline: "center",
        });
      }, 400);
    });
  });

  // tidbit
  const typSpd = 70;
  const waitTime = 500;
  const text = ["Click on the card to expand it."];
  var mi = 0;

  function writeString(e, str, i) {
    e.innerHTML = e.innerHTML + str[i];

    if (e.innerHTML.length == str.length && mi != text.length)
      setTimeout(slowlyDelete, waitTime, e);
  }

  function deleteString(e) {
    e.innerHTML = e.innerHTML.substring(0, e.innerHTML.length - 1);

    if (e.innerHTML.length == 0) slowlyWrite(e, text[mi++]);
  }

  function slowlyDelete(e) {
    for (var i = 0; i < e.innerHTML.length; i++) {
      setTimeout(deleteString, (typSpd / 2) * i, e);
    }
  }

  function slowlyWrite(e, str) {
    for (var i = 0; i < str.length; i++) {
      setTimeout(writeString, typSpd * i, e, str, i);
    }
  }

  const msg = document.querySelector(".msg-icn");
  slowlyDelete(msg);

  document.querySelector(".kkk").addEventListener("click", () => {
    document.querySelector(".msg-icn").style.display = "none";
  });
});
