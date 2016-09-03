class StaticPagesController < ApplicationController
  def home
  	@questions = Question.all
  	@sliderimages = Sliderimage.all
  	@answer = Answer.new
  end


end
