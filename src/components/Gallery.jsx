function Gallery () {
    return
    <div class="gallery" id="gallery">
         {/* start gallery */}
        <h2 class="main-title">Gallery</h2>
        <div class="container">
        <figure class="c4-izmir c4-image-zoom-in c4-gradient-top-left">
            <img src="./imgs/portfolio7.webp" alt="" loading="lazy" />
            <figcaption></figcaption>
        </figure>
        <figure class="c4-izmir c4-image-pan-down c4-gradient-top">
            <img src="imgs/portfolio8.webp" alt="" />
        </figure>
        <figure class="c4-izmir c4-image-rotate-left c4-gradient-left">
            <img src="./imgs/Techcover.webp" alt="" loading="lazy" />
        </figure>
        <figure class="c4-izmir c4-image-rotate-right c4-gradient-top-left">
            <img src="imgs/moon-surface-big-planet-background.webp" alt="" />
        </figure>
        <figure class="c4-izmir c4-image-pan-up c4-gradient-bottom-left"> 
            <img src="./imgs/pyramids.webp" alt="" loading="lazy" />
        </figure>
        <figure class="c4-izmir c4-image-pan-left c4-gradient-bottom-right">
            <img src="imgs/owl2.webp" alt="" />
        </figure>
        </div>
        {/ *end gallery */}
      </div>
}
export default Gallery;