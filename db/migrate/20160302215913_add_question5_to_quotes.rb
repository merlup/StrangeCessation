class AddQuestion5ToQuotes < ActiveRecord::Migration
  def change
    add_column :quotes, :Question5, :string
  end
end
