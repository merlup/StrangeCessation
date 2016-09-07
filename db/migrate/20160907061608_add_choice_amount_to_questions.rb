class AddChoiceAmountToQuestions < ActiveRecord::Migration
  def change
    add_column :questions, :choice_amount, :integer
  end
end
