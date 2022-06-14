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



puts "Product seeding..."

    p1 = Product.create(name: Faker::Commerce.product_name,  descripition: Faker::Lorem.sentences(number: 2), product_origin: Faker::Internet.url, vendor: Faker::Commerce.vendor, brand: Faker::Commerce.brand, category: Faker::Commerce.department)
    p2 = Product.create(name: Faker::Commerce.product_name,  descripition: Faker::Lorem.sentences(number: 2), product_origin: Faker::Internet.url, vendor: Faker::Commerce.vendor, brand: Faker::Commerce.brand, category: Faker::Commerce.department)
    p3 = Product.create(name: Faker::Commerce.product_name,  descripition: Faker::Lorem.sentences(number: 2), product_origin: Faker::Internet.url, vendor: Faker::Commerce.vendor, brand: Faker::Commerce.brand, category: Faker::Commerce.department)
    p4 = Product.create(name: Faker::Commerce.product_name,  descripition: Faker::Lorem.sentences(number: 2), product_origin: Faker::Internet.url, vendor: Faker::Commerce.vendor, brand: Faker::Commerce.brand,  category: Faker::Commerce.department)
    p5 = Product.create(name: Faker::Commerce.product_name,  descripition: Faker::Lorem.sentences(number: 2), product_origin: Faker::Internet.url, vendor: Faker::Commerce.vendor, brand: Faker::Commerce.brand, category: Faker::Commerce.department)
    p6 = Product.create(name: Faker::Commerce.product_name,  descripition: Faker::Lorem.sentences(number: 2), product_origin: Faker::Internet.url, vendor: Faker::Commerce.vendor, brand: Faker::Commerce.brand, category: Faker::Commerce.department)
    p7 = Product.create(name: Faker::Commerce.product_name,  descripition: Faker::Lorem.sentences(number: 2), product_origin: Faker::Internet.url, vendor: Faker::Commerce.vendor, brand: Faker::Commerce.brand, category: Faker::Commerce.department)
    p8 = Product.create(name: Faker::Commerce.product_name,  descripition: Faker::Lorem.sentences(number: 2), product_origin: Faker::Internet.url, vendor: Faker::Commerce.vendor, brand: Faker::Commerce.brand, category: Faker::Commerce.department)
    p9 = Product.create(name: Faker::Commerce.product_name,  descripition: Faker::Lorem.sentences(number: 2), product_origin: Faker::Internet.url, vendor: Faker::Commerce.vendor, brand: Faker::Commerce.brand, category: Faker::Commerce.department)
    p10 = Product.create(name: Faker::Commerce.product_name,  descripition: Faker::Lorem.sentences(number: 2), product_origin: Faker::Internet.url, vendor: Faker::Commerce.vendor, brand: Faker::Commerce.brand, category: Faker::Commerce.department)
   



puts "User seeding..."

u1= User.create(first_name: Faker::Name.first_name, last_name: Faker::Name.last_name , age: 18, location: Faker::Address.state,  occupation: Faker::Job.title, bio: Faker::Lorem.sentences(number: 2), bio: Faker::Lorem.sentences(number: 5), referral_code: Faker::Commerce.promotion_code, industry: Faker::IndustrySegments.sector ,  profile_pic: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cmFuZG9tJTIwcGVvcGxlfGVufDB8fDB8fA%3D%3D&w=1000&q=80", username: 'Mohamed', password: '123');
u2 = User.create( first_name: Faker::Name.first_name, last_name: Faker::Name.last_name , age: 55, location: Faker::Address.state, occupation: Faker::Job.title, bio: Faker::Lorem.sentences(number: 2), bio: Faker::Lorem.sentences(number: 4), referral_code: Faker::Commerce.promotion_code,  industry: Faker::IndustrySegments.sector ,  profile_pic: "https://preview.redd.it/e02mihul20b21.jpg?auto=webp&s=5c92534edbaa97951d8caaf1a451832947af72ea", username: 'Rodney', password: '123')
u3 = User.create(first_name: Faker::Name.first_name, last_name: Faker::Name.last_name ,age: 42, location: Faker::Address.state, occupation: Faker::Job.title, bio: Faker::Lorem.sentences(number: 2), bio: Faker::Lorem.sentences(number: 3), referral_code: Faker::Commerce.promotion_code, industry: Faker::IndustrySegments.sector ,   profile_pic: "https://images.unsplash.com/photo-1525134479668-1bee5c7c6845?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8cmFuZG9tJTIwcGVvcGxlfGVufDB8fDB8fA%3D%3D&w=1000&q=80", username: 'Sarah', password: '123')
u4 = User.create( first_name: Faker::Name.first_name, last_name: Faker::Name.last_name , age:  25, location: Faker::Address.state, occupation: Faker::Job.title, bio: Faker::Lorem.sentences(number: 2),bio: Faker::Lorem.sentences(number: 1),  referral_code: Faker::Commerce.promotion_code,  industry: Faker::IndustrySegments.sector ,  profile_pic: "https://images.unsplash.com/photo-1463453091185-61582044d556?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTl8fHJhbmRvbSUyMHBlb3BsZXxlbnwwfHwwfHw%3D&w=1000&q=80", username: 'Anthony', password: '123')
u5 = User.create( first_name: Faker::Name.first_name, last_name: Faker::Name.last_name , age: 35, location: Faker::Address.state, occupation: Faker::Job.title, bio: Faker::Lorem.sentences(number: 2), bio: Faker::Lorem.sentences(number: 6), referral_code: Faker::Commerce.promotion_code,  industry: Faker::IndustrySegments.sector ,  profile_pic: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cmFuZG9tJTIwcGVvcGxlfGVufDB8fDB8fA%3D%3D&w=1000&q=80", username: 'Isidro', password: '123')
u6 = User.create( first_name: Faker::Name.first_name, last_name: Faker::Name.last_name , age: 30, location: Faker::Address.state, occupation: Faker::Job.title, bio: Faker::Lorem.sentences(number: 2),bio: Faker::Lorem.sentences(number: 2),  referral_code: Faker::Commerce.promotion_code,  industry: Faker::IndustrySegments.sector ,   profile_pic: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fHJhbmRvbSUyMHBlb3BsZXxlbnwwfHwwfHw%3D&w=1000&q=80", username: 'Milo', password: '123')


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

