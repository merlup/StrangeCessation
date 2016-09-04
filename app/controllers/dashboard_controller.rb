class DashboardController < ApplicationController
	def index
		@questions = Question.all
	end
	

end
