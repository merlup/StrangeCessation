class PriceSheetImagesController < ApplicationController
  before_action :set_price_sheet_image, only: [:show, :edit, :update, :destroy]

 
  def index
    @skip_header = true
      @skip_footer = true
    @price_sheet_images = PriceSheetImage.all
  end

  def show
    @skip_header = true
      @skip_footer = true
       @price_sheet_images = PriceSheetImage.find(params[:id])
  end

  def new
    @skip_header = true
      @skip_footer = true
    @price_sheet_images = PriceSheetImage.new
  end

  def edit
    @skip_header = true
      @skip_footer = true
  end


  def create
    @price_sheet_image = PriceSheetImage.new(price_sheet_image_params)
    @price_sheet_image.image = params[:file]
    respond_to do |format|
      if @price_sheet_image.save
        format.html { redirect_to price_sheet_images_path, notice: 'Price sheet image was successfully created.' }
        format.json { render :show, status: :created, location: @price_sheet_image }
      else
        format.html { render :new }
        format.json { render json: @price_sheet_image.errors, status: :unprocessable_entity }
      end
    end
  end

  def update
    respond_to do |format|
      if @price_sheet_image.update(price_sheet_image_params)
        format.html { redirect_to @price_sheet_image, notice: 'Price sheet image was successfully updated.' }
        format.json { render :show, status: :ok, location: @price_sheet_image }
      else
        format.html { render :edit }
        format.json { render json: @price_sheet_image.errors, status: :unprocessable_entity }
      end
    end
  end

  def destroy
    @price_sheet_image.destroy
    respond_to do |format|
      format.json { head :no_content }
    end
  end

  private
   
    def set_price_sheet_image
      @price_sheet_image = PriceSheetImage.find(params[:id])
    end

    def price_sheet_image_params
      params.require(:price_sheet_image).permit(:image)
    end
end
