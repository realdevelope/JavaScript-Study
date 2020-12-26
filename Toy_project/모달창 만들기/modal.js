//모달창 만들기 : alert 와 비슷하게 메세지 박스와 같은 형태의 UI를 의미한다
                //alert와 차이점은 해당 메세지박스 외엔 어둡게 처리되고 직관적이다

const open = document.getElementById("open");
const close = document.getElementById("close");
const modal = document.querySelector(".modal-wrapper"); //id가 아닌 class로 찾을떈 .을 붙이고 클래스명!!!!

open.onclick = () =>{
    modal.style.display = "flex";
}

close.onclick =() =>{
    modal.style.display = "none";
}