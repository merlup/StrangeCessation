class QuestionsController < ApplicationController
before_action :set_question, only: [:show, :edit, :update, :destroy]
	def new
		@question = Question.new
	end

	def index 
		@questions = Question.all
	end 

	def create
	@question = Question.new(question_params)

	    respond_to do |format|
	      if @question.save
	      	@question.created_at = Time.now
	        format.html { redirect_to questions_path, notice: 'Question was successfully created.' }
	        format.json { render :show, status: :created, location: @question }
	      else
	        format.html { render :new }
	        format.json { render json: @question.errors, status: :unprocessable_entity }
	      end
	    end
	end

	def show
		@question = Question.find(params[:id])
	end
	
	def delete	
	end

	private

	 def set_question
      @question = Question.find(params[:id])
    end

	def question_params
		params.require(:question).permit(:content, :image)
	end



end
