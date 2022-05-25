/**
 * @name DateView
 * @description Date view mini-component only used for displaying date
 *
 * @param {{date: number; month: string}} param0
 * @returns {JSX.Element}
 */
const DateView = ({date, month}) => (
  <span className='font-bold text-sm flex flex-row justify-start items-end gap-1'>
    <span className='font-extrabold text-2xl'>
      {date < 10 ? `0${date}` : date}
    </span>
    {month}
  </span>
);

export default DateView;
