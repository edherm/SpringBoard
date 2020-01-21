@messages.each do |message|
  json.set! message.id do
    json.partial! "message", message: message
  end
end