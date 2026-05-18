const QuantityButton = ({ quantity, onDecrease, onIncrease }) => {
  return (
    <div className="inline-flex items-center rounded-full border border-slate-200 bg-white p-1 shadow-sm">
      <button
        onClick={onDecrease}
        className="grid h-8 w-8 place-items-center rounded-full text-slate-500 transition hover:bg-slate-100 hover:text-slate-950"
      >
        -
      </button>

      <span className="w-8 text-center text-sm font-black text-slate-900">
        {quantity}
      </span>

      <button
        onClick={onIncrease}
        className="grid h-8 w-8 place-items-center rounded-full bg-slate-950 text-white transition hover:bg-blue-600"
      >
        +
      </button>
    </div>
  );
};

export default QuantityButton;
