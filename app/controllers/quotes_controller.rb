class QuotesController < ApplicationController
  before_action :set_quote, only: [:show, :edit, :update, :destroy]
  respond_to :html, :json
  # GET /quotes
  # GET /quotes.json
  def index
    @quotes = Quote.all
    respond_with = @quotes
     # respond_with(@quotes) do |format|
     #  format.json { render :json => @quote.as_json }
     #  format.html
    # end
  end

  # GET /quotes/1
  # GET /quotes/1.json
  def show #shows some material
    respond_with(@quote.as_json)
    # @quote = Quote.find(params[:id])
    #  respond_to do |format|
    #   format.html
      # format.pdf do
      #   pdf = QuotePdf.new(@quote)
      #   send_data pdf.render, filename: "quote_#{@quote.id}",
      #                         type: "application/pdf",
      #                         disposition: "inline"

      # end
    # end
  end
  # GET /quotes/new
  def new
    @quote = Quote.new
  end

  # GET /quotes/1/edit
  def edit
  end

  # POST /quotes
  # POST /quotes.json
  def create
    @quote = Quote.new(quote_params)

    respond_to do |format|
      if @quote.save
        format.html { redirect_to root_path, notice: 'Quote was successfully created.' }
        format.json { render :show, status: :created, location: @quote }
      else
        format.html { render :new }
        format.json { render json: @quote.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /quotes/1
  # PATCH/PUT /quotes/1.json
  def update
    respond_to do |format|
      if @quote.update(quote_params)
        format.html { redirect_to @quote, notice: 'Quote was successfully updated.' }
        format.json { render :show, status: :ok, location: @quote }
      else
        format.html { render :edit }
        format.json { render json: @quote.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /quotes/1
  # DELETE /quotes/1.json
  def destroy
    @quote.destroy
    render json: { status: :ok}
    # respond_to do |format|
    #   format.html { redirect_to quotes_url, notice: 'Quote was successfully destroyed.' }
    #   format.json { head :no_content }
    # end
  end

  def addtotrash
    @quote = TrashedQuote.new(quote_params)
    respond_to do |format|
      format.html { redirect_to trashed_quotes_url, notice: 'Quote was moved to trash!' }
      format.json { head :no_content }
    end
  end



  private
    # Use callbacks to share common setup or constraints between actions.
    def set_quote
      @quote = Quote.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def quote_params
      params.require(:quote).permit(:name, :email, :address, :city, :state, :region, :question1, :question2, :question3, :question4, :question5, :question6, :question7, :question8, :question9, :question10, :question11, :question12, :question13, :question14, :image )
    end
end
