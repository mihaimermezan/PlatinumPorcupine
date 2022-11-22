package Database

import (
	"go.mongodb.org/mongo-driver/mongo"
	"go.mongodb.org/mongo-driver/mongo/options"
)

func ConnectToDatabase() *mongo.Database {
	//connectionString := os.Getenv("MONGO_CONNECTION_STRING")

	client, _ := mongo.Connect(nil, options.Client().ApplyURI("mongodb://localhost:27017"))

	return client.Database("TitaniumPorcupine")
}
