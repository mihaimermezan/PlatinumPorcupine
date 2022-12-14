package Auth

import (
	"crypto/sha256"
	"fmt"
)

func HashPassword(password string) string {
	return fmt.Sprintf("%x", sha256.Sum256([]byte(password)))
}
