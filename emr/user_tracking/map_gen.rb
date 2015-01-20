require "set"
require "uuid"

def time_rand from = 0.0, to = Time.now
    Time.at(from + rand * (to.to_f - from.to_f))
end

def create_session
  UUID.generate
end

set = Set.new
session = {}

1.upto(100) do |x|
  session[x] = create_session
end

1.upto(1500000) do |x|
  time = time_rand
  user = 1+Random.rand(100)

  if Random.rand(100) > 30
    sess = session[user]
  else
    sess = session[user] = create_session
  end

  action = "card_view"

  puts [time,user,sess,action,Random.rand(100000)].join("|")
end
