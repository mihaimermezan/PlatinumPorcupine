package Handlers

import (
	"awesomeProject/Database/Models"
	"awesomeProject/Utils/Auth"
	"github.com/gin-gonic/gin"
	"net/http"
)

type createAccountRequest struct {
	FirstName string `json:"firstName"`
	LastName  string `json:"lastName"`
	Email     string `json:"email"`
	Password  string `json:"password"`
}

type CreateAccountResponse loginResponse

func (h *AuthHandlers) HandleCreateAccount(ctx *gin.Context) {
	var request createAccountRequest
	err := ctx.Bind(&request)
	if err != nil {
		return
	}
	user, err := h.usersRepo.GetUserByEmail(request.Email)
	if user != nil {
		ctx.String(http.StatusBadRequest, "Email already used")
		return
	}
	user = &Models.User{
		FirstName:      request.FirstName,
		LastName:       request.LastName,
		Email:          request.Email,
		PasswordHash:   Auth.HashPassword(request.Password),
		GoogleUserId:   "",
		FacebookUserId: "",
	}
	err = h.usersRepo.CreateUser(user)
	if err != nil {
		ctx.String(http.StatusBadRequest, "DB error")
		return
	}
	ctx.JSON(http.StatusOK, CreateAccountResponse{
		AccessToken:  Auth.CreateAccessToken(user),
		RefreshToken: "not implemented",
	})
}
