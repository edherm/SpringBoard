# == Schema Information
#
# Table name: todos
#
#  id           :bigint           not null, primary key
#  description  :string           not null
#  todo_list_id :integer          not null
#  notes        :text
#  complete     :boolean          not null
#  created_at   :datetime         not null
#  updated_at   :datetime         not null
#

require 'test_helper'

class TodoTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
