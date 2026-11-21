import { QRCode } from "react-qr-code";

function Scanner() {
  let finalAmount = 1;
  return (
    <>
      <h1>Complete the payment of {finalAmount}</h1>
      <QRCode
        value={`upi://pay?pa=8374857351@fam&pn=MRREHAN&am=${finalAmount.toFixed(2)}&cu=INR`}
      />
    </>
  );
}

export default Scanner;
