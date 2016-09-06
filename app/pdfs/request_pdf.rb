 class RequestPdf < Prawn::Document
  def initialize(request)
    super(top_margin: 20)
    @request = request
    header
    request.id
    quote_id
    quote_contact
    #request.contact
    job_info
    images
  end

  def header
  	image "app/assets/images/HEADER.jpg", scale: 0.3, position: :center
  end

  def quote_id
  	move_down 30
  	text "Request \##{@request.id}", size: 30, style: :bold
  end

  def quote_contact
  	move_down 20
	 text "Name: #{@request.name}", size: 12 
	 text "Email: #{@request.email}", size: 12
	 text "Address: #{@request.address}, #{@request.city},#{@request.state},#{@request.region}", size: 12
  end
  
  def job_info
  	move_down 20
    @request.answers.each do |answer|
    text answer.question, size: 12
    text answer.answer, size: 12
    end
  end

  def images 
  	move_down 20
      if @request.image.blank?
        return
      else
  	   image "public#{@request.image}", scale: 0.5 
      end
  end



end