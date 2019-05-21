import { useState, useEffect } from 'react';
import zxcvbn from 'zxcvbn';

const usePasswordInput = () => {
	const [value, setValue] = useState({});

	handleOnChangeValue = fieldName => text => {
		console.log(fieldName, text);
		const { score } = zxcvbn(text);
		setValue({ ...value, [fieldName]: { text: text, strength: score } });
	};

	return { value, handleOnChangeValue };
};

export default usePasswordInput;
