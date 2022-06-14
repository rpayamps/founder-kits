class UsersController < ApplicationController
# skip_before_action :authorize

      def index
      users = User.all
      render json: users , status: :ok
      end

    def destroy
    session.delete :user_id
    head :no_content
    end

    def show
        user = User.find_by(id: session[:user_id])
        if user
          render json: user
        else
          render json: { error: "Users not Found" }, status: :not_found
        end
    end

    def showone
      user = User.find_by(id: params[:id])
      if user
        render json: user
      else
        render json: { error: "User not Found" }, status: :not_found
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

    def updates
      user = User.find_by(id: params[:id])
      if user
        user.update(update_params)
      else
      render json: { errors: user.errors.full_messages }, status: :unprocessable_entity
      end 
    end
  
    private

    def update_params 
      params.permit(:location, :occupation, :bio, :referral_code, :industry, :profile_pic, :username, )
    end
  
    def user_params
      params.permit(:username, :password, :password_confirmation)
    end

    

end
