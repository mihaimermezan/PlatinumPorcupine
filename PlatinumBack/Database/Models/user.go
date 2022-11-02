package Models

import "go.mongodb.org/mongo-driver/bson/primitive"

type User struct {
	Id             primitive.ObjectID `bson:"_id,omitempty" json:"id"`
	FirstName      string             `bson:"firstName" json:"firstName"`
	LastName       string             `bson:"lastName" json:"lastName"`
	Email          string             `bson:"email" json:"email"`
	PasswordHash   string             `bson:"passwordHash" json:"passwordHash"`
	GoogleUserId   string             `bson:"googleUserId" json:"googleUserId"`
	FacebookUserId string             `bson:"facebookUserId" json:"facebookUserId"`
}
