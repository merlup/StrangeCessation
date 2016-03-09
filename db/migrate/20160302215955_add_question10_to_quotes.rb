class AddQuestion10ToQuotes < ActiveRecord::Migration
  def change
    add_column :quotes, :Question10, :string
  end
end
