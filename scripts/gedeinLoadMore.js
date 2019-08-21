let button = document.querySelector('#button-comment');
let sidebarBottom = document.querySelector('#sidebar-right-bottom');
let sidebarTop = document.querySelector('#sidebar-right-top');

/** for onload */
window.onload = function () {
    loadMore();
}

/** for infinite comments */
sidebarBottom.addEventListener("scroll", function () {
    if (sidebarBottom.scrollTop + sidebarBottom.clientHeight >= sidebarBottom.scrollHeight) {
        loadMore();
    }
});

/** for comments */
button.addEventListener("click", function () {
    let comment = document.getElementById('comment');
    let cloudNum = Math.floor(Math.random() * 4) + 1;
    let cloudPos = Math.floor(Math.random() * 2) + 1;
    let cloudColor = Math.floor(Math.random() * 3) + 1;
    comment = comment.value;
    createComment(comment, cloudNum, cloudPos, cloudColor);
});

function createComment(comment, cloudNum, cloudPos, cloudColor) {
    let bubbleComment = "", elm = "", userRandom = "";
    elm = document.createElement("div");
    elm.className += "comment-bubble cloud-" + cloudNum;
    
    /** cloud position */
    if (cloudPos == 1) {
        cloudPos = "right";
    } else {
        cloudPos = "left";
    }

    /** cloud position */
    if (cloudColor == 1) {
        cloudColor = "coral";
        userRandom = "username 1";
    } else if (cloudColor == 2) {
        cloudColor = "olive";
        userRandom = "username 2";
    } else {
        cloudColor = "aqua";
        userRandom = "username 3";
    }

    bubbleComment = `<div class="speech-bubble-${cloudPos} ${cloudColor}">
                        <div class="name-user-comment">${userRandom}</div>
                                ${comment}
                            <img src="https://d28j15pnfa5oxx.cloudfront.net/front_img/default_profile.png"
                            alt="profile-comment">
                    </div>`;

    elm.innerHTML = bubbleComment;
    sidebarTop.append(elm);
}

function loadMore() {
    let element = "", start = 0, limit = 3;

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
        sidebarBottom.innerHTML += element;
    }, 500);
}

/** temporary
    function randomComment() {
        let cloudNum = Math.floor(Math.random() * 4) + 1;
        let cloudPos = Math.floor(Math.random() * 2) + 1;
        let cloudColor = Math.floor(Math.random() * 3) + 1;
    } 
 */