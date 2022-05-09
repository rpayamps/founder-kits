class UserSerializer < ActiveModel::Serializer
  attributes :id, :name, :age, :occupation, :bio, :referral_code, :industry, :profile_pic, :username
  has_many :reviews
end
