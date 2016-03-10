 class QuotePdf < Prawn::Document
  def initialize(quote)
    super(top_margin: 20)
    @quote = quote
    header
    quote_id
    quote_contact
    job_info
    images
  end

  def header
  	image "app/assets/images/HEADER.jpeg", scale: 0.3, position: :center
  end

  def quote_id
  	move_down 30
  	text "Quote \##{@quote.id}", size: 30, style: :bold
  end

  def quote_contact
  	move_down 20
	 text "Name: #{@quote.name}", size: 12 
	 text "Email: #{@quote.email}", size: 12
	 text "Address: #{@quote.address}, #{@quote.city},#{@quote.state},#{@quote.region}", size: 12
  end
  
  def job_info
  	move_down 20
    text "What would you like printed? #{@quote.question1}", size: 12
    text "What Size do you need the print? #{@quote.question2}", size: 12
    text "What Type of paper or material? #{@quote.question3}", size: 12
    text "How many of each item? #{@quote.question4}", size: 12
    text "Do you want your print cropped to bleed or with extra space? #{@quote.question5}", size: 12
    text "Do you need strips? ($5.00 extra)  #{@quote.question6}", size: 12
    text "#{@quote.question7}", size: 12
    text "Would you need a delivered or shipped order? #{@quote.question8}", size: 12
    text "When did you need order completed by? #{@quote.question9}", size: 12
    # text "#{@quote.question10}", size: 12
    # text "#{@quote.question11}", size: 12
    # text "#{@quote.question12}", size: 12
    # text "#{@quote.question13}", size: 12
    # text "#{@quote.question14}", size: 12  
  end

  def images 
  	move_down 20
  	image "public#{@quote.image}", scale: 0.5
  end



end