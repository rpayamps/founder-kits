class ReviewSerializer < ActiveModel::Serializer
  attributes :id, :product_description, :rating
  has_one :user
end
