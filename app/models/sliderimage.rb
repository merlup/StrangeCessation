class Sliderimage < ActiveRecord::Base
	mount_uploader :image, SliderUploader
	validates_presence_of :image, presence: true
end
