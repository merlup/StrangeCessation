class Sliderimage < ActiveRecord::Base
	mount_uploader :image, SliderUploader
end
