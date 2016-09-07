class Question < ActiveRecord::Base
	has_many :choices
	accepts_nested_attributes_for :choices
	mount_uploader :image, QuestionUploader

	
end
