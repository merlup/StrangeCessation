class CreateQuestions < ActiveRecord::Migration
  def change
    create_table :questions do |t|
      t.string :content
      t.datetime :created_at
      t.datetime :updated_at
    end
  end
end
