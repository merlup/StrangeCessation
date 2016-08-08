 class RequestPdf < Prawn::Document
  def initialize(request)
    super(top_margin: 20)
    @request = request
    header
    request.id
    #request.contact
    job_info
    images
  end

  def header
  	image "app/assets/images/HEADER.jpeg", scale: 0.3, position: :center
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
    text "What would you like printed?", size: 12
    text "What Size do you need the print? ", size: 12
    text "What Type of paper or material? }", size: 12
    text "How many of each item? ", size: 12
    text "Do you want your print cropped to bleed or with extra space? ", size: 12
    text "Do you need strips? ($5.00 extra)  ", size: 12
    text "", size: 12
    text "Would you need a delivered or shipped order? }", size: 12
    text "When did you need order completed by? ", size: 12
    # text "#{@request.question10}", size: 12
    # text "#{@request.question11}", size: 12
    # text "#{@request.question12}", size: 12
    # text "#{@request.question13}", size: 12
    # text "#{@request.question14}", size: 12  
  end

  def images 
  	move_down 20
  	image "public#{@request.image}", scale: 0.5
  end



end