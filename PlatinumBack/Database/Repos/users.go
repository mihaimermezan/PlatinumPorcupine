package Repos

import (
	"awesomeProject/Database/Models"
	"go.mongodb.org/mongo-driver/bson"
	"go.mongodb.org/mongo-driver/bson/primitive"
	"go.mongodb.org/mongo-driver/mongo"
)

type UsersRepo struct {
	collection *mongo.Collection
}

func NewUserRepo(database *mongo.Database) *UsersRepo {
	return &UsersRepo{
		collection: database.Collection("Users"),
	}
}

func (repo *UsersRepo) GetUserById(id string) (*Models.User, error) {
	filter := bson.M{
		"_id": id,
	}
	var user *Models.User
	err := repo.collection.FindOne(nil, filter).Decode(&user)
	return user, err
}

func (repo *UsersRepo) GetUserByEmail(email string) (*Models.User, error) {
	filter := bson.M{
		"email": email,
	}
	var user *Models.User
	err := repo.collection.FindOne(nil, filter).Decode(&user)
	return user, err
}

func (repo *UsersRepo) CreateUser(user *Models.User) error {
	insertOneResult, err := repo.collection.InsertOne(nil, user)
	if err != nil {
		return err
	}
	user.Id = insertOneResult.InsertedID.(primitive.ObjectID)
	return nil
}
