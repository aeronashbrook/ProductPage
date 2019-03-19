let i = 0;
let size = 0;
$(document).ready(function(){
  $("#size115").click(function(){
    console.log("cool");
  });
  initial();
  $("#colorImgSelect1").click(function(){
    i = 0;
    clearInventory();
    changeContent();
    clearhighlights();
    $("#colorImgSelect1").css("background-color", "rgba(80, 80, 80, 0.274)");
  });
  $("#colorImgSelect2").click(function(){
    i = 1;
    clearInventory();
    changeContent();
    clearhighlights();
    $("#colorImgSelect2").css("background-color", "rgba(80, 80, 80, 0.274)");
  });
  $("#colorImgSelect3").click(function(){
    i = 2;
    clearInventory();
    changeContent();
    clearhighlights();
    $("#colorImgSelect3").css("background-color", "rgba(80, 80, 80, 0.274)");
  });
  $("#colorImgSelect4").click(function(){
    i = 3;
    clearInventory();
    changeContent();
    clearhighlights();
    $("#colorImgSelect4").css("background-color", "rgba(80, 80, 80, 0.274)");
  });
  $(".sizechartText").click(function(){
    $(".sizeChart").show();
  });
  $(".closeIcon").click(function(){
    $(".sizeChart").hide();
  });

  function initial() {
    i = 0;
    clearInventory();
    changeContent();
    clearhighlights();
    $("#colorImgSelect1").css("background-color", "rgba(80, 80, 80, 0.274)");
  };
  function inventoryCheck() {
    if (shoes[i].size6Inv === 0) {
      $("#size6").css("color", "rgb(61, 61, 61)");
      $("#size6").css("background-color", "rgb(146, 146, 146)");
      $("#size6").prop("disabled",true);
    }
    if (shoes[i].size65Inv === 0) {
      $("#size65").css("color", "rgb(61, 61, 61)");
      $("#size65").css("background-color", "rgb(146, 146, 146)");
      $("#size65").prop("disabled",true);
    }
    if (shoes[i].size7Inv === 0) {
      $("#size7").css("color", "rgb(61, 61, 61)");
      $("#size7").css("background-color", "rgb(146, 146, 146)");
      $("#size7").prop("disabled",true);
    }
    if (shoes[i].size75Inv === 0) {
      $("#size75").css("color", "rgb(61, 61, 61)");
      $("#size75").css("background-color", "rgb(146, 146, 146)");
      $("#size75").prop("disabled",true);
    }
    if (shoes[i].size8Inv === 0) {
      $("#size8").css("color", "rgb(61, 61, 61)");
      $("#size8").css("background-color", "rgb(146, 146, 146)");
      $("#size8").prop("disabled",true);
    }
    if (shoes[i].size85Inv === 0) {
      $("#size85").css("color", "rgb(61, 61, 61)");
      $("#size85").css("background-color", "rgb(146, 146, 146)");
      $("#size85").prop("disabled",true);
    }
    if (shoes[i].size9Inv === 0) {
      $("#size9").css("color", "rgb(61, 61, 61)");
      $("#size9").css("background-color", "rgb(146, 146, 146)");
      $("#size9").prop("disabled",true);
    }
    if (shoes[i].size95Inv === 0) {
      $("#size95").css("color", "rgb(61, 61, 61)");
      $("#size95").css("background-color", "rgb(146, 146, 146)");
      $("#size95").prop("disabled",true);
    }
    if (shoes[i].size10Inv === 0) {
      $("#size10").css("color", "rgb(61, 61, 61)");
      $("#size10").css("background-color", "rgb(146, 146, 146)");
      $("#size10").prop("disabled",true);
    }
    if (shoes[i].size105Inv === 0) {
      $("#size105").css("color", "rgb(61, 61, 61)");
      $("#size105").css("background-color", "rgb(146, 146, 146)");
      $("#size105").prop("disabled",true);
    }
    if (shoes[i].size11Inv === 0) {
      $("#size11").css("color", "rgb(61, 61, 61)");
      $("#size11").css("background-color", "rgb(146, 146, 146)");
      $("#size11").prop("disabled",true);
    }
    if (shoes[i].size115Inv === 0) {
      $("#size115").css("color", "rgb(61, 61, 61)");
      $("#size115").css("background-color", "rgb(146, 146, 146)");
      $("#size115").prop("disabled",true);
    }
    if (shoes[i].size12Inv === 0) {
      $("#size12").css("color", "rgb(61, 61, 61)");
      $("#size12").css("background-color", "rgb(146, 146, 146)");
      $("#size12").prop("disabled",true);
    }
    if (shoes[i].size125Inv === 0) {
      $("#size125").css("color", "rgb(61, 61, 61)");
      $("#size125").css("background-color", "rgb(146, 146, 146)");
      $("#size125").prop("disabled",true);
    }
    if (shoes[i].size13Inv === 0) {
      $("#size13").css("color", "rgb(61, 61, 61)");
      $("#size13").css("background-color", "rgb(146, 146, 146)");
      $("#size13").prop("disabled",true);
    }
  };
  $(".sizeButton").click(function(){
    clearSize();
    $(this).css("border", "solid 1px black")
  });
  function clearSize() {
    $(".sizeButton").css("border", "solid 1px #d1d1d1");
  }
  function clearInventory() {
    $("#size6").css("background-color", "rgb(255, 255, 255)");
    $("#size6").css("color", "black");
    $("#size65").css("background-color", "rgb(255, 255, 255)");
    $("#size65").css("color", "black");
    $("#size7").css("background-color", "rgb(255, 255, 255)");
    $("#size7").css("color", "black");
    $("#size75").css("background-color", "rgb(255, 255, 255)");
    $("#size75").css("color", "black");
    $("#size8").css("background-color", "rgb(255, 255, 255)");
    $("#size8").css("color", "black");
    $("#size85").css("background-color", "rgb(255, 255, 255)");
    $("#size85").css("color", "black");
    $("#size9").css("background-color", "rgb(255, 255, 255)");
    $("#size9").css("color", "black");
    $("#size95").css("background-color", "rgb(255, 255, 255)");
    $("#size95").css("color", "black");
    $("#size10").css("background-color", "rgb(255, 255, 255)");
    $("#size10").css("color", "black");
    $("#size105").css("background-color", "rgb(255, 255, 255)");
    $("#size105").css("color", "black");
    $("#size11").css("background-color", "rgb(255, 255, 255)");
    $("#size11").css("color", "black");
    $("#size115").css("background-color", "rgb(255, 255, 255)");
    $("#size115").css("color", "black");
    $("#size12").css("background-color", "rgb(255, 255, 255)");
    $("#size12").css("color", "black");
    $("#size125").css("background-color", "rgb(255, 255, 255)");
    $("#size125").css("color", "black");
    $("#size13").css("background-color", "rgb(255, 255, 255)");
    $("#size13").css("color", "black");
    $("#size6").prop("disabled",false);
    $("#size65").prop("disabled",false);
    $("#size7").prop("disabled",false);
    $("#size75").prop("disabled",false);
    $("#size8").prop("disabled",false);
    $("#size85").prop("disabled",false);
    $("#size9").prop("disabled",false);
    $("#size95").prop("disabled",false);
    $("#size10").prop("disabled",false);
    $("#size105").prop("disabled",false);
    $("#size11").prop("disabled",false);
    $("#size115").prop("disabled",false);
    $("#size12").prop("disabled",false);
    $("#size125").prop("disabled",false);
    $("#size13").prop("disabled",false);
    inventoryCheck();
  }
  function changeContent() {
    $(".productName").text(shoes[i].name);
    $(".colorName").text(shoes[i].color);
    $("#shoeImg1").attr("src","./assets/" + shoes[i].img1);
    $("#shoeImg2").attr("src","./assets/" + shoes[i].img2);
    $("#shoeImg3").attr("src","./assets/" + shoes[i].img3);
    $("#shoeImg4").attr("src","./assets/" + shoes[i].img4);
    $("#shoeImg1m").attr("src","./assets/" + shoes[i].img1);
    $("#shoeImg2m").attr("src","./assets/" + shoes[i].img2);
    $("#shoeImg3m").attr("src","./assets/" + shoes[i].img3);
    $("#shoeImg4m").attr("src","./assets/" + shoes[i].img4);
  };
  function clearhighlights() {
      $("#colorImgSelect1").css("background-color", "rgba(80, 80, 80, 0)");
      $("#colorImgSelect2").css("background-color", "rgba(80, 80, 80, 0)");
      $("#colorImgSelect3").css("background-color", "rgba(80, 80, 80, 0)");
      $("#colorImgSelect4").css("background-color", "rgba(80, 80, 80, 0)");
  };
});
var shoes = [{
    id: 1,
    name: 'PHARRELL WILLIAMS SOLARHU NMD SHOES',
    color: 'BLACK / CORE BLACK / RED',
    price: 250,
    size6Inv: 26,
    size65Inv: 18,
    size7Inv: 20,
    size75Inv: 12,
    size8Inv: 30,
    size85Inv: 30,
    size9Inv: 40,
    size95Inv: 9,
    size10Inv: 0,
    size105Inv: 12,
    size11Inv: 20,
    size115Inv: 12,
    size12Inv: 32,
    size125Inv: 43,
    size13Inv: 0,
    img1: 'coreblackred.jpg',
    img2: 'coreblackredbottom.jpg',
    img3: 'coreblackredtop.jpg',
    img4: 'coreblackredfeet.jpg' },
   {
    id: 2,
    name: 'PHARRELL WILLIAMS SOLARHU NMD SHOES',
    color: 'BLACK / BLACK / BLACK',
    price: 250,
    size6Inv: 30,
    size65Inv: 30,
    size7Inv: 40,
    size75Inv: 20,
    size8Inv: 30,
    size85Inv: 20,
    size9Inv: 10,
    size95Inv: 13,
    size10Inv: 12,
    size105Inv: 100,
    size11Inv: 32,
    size115Inv: 0,
    size12Inv: 12,
    size125Inv: 13,
    size13Inv: 120,
    img1: 'pinkblack.jpg',
    img2: 'pinkbottom.jpg',
    img3: 'pinktop.jpg',
    img4: 'pinkfeet.jpg' },
  {
    id: 3,
    name: 'PHARRELL WILLIAMS SOLARHU NMD SHOES',
    color: 'CORE BLACK / BLACK / CORE BLACK',
    price: 250,
    size6Inv: 20,
    size65Inv: 0,
    size7Inv: 0,
    size75Inv: 0,
    size8Inv: 30,
    size85Inv: 50,
    size9Inv: 50,
    size95Inv: 43,
    size10Inv: 33,
    size105Inv: 100,
    size11Inv: 32,
    size115Inv: 57,
    size12Inv: 126,
    size125Inv: 13,
    size13Inv: 120,
    img1: 'coreblack.jpg',
    img2: 'blackbottom.jpg',
    img3: 'blacktop.jpg',
    img4: 'blackfeet.jpg' },
    {
    id: 4,
    name: 'PHARRELL WILLIAMS SOLARHU NMD SHOES',
    color: 'LIGHT PINK / CORE BLACK / BRIGHT BLUE',
    price: 250,
    size6Inv: 0,
    size65Inv: 120,
    size7Inv: 40,
    size75Inv: 30,
    size8Inv: 30,
    size85Inv: 30,
    size9Inv: 50,
    size95Inv: 43,
    size10Inv: 33,
    size105Inv: 100,
    size11Inv: 32,
    size115Inv: 57,
    size12Inv: 126,
    size125Inv: 13,
    size13Inv: 0,
    img1: 'pinkblue.jpg',
    img2: 'pinkbluebottom.jpg',
    img3: 'pinkbluetop.jpg',
    img4: 'pinkbluefeet.jpg' }];
  