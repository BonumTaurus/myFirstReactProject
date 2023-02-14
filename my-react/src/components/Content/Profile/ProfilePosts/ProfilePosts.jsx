import style from './ProfilePosts.module.css'
import Post from './Post/Post';
import { ProfilePostsReduxForm } from './ProfilePostsReduxForm';
import { reset } from 'redux-form';
import { useState } from 'react';
import { useEffect } from 'react';
import { SelectSort } from './SelectSort/SelectSort';

const ProfilePosts = (props) => {

	let myPosts = props.posts.map((p, index) => <Post key={p.id} postId={p.id} number={index + 1} ava={p.ava} name={p.name} text={p.text}
		likes={p.likesCount} deletePost={props.deletePost} />);


	const onSubmit = (values, dispatch) => {
		props.addPost(values.postText);
		dispatch(reset('post'))
	}

	return (
		<>
			<ProfilePostsReduxForm onSubmit={onSubmit} />
			<SelectSort posts={props.posts} selectSort={props.selectSort} />
			{myPosts}
		</>
	)
}

export { ProfilePosts };