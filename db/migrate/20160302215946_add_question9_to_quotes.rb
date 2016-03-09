class AddQuestion9ToQuotes < ActiveRecord::Migration
  def change
    add_column :quotes, :Question9, :string
  end
end
