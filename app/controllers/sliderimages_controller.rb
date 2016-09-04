class SliderimagesController < ApplicationController
before_action :set_image, only: [:show, :edit, :update, :destroy]
	def new
		@skip_header = true
    	@skip_footer = true
		@sliderimage = Sliderimage.new
	end

	def index 
		@skip_header = true
    	@skip_footer = true
		@sliderimages = Sliderimage.all
	end 

	def create
	@sliderimage = Sliderimage.new(sliderimage_params)

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
		@skip_header = true
    	@skip_footer = true
		@sliderimage = Sliderimage.find(params[:id])
	end


  def update
    respond_to do |format|
      if @sliderimage.update(sliderimage_params)
        format.html { redirect_to sliderimage_path, notice: 'Slider Image was successfully updated.' }
        format.json { render :show, status: :ok, location: @sliderimage }
      else
        format.html { render :edit }
        format.json { render json: @sliderimage.errors, status: :unprocessable_entity }
      end
    end
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

	def sliderimage_params
		params.require(:sliderimage).permit(:image)
	end

end

