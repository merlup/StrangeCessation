require 'test_helper'

class PriceSheetImagesControllerTest < ActionController::TestCase
  setup do
    @price_sheet_image = price_sheet_images(:one)
  end

  test "should get index" do
    get :index
    assert_response :success
    assert_not_nil assigns(:price_sheet_images)
  end

  test "should get new" do
    get :new
    assert_response :success
  end

  test "should create price_sheet_image" do
    assert_difference('PriceSheetImage.count') do
      post :create, price_sheet_image: { image: @price_sheet_image.image }
    end

    assert_redirected_to price_sheet_image_path(assigns(:price_sheet_image))
  end

  test "should show price_sheet_image" do
    get :show, id: @price_sheet_image
    assert_response :success
  end

  test "should get edit" do
    get :edit, id: @price_sheet_image
    assert_response :success
  end

  test "should update price_sheet_image" do
    patch :update, id: @price_sheet_image, price_sheet_image: { image: @price_sheet_image.image }
    assert_redirected_to price_sheet_image_path(assigns(:price_sheet_image))
  end

  test "should destroy price_sheet_image" do
    assert_difference('PriceSheetImage.count', -1) do
      delete :destroy, id: @price_sheet_image
    end

    assert_redirected_to price_sheet_images_path
  end
end
