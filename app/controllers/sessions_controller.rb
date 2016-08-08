class SessionsController < ApplicationController

  def new
  end

  def create
    user = User.find_by(username: params[:session][:username])
    if user && user.authenticate(params[:session][:password])
      log_in user
      redirect_to '/requests'
    else
      flash.now[:danger] = 'Invalid email/password combination'
      render 'static_pages/home'
    end
  end

  def loggedin?
    @user = session[:user_id]
    redirect_to '/requests'
  end

  def destroy
    log_out if logged_in?
    session[:user_id] = nil
    cookies.delete(:auth_token)
    session.clear
    redirect_to root_url, :notice => "Logged out!"
  end

  def session_params
      params.require(:session).permit(:user_id)
  end
end