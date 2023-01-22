

const initialState = {
	posts: [
		{ id: 1, name: 'name', text: 'Lorem ipsum dolor sit amet.', likesCount: 13, ava: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3xbitvBXWXb3Z86QjvGBcdvpBn5KFgrP8-g&usqp=CAU' },
		{ id: 2, name: 'name', text: 'Lorem ipsum dolor sit amet consectetur adipisicing.', likesCount: 10, ava: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3xbitvBXWXb3Z86QjvGBcdvpBn5KFgrP8-g&usqp=CAU' },
		{ id: 3, name: 'name', text: 'Lorem ipsum dolor sit amet consectetur adipisicing. Lorem ipsum dolor sit amet.', likesCount: 4, ava: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3xbitvBXWXb3Z86QjvGBcdvpBn5KFgrP8-g&usqp=CAU' }
	]
}

const profileReducer = (state = initialState, action) => {

}



export { profileReducer };