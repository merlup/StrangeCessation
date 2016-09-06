class AddChoiceAmountToQuestions < ActiveRecord::Migration
  def change
    add_column :questions, :choice_amount, :string
  end
end
