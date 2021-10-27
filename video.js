import { cardVideo } from "./media.js";

export const renderVideo = function getVideo() {
    const cartItem = document.getElementById('video');
    for (var i = 0; i < cardVideo.length; i++) {
        cartItem.insertAdjacentHTML("beforeend", '<div class="product-item"><video width = "300" height = "200" controls = "controls" poster = ""><source src =" ' + cardVideo[i].url + '" type = "video/mp4; codecs="avc1.42E01E, mp4a.40.2""></video><h3><div class = "desc">' + cardVideo[i].name + '</h3></div></div>');
    };
}