package main

import (
	"encoding/json"
	"log"
	"net/http"

	"github.com/gorilla/mux"
)

type Movie struct {
	Id    int
	Title string
	Year  int `json:"released"`
	Color int `json:"color,omitempty"`
	Price int
}

func main() {
	r := mux.NewRouter()
	r.HandleFunc("/", ExampleHandler).Methods("GET")

	log.Println("Starting server on :8080")
	if err := http.ListenAndServe(":8080", r); err != nil {
		log.Fatalf("Could not start server: %s\n", err.Error())
	}
}

func enableCors(w http.ResponseWriter) {
	w.Header().Set("Access-Control-Allow-Origin", "*")
}

func ExampleHandler(w http.ResponseWriter, r *http.Request) {
	log.Println("server is get data")

	var movies = []Movie{
		{
			Id:    0,
			Title: "Nike Air Max Dn Men's Shoes",
			Price: 170,
			Year:  2024,
			Color: 13,
		},
		{
			Id:    1,
			Title: "Nike Air VaporMax Flyknit Electric",
			Price: 220,
			Year:  2024,
			Color: 14,
		},
		{
			Id:    2,
			Title: "Nike Air VaporMax Moc Roam Electric",
			Price: 230,
			Year:  2024,
			Color: 4,
		},
		{
			Id:    3,
			Title: "Air Jordan XXXIX \"Lumier\" ",
			Price: 200,
			Year:  2024,
			Color: 2,
		},
		{
			Id:    4,
			Title: "Nike G.T. Cut 3 Electric",
			Price: 190,
			Year:  2024,
			Color: 9,
		},
		{
			Id:    5,
			Title: "Nike G.T. Jump 2 Electric",
			Price: 180,
			Year:  2024,
			Color: 6,
		},
		{
			Id:    6,
			Title: "Nike SB Zoom Janoski OG+ Electric",
			Price: 105,
			Year:  2024,
			Color: 8,
		},
		{
			Id:    7,
			Title: "Nike G.T. Jump 2 Electric",
			Price: 180,
			Year:  2024,
			Color: 6,
		},
		{
			Id:    8,
			Title: "Nike G.T. Jump 2 Electric",
			Price: 180,
			Year:  2024,
			Color: 6,
		},
		{
			Id:    9,
			Title: "Nike G.T. Jump 2 Electric",
			Price: 180,
			Year:  2024,
			Color: 6,
		},
	}

	js, err := json.Marshal(movies)
	if err != nil {
		http.Error(w, err.Error(), http.StatusInternalServerError)
		return
	}

	enableCors(w)
	w.Header().Set("Content-Type", "application/json")
	w.Write(js)
}
