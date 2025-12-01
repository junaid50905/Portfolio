"use client";

import { IconSend } from "@tabler/icons-react";
import "./primary-btn.css";
import Link from "next/link";

export default function PaymentButton({
  text = "Payments",
  color = "#455454",
}) {
  return (
    <Link href={'#'} className="bg-lime-200 ps-2 pe-2 pt-5 pb-3 rounded-full">
      <button className="payment-btn" style={{ "--clr": color }}>
        <span className="payment-decor" />

        <div className="payment-content">
          <div className="payment-icon">
            <IconSend size={22} className="text-white" />
          </div>

          <span className="payment-text">{text}</span>
        </div>
      </button>
    </Link>

  );
}
