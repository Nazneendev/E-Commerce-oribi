import React, { useState } from "react";

export default function QuantitySelector() {
  const [quantity, setQuantity] = useState(1);

  const decrease = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const increase = () => {
    setQuantity(quantity + 1);
  };

  return (
    <div className="flex items-center border-[#F5F5F3] border-1 rounded-md w-[120px] justify-between px-3 py-2">
      <button
        onClick={decrease}
        className="text-textC text-xl font-bold hover:text-black"
      >
        -
      </button>
      <span className="text-lg">{quantity}</span>
      <button
        onClick={increase}
        className="text-textC text-xl font-bold hover:text-black"
      >
        +
      </button>
    </div>
  );
}
