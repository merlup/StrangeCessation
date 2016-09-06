class AnswersController < ApplicationController

	def new
		@answer = Answer.new
	end
	def create
		@answer = Answer.new(answer_params)
		if @answer.save
	        format.json { render :show, status: :created, location: @answer }
	    end
	end

	private

	def answer_params
		params.require(:answer).permit(:question, :answer)
	end
end
