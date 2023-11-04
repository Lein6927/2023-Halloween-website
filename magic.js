var selectedImagesArray = []; //儲存使用者的id

function toggleSelectImage(imgId) {
  var imgElement = document.getElementById(imgId); //透過使用者點擊圖片的ID，使用document.getElementById方法取得對應的圖片元素
  console.log("點擊 image ID: " + imgId);
  /*
  if (selectedImagesArray.length >= 2) {
    alert("只能選擇兩個物件喔");
    return;
  } //檢查已選擇的圖像數量是否大於等於2。如果是，就彈出警告，表示使用者只能選擇兩個物件
*/
  if (selectedImagesArray.includes(imgId)) {
    imgElement.style.border = "2px solid #FFF";
    selectedImagesArray = selectedImagesArray.filter(
      (selectedId) => selectedId !== imgId
    );
    selectionStatus[imgId] = "unselected";
  } else {
    imgElement.style.border = "2px solid #d8aa44";
    //選擇圖片會有外框
    selectedImagesArray.push(imgId);
    selectionStatus[imgId] = "selected";
  }
}
function mix() {
  if (selectedImagesArray.length !== 2) {
    alert("請選擇2種材料喔");
    return;
  }

  if (
    selectedImagesArray.includes("M2") &&
    selectedImagesArray.includes("M3")
  ) {
    window.location.href = "result.html";
  }
  if (
    selectedImagesArray.includes("M4") &&
    selectedImagesArray.includes("M3")
  ) {
    window.location.href = "result2.html";
  }
}
