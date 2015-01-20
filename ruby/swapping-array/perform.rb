# generates data
def mapper
  arr = []
  1.upto(1500) do |x|
    arr.push([rand(100),rand(100)])
  end
  arr
end

puts "1. testing..."
total=0

1.upto(1000) {
  arr = mapper
  t1 = Time.new
  arr.each { |x| x[0], x[1] = x[1], x[0] }
  t2 = Time.new
  total += (t2-t1).to_f
}

puts "1. teseting...ok"
puts "avg: #{total.to_f/1000}"
puts "----------"

puts "2. testing..."
total=0

1.upto(1000) {
  arr = mapper
  t1 = Time.new
  arr = arr.flatten.reverse
  t2 = Time.new
  total += (t2-t1).to_f
}

puts "2. teseting...ok"
puts "avg: #{total.to_f/1000}"
