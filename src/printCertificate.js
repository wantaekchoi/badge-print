import React from "react";

export default class PrintCertificate extends React.PureComponent {
  render() {
    const { name, image, issuer, recipient, issueDate, chain, txId, hash } = this.props.badge;

    return (
      <div className="certificate">
        <div className="badgeName">
          <h2>{name}</h2>
        </div>
        <div className="issuerUrl">{issuer.url}</div>
        <div className="badgeImage">
          <img src={image} alt={name} />
        </div>
        <div className="recipientInfo">
          <div className="recipientName">Recipient: {recipient.name}</div>
          <div className="recipientEmail">{recipient.email}</div>
        </div>
        <div className="issuerInfo">
          <div className="issuerName">Issuer: {issuer.name}</div>
        </div>
        <div className="badgeInfo">
          <div className="issueDate">Issued on: {issueDate}</div>
          <div className="chain">Chain: {chain}</div>
          <div className="transactionId">Tx ID: {txId}</div>
          <div className="transactionId">Hash: {hash}</div>
        </div>
      </div>
    );
  }
}
