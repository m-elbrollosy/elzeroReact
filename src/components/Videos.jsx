function Videos () {
    return
    <div class="videos" id="videos">
        {/*start Videos*/}
        <h3 class="main-title">Top Videos</h3>
        <div class="container">
            <div class="lists">
                <div class="head">top videos <i class="fa-solid fa-shuffle"></i></div>
                <ul>
                    <li>Lorem ipsum dolor sit amet <span>03:06</span></li>
                    <li>Lorem ipsum dolor sit amet <span>01:35</span></li>
                    <li>Lorem ipsum dolor sit amet <span>02:45</span></li>
                    <li>Lorem ipsum dolor sit amet <span>07:05</span></li>
                    <li>Lorem ipsum dolor sit amet <span>05:55</span></li>
                </ul>
            </div>
            <div class="preview">
                <div class="video-holder">
                    <img src="./imgs/tab-Halloween-Desktop-Background-2.webp" alt="video" loading="lazy" />
                    <i class="fa-solid fa-circle-play"></i>
                </div>
                <p>Lorem ipsum dolor sit amet </p>
            </div>
        </div>
        {/*end Videos*/}
    </div>

}
export default Videos;