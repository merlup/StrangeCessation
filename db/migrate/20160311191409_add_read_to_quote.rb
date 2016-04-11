class AddReadToQuote < ActiveRecord::Migration
  def change
    add_column :quotes, :read, :boolean
  end
end
