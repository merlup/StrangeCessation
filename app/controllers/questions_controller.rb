class QuestionsController < ApplicationController
before_action :set_question, only: [:show, :edit, :update, :destroy]
	def new
	@skip_header = true
    @skip_footer = true
		@question = Question.new
	end

	def index 
		@skip_header = true
   		@skip_footer = true
		@questions = Question.all
	end 

	def edit
		@skip_header = true
   		@skip_footer = true
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


  def update
    respond_to do |format|
      if @question.update(question_params)
        format.html { redirect_to question_path, notice: 'Question was successfully updated.' }
        format.json { render :show, status: :ok, location: @question }
      else
        format.html { render :edit }
        format.json { render json: @question.errors, status: :unprocessable_entity }
      end
    end
  end

	def show
		@skip_header = true
   		@skip_footer = true
		@question = Question.find(params[:id])
		
	end
	
	def destroy
    @question.destroy
    respond_to do |format|
      format.json { head :no_content }
    end
  end


	private

	 def set_question
      @question = Question.find(params[:id])
    end

	def question_params
		params.require(:question).permit(:content, :image)
	end



end
