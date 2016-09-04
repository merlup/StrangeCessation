class RequestsController < ApplicationController

  before_action :set_request, only: [:show, :edit, :update, :destroy]
  respond_to :html, :json
 
  def index
    @skip_header = true
    @skip_footer = true
    @requests = Request.paginate(:page => params[:page], :per_page => 5)
    respond_with = @requests
  end


  def show
    @skip_header = true
    @skip_footer = true
    self.markread
    @request.save
    @request = Request.find(params[:id])
     respond_with do |request|
      request.as_json

      request.pdf do
        pdf = RequestPdf.new(@request)
        send_data pdf.render, filename: "request_#{@request.id}", type: "application/pdf", disposition: "inline"
      end
    end
  end
 
  def new
    @request = Request.new
    @request.answers.build
  end


  def edit
  end


  def create
    @request = Request.new(request_params)
    @request.answers.build

    @request.read = false;
    respond_to do |format|
      if @request.save
        format.html { redirect_to root_path, notice: 'Request was successfully created.' }
        format.json { render :show, status: :created, location: @request }
      else
        format.html { render :new }
        format.json { render json: @request.errors, status: :unprocessable_entity }
      end
    end
  end


  def update
    respond_to do |format|
      if @request.update(request_params)
        format.html { redirect_to @request, notice: 'Request was successfully updated.' }
        format.json { render :show, status: :ok, location: @request }
      else
        format.html { render :edit }
        format.json { render json: @request.errors, status: :unprocessable_entity }
      end
    end
  end


  def destroy
    @request.destroy
    respond_to do |format|
      format.html { redirect_to requests_url, notice: 'Request was successfully destroyed.' }
      format.json { head :no_content }
    end
 end

  def read?
    if @request.read = false
      false
    else
      true
    end
  end

  def markread 
    if @request.read == false
      @request.read = true
    end
  end


  private
    # Use callbacks to share common setup or constraints between actions.
    def set_request
      @request = Request.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def request_params
      params.require(:request).permit(:name, :email, :address, :city, :state, :region,  :image, :read, :questions, :answers, answers_attributes:[:id, :question, :answer] )
    end
end
