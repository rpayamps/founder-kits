class CreateReviews < ActiveRecord::Migration[6.1]
  def change
    create_table :reviews do |t|
      t.string :product_description
      t.integer :rating
      t.belongs_to :product
      t.belongs_to :user
      

      t.timestamps
    end
  end
end
