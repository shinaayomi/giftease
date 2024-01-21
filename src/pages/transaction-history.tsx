import HeadShare from "@/components/HeadShare";
import TransactionHistory from "@/layouts/TransactionHistory";
import React from "react";

export default function transactionhistory() {
  return (
    <div>
      <HeadShare title="Transaction History" />
      <TransactionHistory />
    </div>
  );
}
