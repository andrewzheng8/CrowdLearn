module Api
  module V1
    class UsersController < ApplicationController

      def index
        render json: User.all
      end

      def create
        @user = User.new(user_params)
        puts @user, user_params, params[:password], params[:password_confirmation]
        if @user.save
          render json: @user, status: 200
        else
          render json:  @user.errors.full_messages , status: 501
        end
      end

      def show
        render json: User.find(params[:id])
      end

      private

      def user_params
        params.require(:user).permit(:username, :email, :password, :password_confirmation)
      end


    end
  end
end
