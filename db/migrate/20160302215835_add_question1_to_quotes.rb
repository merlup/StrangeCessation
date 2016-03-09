class AddQuestion1ToQuotes < ActiveRecord::Migration
  def change
    add_column :quotes, :Question1, :string
  end
end
