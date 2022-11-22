package Handlers

import (
	"awesomeProject/Utils/Auth"
	"github.com/gin-gonic/gin"
	"net/http"
)

type loginRequest struct {
	Email    string `json:"email"`
	Password string `json:"password"`
}

type loginResponse struct {
	AccessToken  string `json:"accessToken"`
	RefreshToken string `json:"refreshToken"`
}

func (h *AuthHandlers) HandleLogin(ctx *gin.Context) {
	var request loginRequest
	err := ctx.Bind(&request)
	if err != nil {
		return
	}
	user, err := h.usersRepo.GetUserByEmail(request.Email)
	if err != nil {
		ctx.Status(http.StatusBadRequest)
		return
	}
	if user.PasswordHash != Auth.HashPassword(request.Password) {
		ctx.Status(http.StatusBadRequest)
		return
	}
	ctx.JSON(http.StatusOK, loginResponse{
		AccessToken:  Auth.CreateAccessToken(user),
		RefreshToken: "not implemented",
	})
}
