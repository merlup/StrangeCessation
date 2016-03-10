require 'test_helper'

class TrashedQuoteControllerTest < ActionController::TestCase
  test "should get name:string," do
    get :name:string,
    assert_response :success
  end

  test "should get :email:string," do
    get ::email:string,
    assert_response :success
  end

  test "should get address:string," do
    get :address:string,
    assert_response :success
  end

  test "should get city:string," do
    get :city:string,
    assert_response :success
  end

  test "should get state:string," do
    get :state:string,
    assert_response :success
  end

  test "should get region:string" do
    get :region:string
    assert_response :success
  end

end
