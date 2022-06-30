const DateView = ({date, month}) => (
  <span className="text-textPrimary font-bold text-sm flex flex-row justify-start items-end gap-1">
    <span className="font-extrabold text-2xl">
      {date < 10 ? `0${date}` : date}
    </span>
    {month}
  </span>
);

export default DateView;
