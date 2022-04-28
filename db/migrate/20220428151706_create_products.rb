class CreateProducts < ActiveRecord::Migration[6.1]
  def change
    create_table :products do |t|
      t.string :name
      t.string :descripition
      t.string :product_origin
      t.string :vendor
      t.string :brand
   

      t.timestamps
    end
  end
end
