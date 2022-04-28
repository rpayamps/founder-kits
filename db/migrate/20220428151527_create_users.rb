class CreateUsers < ActiveRecord::Migration[6.1]
  def change
    create_table :users do |t|
      t.string :name
      t.integer :age
      t.string :occupation
      t.string :bio
      t.string :referral_code
      t.string :profile_pic
      

      t.timestamps
    end
  end
end
