class ReviewsController < ApplicationController
    # skip_before_action :authorize

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
        user = User.find_by(id: session[:user_id])
        product = Product.create!(name: params[:name], descripition: params[:descripition], product_origin: params[:product_origin], vendor: params[:vendor], brand: params[:brand], category: params[:category])
        review = Review.create!(product_description: params[:product_description], rating: params[:rating], user_id: user.id, product_id: product.id )
        if review.valid?
            render json: review, status: :created
        end 
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

    def destroy 
        review = Review.find(params[:id])
        if review
        review.destroy
        head :no_content
        else 
            render json: { error: "Review not found" }, status: :not_found
        end
    end


    private

    def review_params
        params.permit(:product_description, :rating)
    end

       

end
