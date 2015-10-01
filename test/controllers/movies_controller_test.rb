require 'test_helper'

class MoviesControllerTest < ActionController::TestCase
  test "should get main" do
    get :main
    assert_response :success
  end

end
