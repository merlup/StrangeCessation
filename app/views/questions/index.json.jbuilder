json.array!(@questions) do |question|
  json.extract! question, :id, :content, :image
  json.url question_url(question, format: :json)
end
