import axios from "axios";

const instance = axios.create({
	baseURL: 'https://social-network.samuraijs.com/api/1.0/',
	withCredentials: true
});

export const usersAPI = {
	getUsers(page, countUsersOnPage) {
		return instance.get(`users?page=${page}&count=${countUsersOnPage}`)
	}
}

export const followAPI = {
	followUser(userId) {
		return instance.post(`follow/${userId}`)
	},
	unfollowUser(userId) {
		return instance.delete(`follow/${userId}`)
	}
}

export const authAPI = {
	me() {
		return instance.get(`auth/me`)
	}
}

export const profileAPI = {
	getProfile(id) {
		return instance.get(`profile/${id}`)
	},
	getStatus(id) {
		return instance.get(`profile/status/${id}`)
	},
	updateStatus(status) {
		return instance.put(`profile/status`, { status: status })
	}
}