class AddQuestion4ToQuotes < ActiveRecord::Migration
  def change
    add_column :quotes, :Question4, :string
  end
end
