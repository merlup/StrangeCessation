class TrashedQuoteController < ApplicationController
  before_action :set_trashed_quote, only: [:show, :edit, :update, :destroy]

  # GET /quotes
  # GET /quotes.json
  def index
    @trashed_quotes = TrashedQuote.all
  end

  # GET /quotes/1
  # GET /quotes/1.json
  def show
  end

  # GET /quotes/new
  def new
    @trash_quote = TrashedQuote.new
  end

  # GET /quotes/1/edit
  def edit
  end

  # POST /quotes
  # POST /quotes.json
  def create
    @trash_quote = TrashedQuote.new(quote_params)
    respond_to do |format|
      if @trash_quote.save
        format.html { redirect_to trashed_quote_path, notice: 'Quote was successfully Trashed.' }
        format.json { render :show, status: :created, location: @trash_quote }
      else
        format.html { render :new }
        format.json { render json: @trash_quote.errors, status: :unprocessable_entity }
      end
    end
  end

  def destroy
    @trash_quote.destroy
    respond_to do |format|
      format.html { redirect_to trashed_quotes_url, notice: 'Quote was successfully destroyed.' }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_trashed_quote
      @trash_quote = TrashedQuote.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def trashed_quote_params
      params.require(:trashed_quote).permit(:name, :email, :address, :city, :state, :region, :question1, :question2, :question3, :question4, :question5, :question6, :question7, :question8, :question9, :question10, :question11, :question12, :question13, :question14, )
    end


end
