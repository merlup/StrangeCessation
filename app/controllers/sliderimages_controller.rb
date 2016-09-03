class SliderimagesController < ApplicationController
before_action :set_image, only: [:show, :edit, :update, :destroy]
	def new
		@sliderimage = Sliderimage.new
	end

	def index 
		@sliderimages = Sliderimage.all
	end 

	def create
	@sliderimage = Sliderimage.new(question_params)

	    respond_to do |format|
	      if @sliderimage.save
	      	@sliderimage.created_at = Time.now
	        format.html { redirect_to sliderimages_path, notice: 'Sliderimage was successfully created.' }
	        format.json { render :show, status: :created, location: @sliderimage }
	      else
	        format.html { render :new }
	        format.json { render json: @sliderimage.errors, status: :unprocessable_entity }
	      end
	    end
	end

	def show
		@sliderimage = Sliderimage.find(params[:id])
	end
	
	 def destroy
	@sliderimage.destroy
	respond_to do |format|
  		format.html { redirect_to sliderimages_url, notice: 'Image was successfully destroyed.' }
  		format.json { head :no_content }
		end
    end

	private

	 def set_image
      @sliderimage = Sliderimage.find(params[:id])
    end

	def question_params
		params.require(:sliderimage).permit(:image)
	end

end

