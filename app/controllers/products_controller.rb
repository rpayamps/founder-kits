class ProductsController < ApplicationController

    # skip_before_action :authorize

    def index
        products = Product.all
        render json: products, status: :ok
    end 

    def show
        product = Product.find(params[:id])
        render json: product, status: :ok
    rescue ActiveRecord::RecordNotFound
        render json: { error: "Product not found" }, status: :not_found
    end

    def create
        product = Product.create!(name: params[:name], description: params[:description], product_origin: params[:product_origin], vendor: params[:vedor], brand: params[:brand], category: params[:category], review_id: review_id.id)
        render json: product, status: :created
    end
    
end
