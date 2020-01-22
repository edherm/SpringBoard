# == Schema Information
#
# Table name: messages
#
#  id         :bigint           not null, primary key
#  title      :string           not null
#  category   :string
#  project_id :integer          not null
#  body       :text             not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

require 'test_helper'

class MessageTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
