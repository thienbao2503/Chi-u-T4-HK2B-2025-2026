import "./App.css";

function App() {
  return (
    <div id="templatemo_container">
        
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
  );
}

export default App;
