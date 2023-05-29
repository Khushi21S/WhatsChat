import React from 'react';
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
import '../Style/Payment.css'

function Payment() {
    return (
            <div className="App-body">
              <h1>Send money</h1>
              <p>
                <span className="book-price">$13.99</span>
              </p>
              <PayPalScriptProvider>
                <PayPalButtons
                  createOrder={(data, actions) => {
                    return actions.order.create({
                      purchase_units: [
                        {
                          amount: {
                            value: "20",
                          },
                        },
                      ],
                    });
                  }}
                  onApprove={async (data, actions) => {
                    const details = await actions.order.capture();
                    const name = details.payer.name.given_name;
                    alert("Transaction completed by " + name);
                  }}
                />
              </PayPalScriptProvider>
            </div>
          );
}

export default Payment;