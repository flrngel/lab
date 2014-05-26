require 'redis'
redis=Redis.new

arr=[]
1.upto(1000000) do |i|
	arr.push Random.rand(1..10000000)
end

puts "--test--"

i=0
t1=Time.new
arr.each do |x|
	redis.get(x)
	i=i+1
	puts i if i%1000 == 0
end
t2=Time.new

puts t2-t1
