class CreateUsers < ActiveRecord::Migration[6.1]
  def change
    create_table :users do |t|
      t.string :first_name
      t.string :last_name
      t.integer :age
      t.string :location 
      t.string :occupation
      t.string :bio
      t.string :referral_code
      t.string :industry
      t.string :profile_pic
      t.string :username
      t.string :password_digest
      

      t.timestamps
    end
  end
end
