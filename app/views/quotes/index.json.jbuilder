json.array!(@quotes) do |quote|
  json.extract! quote, :id, :name, :email, :address, :city, :state, :region, :question1 , :question2 , :question3 , :question4 , :question5 , :question6 , :question7 , :question8 , :question9 , :question10 , :question11 , :question12 , :question13 , :question14, :image, :read 

  json.url quote_url(quote, format: :json)
end
