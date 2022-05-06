class UsersController < ApplicationController
  skip_before_action :authorize

  def destroy
    session.delete :user_id
    head :no_content
  end

    def show
        user = User.find_by(username: params[:username ])
        session[:user_id] = user.id
        if user
          render json: user
        else
          render json: { error: "Not authorized" }, status: :unauthorized
        end
    end

    def create
      user = User.create(user_params)
      if user.valid?
        render json: user, status: :created
      else
        render json: { errors: user.errors.full_messages }, status: :unprocessable_entity
      end
    end
  
    private
  
    def user_params
      params.permit(:username, :password, :password_confirmation)
    end

end
