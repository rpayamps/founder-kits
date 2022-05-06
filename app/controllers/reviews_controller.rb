class ReviewsController < ApplicationController

    def index
        reviews = Review.all
        render json: reviews, status: :ok 
    end 

    def show
        review = Review.find(params[:id])
        render json: review, status: :ok
    rescue ActiveRecord::RecordNotFound
        render json: { error: "Review not found" }, status: :not_found
    end 

    def create
        review = Review.create!(product_description: params[:product_description], product_id: product_id.id)
        render json: review, status: :created
    end 

    def update
        review = Review.find_by(id: params[:id])
        if review 
            review.update(review_params)
            render json: review
        else
            render json: { error: "Review not found" }, status: :not_found
        end
    end


    private

    def review_params
        params.permit(:product_description, :rating)
    end

       

end
