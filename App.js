/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import {
	Body,
	Container,
	Content,
	Form,
	Header,
	Left,
	Right,
	Subtitle,
	Text,
	Title,
	View
} from 'native-base';
import React, { useEffect } from 'react';
import PasswordInput from './components/PasswordInput';
import usePasswordInput from './hooks/usePasswordInput';

const App = () => {
	return (
		<Container>
			<Header noShadow hasSubtitle>
				<Left style={{ flex: 1 }} />
				<Body style={{ flex: 3, justifyContent: 'center' }}>
					<Title span style={{ alignSelf: 'center' }}>
						Input Password
					</Title>
					<Subtitle style={{ alignSelf: 'center' }}>with Hooks and zxcvbn Library</Subtitle>
				</Body>
				<Right style={{ flex: 1 }} />
			</Header>
			<Content>
				<View style={{ padding: 20 }}>
					<Text style={{ textAlign: 'center', fontSize: 30 }}>Password Strength Meter</Text>
				</View>
				<Form style={{ padding: 20 }}>
					<PasswordInput />
				</Form>
			</Content>
		</Container>
	);
};

export default App;
