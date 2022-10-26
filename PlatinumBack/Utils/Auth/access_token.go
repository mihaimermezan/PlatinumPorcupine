package Auth

import (
	"awesomeProject/Database/Models"
	"github.com/golang-jwt/jwt"
	"go.mongodb.org/mongo-driver/bson/primitive"
	"time"
)

type accessTokenClaims struct {
	UserId primitive.ObjectID `json:"userId"`
	jwt.StandardClaims
}

func CreateAccessToken(user *Models.User) string {
	now := time.Now()

	claims := accessTokenClaims{
		user.Id,
		jwt.StandardClaims{
			Issuer:    "TitaniumPorcupine",
			IssuedAt:  now.Unix(),
			NotBefore: now.Unix(),
			ExpiresAt: now.Add(time.Hour * 48).Unix(),
		},
	}
	signingKey := []byte("ThisIsMySigningKey :)")
	signedToken, _ := jwt.NewWithClaims(jwt.SigningMethodHS256, claims).SignedString(signingKey)

	return signedToken
}
