let target = document.getElementById('element');
let button = document.getElementById('button-comment');
let listElement = document.querySelector('#sidebar-right-bottom');
let sidebarTop = document.querySelector('#sidebar-right-top');

window.onload = function () {
    loadMore();
}

listElement.addEventListener("scroll", function () {
    if (listElement.scrollTop + listElement.clientHeight >= listElement.scrollHeight) {
        loadMore();
    }
});

button.addEventListener("click", function () {
    let input = document.getElementById('comment');
    input = input.value;
    createComment(input);
});

function loadMore() {
    let element = "",
        start = 0,
        limit = 3;
    for (let index = start; index < limit; index++) {
        element += `<div class="comment-bubble animate-show">
                    <div class="speech-bubble-right aqua">
                        <div class="name-user-comment">Down Johnson</div>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Id
                        voluptatem quia
                        odio quasi eligendi a, rerum reprehenderit quibusdam quis quam, repellat officiis delectus esse
                        fugit culpa neque rem sint cumque.
                        <img src="https://d28j15pnfa5oxx.cloudfront.net/front_img/default_profile.png"
                            alt="profile-comment">
                    </div>
                </div>
                <div class="comment-bubble animate-show">
                <div class="speech-bubble-left aqua">
                    <div class="name-user-comment">Hasan</div>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Id
                    voluptatem quia
                    odio quasi eligendi a, rerum reprehenderit quibusdam quis quam, repellat officiis delectus esse
                    fugit culpa neque rem sint cumque.
                    <img src="https://d28j15pnfa5oxx.cloudfront.net/front_img/default_profile.png"
                        alt="profile-comment">
                </div>
                </div>`;
    }
    setTimeout(() => {
        listElement.innerHTML += element;
    }, 500);
}

function createComment(comment) {
    let bubbleComment = "",
        elm = "";
    elm = document.createElement("div");
    elm.className += "comment-bubble cloud-1";
    bubbleComment = `<div class="speech-bubble-left olive">
                        <div class="name-user-comment">username</div>
                                ${comment}
                            <img src="https://d28j15pnfa5oxx.cloudfront.net/front_img/default_profile.png"
                            alt="profile-comment">
                    </div>`;

    elm.innerHTML = bubbleComment;
    sidebarTop.append(elm);
}