require 'test_helper'

class IndexControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get index_index_url
    assert_response :success
  end

end
