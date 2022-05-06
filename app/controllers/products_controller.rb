class ProductsController < ApplicationController

    def index
        products = Products.all
        render json: products, status: :ok
    end 

    def show
        product = Product.find(params[:id])
        render json: product, status: :ok
    rescue ActiveRecord::RecordNotFound
        render json: { error: "Artist not found" }, status: :not_found
    end
end
