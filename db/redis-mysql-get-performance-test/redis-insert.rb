require 'redis'
redis=Redis.new

1.upto(10000000) do |i|
	redis.set(i,"iu12h31uh23iu1h23ijh1iruh3ijnvifsuhsiuhdf")
end
