window.onload = function () {
    favouriteComment();
}

function favouriteComment() {
    console.log("print element");
    let element = "",
        sidebarRightBottom = document.getElementById('sidebar-right-bottom');
    for (let index = 0; index < 5; index++) {
        element += `<div class="comment-bubble animate-show">
                    <div class="speech-bubble-right aqua">
                        <div class="name-user-comment ${index}">Zulkifli</div>
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
                        <div class="name-user-comment ${index}">Hasan</div>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Id
                        voluptatem quia
                        odio quasi eligendi a, rerum reprehenderit quibusdam quis quam, repellat officiis delectus esse
                        fugit culpa neque rem sint cumque.
                        <img src="https://d28j15pnfa5oxx.cloudfront.net/front_img/default_profile.png"
                            alt="profile-comment">
                    </div>
                </div>`;
    }
    sidebarRightBottom.innerHTML = element;
}