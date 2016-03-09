json.array!(@quotes) do |quote|
  json.extract! quote, :id, :name, :email, :address, :city, :state, :region
  json.url quote_url(quote, format: :json)
end
