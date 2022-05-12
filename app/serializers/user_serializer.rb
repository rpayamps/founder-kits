class UserSerializer < ActiveModel::Serializer
  attributes :id, :first_name, :last_name, :age, :location, :occupation, :bio, :referral_code, :industry, :profile_pic, :username
  has_many :reviews

end
