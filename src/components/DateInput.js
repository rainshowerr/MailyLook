import { useContext } from 'react';
import { DateContext } from '../App';

const DateInput = ({ setDate }) => {
	const date = useContext(DateContext);
	return (
		<input
			className="DateInput"
			type="date"
			value={date}
			onChange={(e) => {
				setDate(e.target.value);
			}}
		/>
	);
};

export default DateInput;
