import React from 'react';
import './Payment.scss';
import {
  Visa,
  Paypal,
  Mastercard,
  Googlepay,
  Applepay,
  Hsbc,
} from 'react-pay-icons';
import swal from 'sweetalert';

export class PaymentScreen extends React.Component {
  constructor(props) {
    super(props);
    this.showAlert = this.showAlert.bind(this);
    this.price = 0;
  }

  showAlert() {
    swal('Order Successful', 'Hope you enjoy our ride!', 'success');
    this.props.onHide();
    this.props.hideCart();
    this.props.clearCart();
  }
  render() {
    return (
      <div className='payment-wrapper'>
        <div className='container-fluid'>
          <div className='row' style={{ height: 'inherit' }}>
            <div className='col-md-8 bg-light left'>
              <div className='row mt-4'>
                <div className='col-md-4'>
                  <div className='apply-block mb-3'>
                    <h4 className='pt-3'>How would you like to pay?</h4>
                    <Visa
                      className='payIcons'
                      style={{ margin: 10, width: 50 }}
                    />
                    <Paypal
                      className='payIcons'
                      style={{ margin: 10, width: 50 }}
                    />
                    <Mastercard
                      className='payIcons'
                      style={{ margin: 10, width: 50 }}
                    />
                    <Googlepay
                      className='payIcons'
                      style={{ margin: 10, width: 50 }}
                    />
                    <Applepay
                      className='payIcons'
                      style={{ margin: 10, width: 50 }}
                    />
                    <Hsbc
                      className='payIcons'
                      style={{ margin: 10, width: 50 }}
                    />
                  </div>
                </div>
                <div className='col'>
                  <div className='order-summary'>
                    <label style={{ marginTop: '1rem' }}>
                      <b>Order Summary</b>
                    </label>
                    <p>
                      Order reference number:{' '}
                      {Math.floor(Math.random() * 10000)}
                    </p>
                    {this.props.cart.map((element) => {
                      this.price = +element.details.info.price;

                      return (
                        <div
                          className='order-one mt-2'
                          key={element.cartId + Math.random() * 1000 + ''}
                        >
                          from: <b>{element.details.info.departureCity} </b>--
                          to:
                          <b> {element.details.info.arrivalCity}</b>
                          <span style={{ float: 'right' }}>
                            &#8364;{element.details.info.price}
                          </span>
                        </div>
                      );
                    })}

                    <p>
                      <span>Taxes</span>
                      <span style={{ float: 'right' }}>&#8364;4.82</span>
                    </p>
                    <p>
                      <label>
                        <b>Total</b>
                      </label>
                      <label style={{ float: 'right' }}>
                        <b>
                          &#8364; {this.price === 0 ? 0 : this.price + 4.82}
                        </b>
                      </label>
                    </p>
                    <div className='d-grid gap-2'>
                      <button
                        type='button'
                        className='btn btn-success'
                        onClick={this.showAlert}
                      >
                        Continue to secure payment
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className='col bg-light p-0 right'>
              <div
                style={{
                  lineHeight: 4,
                  backgroundColor: 'white',
                  paddingLeft: '20px',
                }}
              ></div>
              <h4 style={{ paddingTop: '30px', paddingLeft: '20px' }}>
                How would you like to pay?
              </h4>
              <div className='form-check'>
                <input
                  className='form-check-input'
                  type='radio'
                  name='flexRadioDefault'
                  id='flexRadioDefault1'
                />
                <label className='form-check-label' htmlFor='flexRadioDefault1'>
                  Paypal
                </label>
                <Paypal className='payIcons' style={{ width: 45 }} />
              </div>
              <div className='form-check mt-2'>
                <input
                  className='form-check-input'
                  type='radio'
                  name='flexRadioDefault'
                  id='flexRadioDefault2'
                />
                <label className='form-check-label' htmlFor='flexRadioDefault2'>
                  Master card
                </label>
                <Mastercard className='payIcons' style={{ width: 45 }} />
              </div>
              <div className='form-check mt-2'>
                <input
                  className='form-check-input'
                  type='radio'
                  name='flexRadioDefault'
                  id='flexRadioDefault2'
                />
                <label className='form-check-label' htmlFor='flexRadioDefault2'>
                  Visa
                </label>
                <Visa className='payIcons' style={{ width: 45 }} />
              </div>
              <div className='form-check mt-2'>
                <input
                  className='form-check-input'
                  type='radio'
                  name='flexRadioDefault'
                  id='flexRadioDefault2'
                />
                <label className='form-check-label' htmlFor='flexRadioDefault2'>
                  Apple pay
                </label>
                <Applepay className='payIcons' style={{ width: 45 }} />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
