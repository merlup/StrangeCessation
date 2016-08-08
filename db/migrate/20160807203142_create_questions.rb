class CreateQuestions < ActiveRecord::Migration
  def change
    create_table :questions do |t|
      t.string :q
      t.belongs_to :request, index: true, foreign_key: true

      t.timestamps null: false
    end
  end
end
