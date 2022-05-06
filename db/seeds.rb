# # This file should contain all the record creation needed to seed the database with its default values.
# # The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
# #
# # Examples:
# #
# #   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
# #   Character.create(name: 'Luke', movie: movies.first)
# require 'faker'

User.destroy_all
Product.destroy_all
Review.destroy_all

puts "User seeding..."
 User.create(name: Faker::Name.name, age: 18, occupation: Faker::Job.title, bio: Faker::Lorem.sentences(number: 2), referral_code: Faker::Commerce.promotion_code, profile_pic: Faker::LoremPixel.image, username: 'Mohamed', password: '123');

u1 = User.create( name: Faker::Name.name, age: 55, occupation: Faker::Job.title, bio: Faker::Lorem.sentences(number: 2), referral_code: Faker::Commerce.promotion_code, profile_pic: Faker::LoremPixel.image)
u2 = User.create( name: Faker::Name.name, age: 42, occupation: Faker::Job.title, bio: Faker::Lorem.sentences(number: 2), referral_code: Faker::Commerce.promotion_code, profile_pic: Faker::LoremPixel.image)
u3 = User.create( name: Faker::Name.name, age:  25, occupation: Faker::Job.title, bio: Faker::Lorem.sentences(number: 2), referral_code: Faker::Commerce.promotion_code, profile_pic: Faker::LoremPixel.image)
u4 = User.create( name: Faker::Name.name, age: 35, occupation: Faker::Job.title, bio: Faker::Lorem.sentences(number: 2), referral_code: Faker::Commerce.promotion_code, profile_pic: Faker::LoremPixel.image)
u5 = User.create( name: Faker::Name.name, age: 30, occupation: Faker::Job.title, bio: Faker::Lorem.sentences(number: 2), referral_code: Faker::Commerce.promotion_code, profile_pic: Faker::LoremPixel.image)


puts "Product seeding..."

    p1 = Product.create(name: Faker::Commerce.product_name,  descripition: Faker::Lorem.sentences(number: 2), product_origin: Faker::Internet.url, vendor: Faker::Commerce.vendor, brand: Faker::Commerce.brand, category: Faker::Commerce.department)
    p2 = Product.create(name: Faker::Commerce.product_name,  descripition: Faker::Lorem.sentences(number: 2), product_origin: Faker::Internet.url, vendor: Faker::Commerce.vendor, brand: Faker::Commerce.brand, category: Faker::Commerce.department)
    p3 = Product.create(name: Faker::Commerce.product_name,  descripition: Faker::Lorem.sentences(number: 2), product_origin: Faker::Internet.url, vendor: Faker::Commerce.vendor, brand: Faker::Commerce.brand, category: Faker::Commerce.department)
    p4 =Product.create(name: Faker::Commerce.product_name,  descripition: Faker::Lorem.sentences(number: 2), product_origin: Faker::Internet.url, vendor: Faker::Commerce.vendor, brand: Faker::Commerce.brand,  category: Faker::Commerce.department)
    p5 = Product.create(name: Faker::Commerce.product_name,  descripition: Faker::Lorem.sentences(number: 2), product_origin: Faker::Internet.url, vendor: Faker::Commerce.vendor, brand: Faker::Commerce.brand, category: Faker::Commerce.department)
    p6 = Product.create(name: Faker::Commerce.product_name,  descripition: Faker::Lorem.sentences(number: 2), product_origin: Faker::Internet.url, vendor: Faker::Commerce.vendor, brand: Faker::Commerce.brand, category: Faker::Commerce.department)
    p7 = Product.create(name: Faker::Commerce.product_name,  descripition: Faker::Lorem.sentences(number: 2), product_origin: Faker::Internet.url, vendor: Faker::Commerce.vendor, brand: Faker::Commerce.brand, category: Faker::Commerce.department)
    p8 = Product.create(name: Faker::Commerce.product_name,  descripition: Faker::Lorem.sentences(number: 2), product_origin: Faker::Internet.url, vendor: Faker::Commerce.vendor, brand: Faker::Commerce.brand, category: Faker::Commerce.department)
    p9 = Product.create(name: Faker::Commerce.product_name,  descripition: Faker::Lorem.sentences(number: 2), product_origin: Faker::Internet.url, vendor: Faker::Commerce.vendor, brand: Faker::Commerce.brand, category: Faker::Commerce.department)
    p10 =Product.create(name: Faker::Commerce.product_name,  descripition: Faker::Lorem.sentences(number: 2), product_origin: Faker::Internet.url, vendor: Faker::Commerce.vendor, brand: Faker::Commerce.brand, category: Faker::Commerce.department)
   

puts "Reviews seeding..."

   
   r1 = Review.create(product_description: Faker::Lorem.sentences(number: 5), rating: Faker::Number.between(from: 1, to: 5), user_id: u1.id, product_id: p1.id )
   r2 = Review.create(product_description: Faker::Lorem.sentences(number: 5), rating: Faker::Number.between(from: 1, to: 5), user_id: u1.id, product_id: p1.id)
   r3 = Review.create(product_description: Faker::Lorem.sentences(number: 5), rating: Faker::Number.between(from: 1, to: 5), user_id: u2.id, product_id: p2.id)
   r4 = Review.create(product_description: Faker::Lorem.sentences(number: 5), rating: Faker::Number.between(from: 1, to: 5), user_id: u2.id, product_id: p2.id)
   r5 =Review.create(product_description: Faker::Lorem.sentences(number: 5), rating: Faker::Number.between(from: 1, to: 5), user_id: u3.id, product_id: p3.id)
   r6 = Review.create(product_description: Faker::Lorem.sentences(number: 5), rating: Faker::Number.between(from: 1, to: 5),  user_id: u3.id, product_id: p3.id)
   r7 = Review.create(product_description: Faker::Lorem.sentences(number: 5), rating: Faker::Number.between(from: 1, to: 5), user_id: u4.id, product_id: p4.id)
   r8 = Review.create(product_description: Faker::Lorem.sentences(number: 5), rating: Faker::Number.between(from: 1, to: 5), user_id: u4.id, product_id: p4.id)
   r9 = Review.create(product_description: Faker::Lorem.sentences(number: 5), rating: Faker::Number.between(from: 1, to: 5), user_id: u5.id, product_id: p5.id)
   r10 =Review.create(product_description: Faker::Lorem.sentences(number: 5), rating: Faker::Number.between(from: 1, to: 5), user_id: u5.id, product_id: p5.id)
  


puts "Seeding Complete!"

