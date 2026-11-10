"use client";

export default function PrintButton() {
  return <button className="print-button" type="button" onClick={() => window.print()}>Print / Save PDF</button>;
}
