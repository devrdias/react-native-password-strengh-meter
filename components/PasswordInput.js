import { Input, Item, Label, Text, View } from 'native-base';
import React from 'react';
import usePasswordInput from '../hooks/usePasswordInput';

const PasswordInput = () => {
	const {
		value: { password = {} },
		handleOnChangeValue
	} = usePasswordInput();

	renderPasswordLabel = result => {
		let label;
		switch (result) {
			case 0:
				label = 'Weak';
				break;
			case 1:
				label = 'Weak';
				break;
			case 2:
				label = 'Fair';
				break;
			case 3:
				label = 'Good';
				break;
			case 4:
				label = 'Strong';
				break;
			default:
				label = 'Weak';
				break;
		}

		return (
			<Text style={{ textAlign: 'center', fontWeight: 'bold', paddingTop: 20, fontSize: 20 }}>
				Password strength: {label}
			</Text>
		);
	};

	renderProgressBar = progress => {
		let color;
		let flexSize = 0;
		switch (progress) {
			case 0:
				color = '#F25F5C'; // Weak
				flexSize = 0.25;
				break;
			case 1:
				color = '#F25F5C'; // Weak
				flexSize = 0.25;
				break;
			case 2:
				color = '#FFE066'; // Fair
				flexSize = 0.5;
				break;
			case 3:
				color = '#247BA0'; // good
				flexSize = 0.75;
				break;
			case 4:
				color = '#70C1B3'; // Strong
				flexSize = 1;
				break;
			default:
				color = '#F25F5C'; // Weak
				flexSize = 0.25;
				break;
		}

		return (
			<View
				style={{
					flex: 1,
					flexDirection: 'row',
					borderRadius: 20,
					backgroundColor: 'grey',
					height: 10
				}}
			>
				<View style={{ flex: flexSize, backgroundColor: color }} />
			</View>
		);
	};

	return (
		<View
			style={{
				flex: 1,
				flexDirection: 'column',
				justifyContent: 'space-between'
			}}
		>
			<Item floatingLabel style={{ padding: 10 }}>
				<Label style={{ paddingTop: 2 }}>Password</Label>
				<Input
					secureTextEntry={true}
					value={password.text || ''}
					onChangeText={handleOnChangeValue('password')}
				/>
			</Item>

			{renderProgressBar(password.strength)}
			{renderPasswordLabel(password.strength)}
		</View>
	);
};

export default PasswordInput;
