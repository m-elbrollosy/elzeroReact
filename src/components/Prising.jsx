function Pricing () {
    return
    <div class="pricing" id="pricing">
        {/*start pricing */}
        <h2 class="main-title">Pricing</h2>
        <div class="container">
            <div class="box basic">
                <h3>basic</h3>
                <i class="fa-solid fa-truck-fast fa-3x"></i>
                <div class="price">
                    <span class="amount">$ 10</span>
                    <span class="time">per month</span>
                </div>
                <ul>
                    <li>10 GB SPACE</li>
                    <li>5 E-Mail Adresses</li>
                    <li>5 SubDomains</li>
                    <li>4 Databases</li>
                    <li>Basic Support</li>
                </ul>
                <a href="#"> choose a plane</a>
            </div>
            <div class="box popular">
                <div class="label">Most Popular</div>
                <h3>advanced</h3>
                <i class="fa-brands fa-shopify fa-3x"></i>
                <div class="price">
                    <span class="amount">$ 20</span>
                    <span class="time">per month</span>
                </div>
                <ul>
                    <li>20 GB SPACE</li>
                    <li>10 E-Mail Adresses</li>
                    <li>5 SubDomains</li>
                    <li>8 Databases</li>
                    <li>Advanced Support</li>
                </ul>
                <a href="#"> choose a plane</a>
            </div>
            <div class="box Professional">
                <h3>Professional</h3>
                <i class="fa-solid fa-hand-holding-heart fa-3x"></i>
                <div class="price">
                    <span class="amount">$ 50</span>
                    <span class="time">per month</span>
                </div>
                <ul>
                    <li>50 GB SPACE</li>
                    <li>20 E-Mail Adresses</li>
                    <li>10 SubDomains</li>
                    <li>20 Databases</li>
                    <li>Professional advanced</li>
                </ul>
                <a href="#"> choose a plane</a>
            </div>
        </div>
        {/*end pricing */}
    </div>
}
export default Pricing;