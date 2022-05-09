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
end
