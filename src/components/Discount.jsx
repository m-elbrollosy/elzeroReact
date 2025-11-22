function Discount () {
    return
    <div class="discount" id="discount">
        {/* start discount  */}
        <div class="img">
            <div class="content">
                <h3>We Have A Discount</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum illum 
                    accusantium unde ex expedita amet non nam accusamus impedit aliquam,
                     dicta ea dolor voluptatem 
                    culpa dolorem, quidem, temporibus aperiam recusandae.
                </p>
                <img src="./imgs/png/discount-5.webp" alt="" loading="lazy">
            </div>
        </div>
        <div class="form">
            <div class="content">
                <h3>Request A Discount</h3>
                <form >
                    <input type="text" placeholder="Enter Your Name" />
                    <input type="email" placeholder="Enter Your E-Mail Adress" />
                    <input type="text" placeholder="Enter Your Phone" />
                    <textarea placeholder="Tell Us About Your Needs"></textarea>
                    <button type="submit"> submit </button>
                </form>
            </div>
        </div>
        {/* end discount  */}
    </div>
}
export default Discount;