function Header () {
return
     <div id="header" class="header">
         {/* start heading */}
        <div class="container">
            <a href="#"><img class="logo" alt="#" src="./imgs/png/iconn.webp" /></a>
            <i class="fa-solid fa-bars"></i>
            <ul class="main-nav">
                <li><a href="#articles">articles</a></li>
                <li><a href="#gallery">gallery</a></li>
                <li><a href="#features">features</a></li>
                <li><a id="other-links" href="#">other links</a></li>
                <li><a href="#"><i id="ch-mode" class="fa-solid fa-moon"></i></a></li>
                <div class="mega-menu">
                    <div class="img"><img src="imgs/png/green-tea-leaf-culture-green.webp" alt="photo" /></div>
                    <div class="links">
                        <ul>
                            <li><a href="#testimonials"><i class="fa-regular fa-lg fa-moon fa-flip"></i> testimonials</a></li>
                            <li><a href="#pricing"><i class="fa-regular fa-lg fa-sun fa-spin"></i>pricing plans </a></li>
                            <li><a href="#team"><i class="fa-regular fa-lg fa-comments fa-flip"></i> Team members</a></li>
                            <li><a href="#events"><i class="fa-regular fa-lg fa-star fa-spin"></i> events</a></li>
                            <li><a href="#services"><i class="fa-regular fa-lg fa-clipboard fa-flip"></i> Services</a></li>
                        </ul>
                        <ul>
                            <li><a href="#work"><i class="fa-solid fa-lg fa-cog fa-spin fa-spin-reverse"></i> how it works</a></li>
                            <li><a href="#videos"><i class="fa-solid fa-lg fa-video fa-flip"></i> Top Videos</a></li>
                            <li><a href="#skills"><i class="fa-solid fa-lg fa-earth-americas fa-spin fa-spin-reverse"></i> our skills</a></li>
                            <li><a href="#stats"><i class="fa-solid fa-lg fa-cloud-arrow-up fa-flip"></i> Statistics</a></li>
                            <li><a href="#discount"><i class="fa-regular fa-lg fa-snowflake fa-spin fa-spin-reverse"></i> Request a discount</a></li>
                        </ul>
                    </div>
                </div>
            </ul>
        </div>
    {/* end header */}
     </div>
}
export default Header;