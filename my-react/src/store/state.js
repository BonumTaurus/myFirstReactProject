const state = {
	profilePage: {
		posts: [
			{ id: 1, name: 'name', text: 'Lorem ipsum dolor sit amet.', likesCount: 13, ava: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3xbitvBXWXb3Z86QjvGBcdvpBn5KFgrP8-g&usqp=CAU' },
			{ id: 2, name: 'name', text: 'Lorem ipsum dolor sit amet consectetur adipisicing.', likesCount: 10, ava: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3xbitvBXWXb3Z86QjvGBcdvpBn5KFgrP8-g&usqp=CAU' },
			{ id: 3, name: 'name', text: 'Lorem ipsum dolor sit amet consectetur adipisicing. Lorem ipsum dolor sit amet.', likesCount: 4, ava: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3xbitvBXWXb3Z86QjvGBcdvpBn5KFgrP8-g&usqp=CAU' }
		]
	},

	dialogsPage: {
		dialogsFriends: [
			{ id: 1, name: 'Serg', ava: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSye8_F5ZHKn2FQ51IdAmOKH3VaIfKkZLXVEA&usqp=CAU' },
			{ id: 2, name: 'Sasha', ava: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQS0iz08DQb9Vf_tqjqBY5IbU6g3NcdVXQ46Q&usqp=CAU' },
			{ id: 3, name: 'Mike', ava: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfvjMAhRrU3B-F07_fH_VKPz0CD6_B4B5wlA&usqp=CAU' },
			{ id: 4, name: 'Tony', ava: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ51qAVsnMzzC3QHbLaZtPUB5O3mirn5nYRIeXNc3vjI_1WUMX5j42QY3KkQlzxqwT4394&usqp=CAU' },
			{ id: 5, name: 'Olesya', ava: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKlcCP4wZgBAXHYtpsFCcEvKSoMpqY_Nw5Sg&usqp=CAU' }
		],
		dialogsMessages: [
			{ id: 1, message: 'Hi' },
			{ id: 2, message: 'How are you?' },
			{ id: 3, message: 'I created my first react' }
		]
	},

	sidebarPage: {
		myFriends: [
			{ id: 1, name: 'Nikolya', ava: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRteHWeErjcnZpd_zo_KLQUdeKTFxXe-h86GQ&usqp=CAU' },
			{ id: 2, name: 'Lilu', ava: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqhBUqLnxEn_2FhDdd3CE0uAimOiEuVseqZg&usqp=CAU' },
			{ id: 3, name: 'Nikita', ava: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5sVcc8hTXXSR0iL2nn_BQRSan_x5vlVSWLQ&usqp=CAU' },
			{ id: 4, name: 'Misha', ava: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmJ9tnaKCMPL4JNiIh-yVX4rN8lhEQXTkuoQ&usqp=CAU' },
			{ id: 5, name: 'Dasha', ava: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBbsMEFO-izKuFoNmwhh3tZuS-2l1quAPJ_Q&usqp=CAU' },
			{ id: 6, name: 'Ksusha', ava: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkNClHcBngc-qOfx6OQ-rCm6L-xHp-t6R2QA&usqp=CAU' }
		]
	}
}

export { state };