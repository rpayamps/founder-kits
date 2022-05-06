class ReviewsController < ApplicationController
    def index
        reviews = Reveiw.all
        render json: reviews, status: :ok 
    end 

    def show
        review = Review.find(params[:id])
        render json: review, status: :ok
    rescue ActiveRecord::RecordNotFound
        render json: { error: "Artist not found" }, status: :not_found
    end 

    def create
        review = review.create!(product_description: params[:product_description], product_id: product_id.id)
        render json: review, status: :created
    end 

    def update
    end 

end
