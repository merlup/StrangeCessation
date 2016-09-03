class Question < ActiveRecord::Base
	mount_uploader :image, QuestionUploader

	
end
