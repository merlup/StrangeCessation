class AddQuestion3ToQuotes < ActiveRecord::Migration
  def change
    add_column :quotes, :Question3, :string
  end
end
