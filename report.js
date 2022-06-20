

// 當網頁向下滑動 20px 出现"TOP" 按钮
window.onscroll = function() {scrollFunction()};
 
function scrollFunction() {console.log(121);
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("myBtn").style.display = "block";
    } else {
        document.getElementById("myBtn").style.display = "none";
    }
}
 
// 點擊按鈕，返回頂端
function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}
