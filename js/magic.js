var selectedImagesArray = []; //儲存使用者的id
var maxSelection = 2; // 最大只能選2張圖

//----------------------------------------------
//圖片選取
function toggleSelectImage(imgId) {
  var imgElement = document.getElementById(imgId); //透過使用者點擊圖片的ID，使用document.getElementById方法取得對應的圖片元素
  console.log("點擊 image ID: " + imgId);

  if (
    selectedImagesArray > maxSelection &&
    !selectedImagesArray.includes(imgId)
  ) {
    alert("只能選擇" + maxSelection + "種材料喔!");
  }
  if (selectedImagesArray.length >= maxSelection) {
    var firstSelectedImageId = selectedImagesArray.shift();
    //給第1張圖一個圖片ID的陣列
    //.shift() 是 JavaScript 陣列的方法中，用於刪除並返回陣列的第一個元素。
    var firstSelectedImageElement =
      document.getElementById(firstSelectedImageId);
    firstSelectedImageElement.style.border = "2px solid #FFF";
  }
  if (selectedImagesArray.includes(imgId)) {
    imgElement.style.border = "2px solid #FFF";
    selectedImagesArray = selectedImagesArray.filter(
      (selectedId) => selectedId !== imgId
    );
  } else {
    imgElement.style.border = "2px solid #d8aa44";
    selectedImagesArray.push(imgId);
  }
}
//-------------------------------------------------
//生成混合結果
function mix() {
  //var selectedImagesArray = [];
  if (
    selectedImagesArray.includes("M2") &&
    selectedImagesArray.includes("M3")
  ) {
    window.location.href = "result.html";
  } else if (
    selectedImagesArray.includes("M4") &&
    selectedImagesArray.includes("M3")
  ) {
    window.location.href = "result2.html";
  } else {
    alert("此配方尚未完成，請選擇其他配方");
    selectedImagesArray.forEach((imgId) => {
      var imgElement = document.getElementById(imgId);
      imgElement.style.border = "2px solid #FFF";
    });
    selectedImagesArray = []; // 清空已選擇的圖片陣列
  }
}
//-------------------------------------------------
/*
function cancelAllSelection() {
  selectedImagesArray.forEach((imgId) => {
    var imgElement = document.getElementById(imgId);
    imgElement.style.border = "2px solid #FFF";
  });
  selectedImagesArray = []; // 清空已選擇的圖片陣列
  console.log("ID" + imgElement);
}
*/
