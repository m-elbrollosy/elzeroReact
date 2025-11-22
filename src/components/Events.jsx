function Events () {
    return
    <div class="events" id="events">
        {/* start events */}
        <h3 class="main-title">latest events</h3>
        <div class="container">
            <img src="./imgs/png/home-1.webp" alt="" loading="lazy" />
            <div class="info">
                <div class="time">
                    <div class="unit">
                        <span>15</span>
                        <span>days</span>
                    </div>
                    <div class="unit">
                        <span>08</span>
                        <span>hours</span>
                    </div>
                    <div class="unit">
                        <span>45</span>
                        <span>minutes</span>
                    </div>
                    <div class="unit">
                        <span>55</span>
                        <span>seconds</span>
                    </div>
                </div>
                <h2>Lorem ipsum dolor sit consectetur elit.</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                     Officiis ea beatae accusamus praesentium optio expedita reprehenderit ipsa molestias,
                      quasi tenetur distinctio natus nulla provident.
                     In tenetur velit natus magnam nihil.</p>
            </div>
            <form>
                <input type="email" placeholder="Enter Your E-Mail Adress" />
                <button type="submit">Subscribe</button>
            </form>
        </div>
        {/* end events */}
    </div>
}
export default Events;