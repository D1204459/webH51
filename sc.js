/*// 線上訂票按鈕的點擊事件處理
document.getElementById('notButton1').addEventListener('click', function() {
    // 彈出彈跳視窗，顯示系統維護中的訊息
    alert('此票已售完請更換電影');
});// 線上訂票按鈕的點擊事件處理
document.getElementById('notButton2').addEventListener('click', function() {
    // 彈出彈跳視窗，顯示系統維護中的訊息
    alert('此票已售完請更換電影');
});// 線上訂票按鈕的點擊事件處理
document.getElementById('notButton3').addEventListener('click', function() {
    // 彈出彈跳視窗，顯示系統維護中的訊息
    alert('系統維護中請稍後再試');
});
// 線上訂票按鈕的點擊事件處理
document.getElementById('notButton4').addEventListener('click', function() {
    // 彈出彈跳視窗，顯示系統維護中的訊息
    alert('系統維護中請稍後再試');
});*/

// 定義彈跳視窗關閉函數
function closeModal(modalId) {
    var modal = document.getElementById(modalId);
    modal.style.display = 'none';
}
// 用類名選擇所有的彈跳視窗關閉按鈕，並為它們添加點擊事件監聽器
var closeButtons = document.querySelectorAll('.closeButton');
closeButtons.forEach(function(button) {
    button.addEventListener('click', function() {
        var modalId = this.parentNode.parentNode.id;
        closeModal(modalId);
    });
});

// 線上訂票按鈕的點擊事件處理
document.getElementById('notButton1').addEventListener('click', function() {
    // 彈出彈跳視窗，顯示系統維護中的訊息
    var modal = document.getElementById('myModal1');
    modal.style.display = 'block';
});

// 線上訂票按鈕的點擊事件處理
document.getElementById('notButton2').addEventListener('click', function() {
    // 彈出彈跳視窗，顯示系統維護中的訊息
    var modal = document.getElementById('myModal2');
    modal.style.display = 'block';
});


// 線上訂票按鈕的點擊事件處理
document.getElementById('notButton3').addEventListener('click', function() {
    // 彈出彈跳視窗，顯示系統維護中的訊息
    var modal = document.getElementById('myModal3');
    modal.style.display = 'block';
});



// 線上訂票按鈕的點擊事件處理
document.getElementById('notButton4').addEventListener('click', function() {
    // 彈出彈跳視窗，顯示系統維護中的訊息
    var modal = document.getElementById('myModal4');
    modal.style.display = 'block';
});
