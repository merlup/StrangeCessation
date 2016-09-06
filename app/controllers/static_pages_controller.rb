class StaticPagesController < ApplicationController
  def home
  	@questions = Question.all
  	@sliderimages = Sliderimage.all
  	@price_sheet_images = PriceSheetImage.all
  	@answer = Answer.new
  end


end
