const PaymentLocators = {
    NAMEONCARD_IN: "//input[@name='name_on_card']",
    CARDNUMBER_IN: "//input[@name='card_number']",
    CVC_IN: "//input[@name='cvc']",
    EXPMONTH_IN: "//input[@name='expiry_month']",
    EXPYEAR_IN: "//input[@name='expiry_year']",
    PAY_BT: "#submit",
    CONTINUE_BT: "//a[text()='Continue']"
  };
  
  module.exports = PaymentLocators;