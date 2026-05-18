/**
 * Reusable QuantityButton component for increasing/decreasing quantity
 * Used in both desktop table and mobile view
 */
const QuantityButton = ({ quantity, onDecrease, onIncrease, isMobile = false }) => {
  if (isMobile) {
    return (
      <div className="flex items-center gap-2 rounded-xl border px-2 py-1">
        <button
          onClick={onDecrease}
          className="h-7 w-7 rounded-lg bg-gray-100"
        >
          −
        </button>

        <span className="w-6 text-center text-sm font-semibold">
          {quantity}
        </span>

        <button
          onClick={onIncrease}
          className="h-7 w-7 rounded-lg bg-blue-600 text-white"
        >
          +
        </button>
      </div>
    );
  }

  return (
    <div className="mx-auto flex w-fit items-center gap-2 rounded-xl border px-2 py-1">
      <button
        onClick={onDecrease}
        className="h-7 w-7 rounded-lg bg-gray-100 hover:bg-blue-100"
      >
        −
      </button>

      <span className="w-6 text-center font-semibold">
        {quantity}
      </span>

      <button
        onClick={onIncrease}
        className="h-7 w-7 rounded-lg bg-blue-600 text-white hover:bg-blue-700"
      >
        +
      </button>
    </div>
  );
};

export default QuantityButton;
