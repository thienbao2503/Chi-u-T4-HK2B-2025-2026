import "./App.css";

function App() {
  return (
    <div id="templatemo_container">
      <div id="templatemo_top_panel">
        <div id="templatemo_language_section">
          <a href="#"><img src="images/templatemo_flag_01.gif" alt="flag 1" /></a>
          <a href="#"><img src="images/templatemo_flag_02.gif" alt="flag 2" /></a>
          <a href="#"><img src="images/templatemo_flag_03.gif" alt="flag 3" /></a>
          <a href="#"><img src="images/templatemo_flag_04.gif" alt="flag 4" /></a>
          <a href="#"><img src="images/templatemo_flag_05.gif" alt="flag 5" /></a>
        </div>
        <div id="templatemo_shopping_cart">
          Shopping Cart <span>(<a href="#">3 items</a>)</span>
        </div>

        {/* footer */}
        <div id="templatemo_footer_panel">
          <div id="footer_left">
            <img src="images/mastercard.gif" alt="Master Card" />
            <img src="images/visa.gif" alt="Visa Card" />
            <img src="images/paypal.gif" alt="PayPal" />
            <img src="images/verisignsecured.gif" alt="Verisign Secured" />
          </div>
          <div id="footer_right">
            Copyright © 2024 <a href="#">Your Company Name</a>
            <br />
            <a href="http://www.iwebsitetemplate.com" target="_parent">
              Website Templates
            </a>{" "}
            by
            <a href="http://www.templatemo.com" target="_blank">
              Free CSS Templates
            </a>
          </div>

          <div className="cleaner">&nbsp;</div>
        </div>
      </div>
    </div>
  );
}

export default App;
