package Handlers

import "awesomeProject/Database/Repos"

type AuthHandlers struct {
	usersRepo *Repos.UsersRepo
}

func NewAuthHandlers(usersRepo *Repos.UsersRepo) *AuthHandlers {
	return &AuthHandlers{
		usersRepo: usersRepo,
	}
}
