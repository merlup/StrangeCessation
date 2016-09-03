class CreateAnswers < ActiveRecord::Migration
  def change
    create_table :answers do |t|
      t.string :question
      t.string :answer
      t.belongs_to :request, index: true, foreign_key: true

      t.timestamps null: false
    end
  end
end
