json.array!(@sliderimages) do |sliderimage|
  json.extract! sliderimage, :id, :image
  json.url sliderimage_url(sliderimage, format: :json)
end
