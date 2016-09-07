class ChoicesController < ApplicationController
  def new
  	@choice = Choice.new
  end

  def create
  	@choice = Choice.new(choice_params)
	    respond_to do |format|
	      if @choice.save 
	      	@choice.created_at = Time.now
	        format.html { redirect_to choices_path, notice: 'Choice was successfully created.' }
	        format.json { render :show, status: :created, location: @choice }
	      else
	        format.html { render :new }
	        format.json { render json: @choice.errors, status: :unprocessable_entity }
	      end
	    end
  end

  def destroy
    @choice.destroy
    respond_to do |format|
      format.json { head :no_content }
    end

  private

  def choice_params
  	params.require(:choice).permit(:body)
  end
end
